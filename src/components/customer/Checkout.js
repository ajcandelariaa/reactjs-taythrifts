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

function Checkout({ setShow, carts, overallAmount }) {
  const [loader, setLoader] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);
  const accountId = window.sessionStorage.getItem("account_id");

  useEffect(() => {
    setOrderNumber(carts[0].order_number);
  }, []);

  const updateCart = async () => {
    setLoader(true);
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
      setShow("Default");
    });
  };

  return (
    <div>
      <button
        className="py-2 px-3 bg-green-600 hover:bg-green-700 text-white"
        onClick={() => setShow("Default")}
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
            onClick={updateCart}
          >
            Submit Order
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
