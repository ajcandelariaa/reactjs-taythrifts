import React, { useEffect, useState } from "react";
import {
  collection,
  limit,
  orderBy,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../services/Firebase";
import { toastSuccess, toastError } from "../../helpers/Toaster";
import ConfirmDialog from "../../helpers/ConfirmDialog";

function CheckoutModal({ setCheckoutModal, carts, overallAmount, payment, setPayment }) {
  const [loader, setLoader] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const accountId = window.sessionStorage.getItem("account_id");

  useEffect(() => {
    setOrderNumber(carts[0].order_number);
  }, []);

  const updateCart = async () => {
    setLoader(true);
    setModal(false);
    await carts.forEach((cart) => {
      const cartDoc = doc(db, "carts", cart.cart_id);
      updateDoc(cartDoc, {
        checkout: true,
      });
    });
    await addToOrders();
  };

  const addToOrders = async () => {
    const ordersCollection = collection(db, "orders");
    await addDoc(ordersCollection, {
      customer_id: accountId,
      orderNumber: Number(orderNumber),
      total_price: Number(overallAmount),
      checkout_date: serverTimestamp(),
    }).then(() => {
      toastSuccess("Order Submitted");
      setLoader(false);
      setCheckoutModal(false);
      setPayment("");
    });
  };

  const submitClicked = () => {
    setModal(true);
    setMessage("Are you sure you want to submit your order?");
  }

  return (
    <div>
      <div
        className="w-full min-h-screen max-h-full fixed left-0 top-0 bot-0 z-10 pt-24 "
        style={{ background: `rgba(0, 0, 0, 0.8)` }}
      ></div>
      <div className="fixed left-0 top-0 right-0 mt-10 bg-white w-96 border z-20 border-gray-300 rounded-md text-center mx-auto p-5">
        <button
          className="py-2 px-3 bg-green-600 hover:bg-green-700 text-white"
          onClick={() => setCheckoutModal(false)}
        >
          <i className="fa-solid fa-arrow-left mr-2"></i>Go Back
        </button>

        {loader === true ? (
          <>
            <button
              className="bg-gray-300 py-2 px-24 rounded-md text-black cursor-wait"
              disabled
            >
              Submitting...
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-sideBarMarketplaceButtonsActive hover:bg-sideBarMarketplaceButtons py-2 px-24 rounded-md text-white"
              onClick={submitClicked}
            >
              Submit Order
            </button>
          </>
        )}
      </div>

      {modal && (
        <ConfirmDialog
          setModal={setModal}
          message={message}
          loader={loader}
          deleteItem={updateCart}
        />
      )}
    </div>
  );
}

export default CheckoutModal;
