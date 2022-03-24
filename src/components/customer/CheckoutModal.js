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
import { convertDateToString } from "../../helpers/GetStringDate";
import ConfirmDialog from "../../helpers/ConfirmDialog";

function CheckoutModal({
  setCheckoutModal,
  carts,
  overallAmount,
  payment,
  setPayment,
  fullname,
  contactNumber,
  emailAddress,
  address,
}) {
  const [loader, setLoader] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [firstDate, setFirstDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const accountId = window.sessionStorage.getItem("account_id");

  useEffect(() => {
    var today = new Date(),
      date =
        today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear();
    var nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000),
      date2 =
        nextWeek.getMonth() +
        "/" +
        nextWeek.getDate() +
        "/" +
        nextWeek.getFullYear();
    setFirstDate(convertDateToString(date));
    setLastDate(convertDateToString(date2));
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
  };

  return (
    <div>
      <div
        className="w-full min-h-screen max-h-full fixed left-0 top-0 bot-0 z-10 pt-24 "
        style={{ background: `rgba(0, 0, 0, 0.8)` }}
      ></div>
      <div className="fixed left-0 top-0 right-0 mt-10 bg-white w-1/2 z-20 rounded-md mx-auto">
        {
          modal ? <div className="w-full absolute z-50 h-full style-modal1"></div> : ''
        }
        
        <div className="p-5">
          <h1 className="text-2xl text-center">Billing Summary</h1>

          <div className="border border-gray-300 mt-5 p-3">
            <h1 className="text-xl mb-2">Customer Information</h1>
            <p>Name: {fullname}</p>
            <p>Delivery Address: {address}</p>
            <p>Contact Number: {contactNumber}</p>
            <p>Email Address: {emailAddress}</p>
          </div>

          <div className="border border-gray-300 mt-5 p-3">
            <h1 className="text-xl mb-2">Mode of Payment</h1>
            <p>{payment}</p>
          </div>

          <div className="border border-gray-300 mt-5 p-3">
            <h1 className="text-xl mb-2">Exepected Delivery Date</h1>
            <p>
              {firstDate} - {lastDate}
            </p>
          </div>

          <div className="border border-gray-300 mt-5 p-3">
            <h1 className="text-xl mb-2">Cart({carts.length})</h1>
            {carts.map((cart) => {
              return (
                <div className="flex justify-between px-3">
                  <p>{cart.item_name}</p>
                  <p>x{cart.item_quantity}</p>
                  <p>₱ {parseFloat(cart.total_price).toFixed(2)}</p>
                </div>
              );
            })}

            <div className="border border-gray-100 my-2"></div>
            <div className="flex justify-between px-3">
              <p>Shipping Fee</p>
              <p></p>
              <p>₱ 50.00</p>
            </div>
            <div className="border border-gray-100 my-2"></div>
            <div className="flex justify-between px-3">
              <p>Total Amount</p>
              <p></p>
              <p>₱ {parseFloat(overallAmount).toFixed(2)}</p>
            </div>
          </div>

          <div className="mt-5 flex justify-between">
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
            <button
              className="bg-red-600 hover:bg-red-700 py-2 px-24 rounded-md text-white"
              onClick={() => setCheckoutModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <ConfirmDialog
          setModal={setModal}
          message={message}
          loader={loader}
          deleteItem={updateCart}
          isImportant={true}
        />
      )}
    </div>
  );
}

export default CheckoutModal;
