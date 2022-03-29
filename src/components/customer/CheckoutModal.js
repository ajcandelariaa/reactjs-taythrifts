import React, { useEffect, useRef, useState } from "react";
import {
  collection,
  query,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../services/Firebase";
import { toastSuccess, toastError } from "../../helpers/Toaster";
import { convertDateToString } from "../../helpers/GetStringDate";
import ConfirmDialog from "../../helpers/ConfirmDialog";
import { motion, AnimatePresence } from "framer-motion";

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
  const [storeItems, setStoreItems] = useState([]);
  const [divHeight, setDivHeight] = useState("");
  const divRef = useRef();
  const accountId = window.sessionStorage.getItem("account_id");

  useEffect(() => {
    let storeItemsArray = [];
    const itemsCollectionRef = collection(db, "items");

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

    const getItems = () => {
      const queryStoreData = query(itemsCollectionRef);
      const unsub = onSnapshot(queryStoreData, (querySnapsot) => {
        querySnapsot.forEach((doc) => {
          storeItemsArray.push({
            item_purchase: doc.data().item_purchase,
            item_id: doc.id,
          });
        });
        setStoreItems(storeItemsArray);
      });
      return () => unsub();
    };

    getItems();
  }, []);

  const updateCart = async () => {
    setLoader(true);
    setModal(false);
    await carts.forEach((cart) => {
      const cartDoc = doc(db, "carts", cart.cart_id);
      updateDoc(cartDoc, {
        checkout: true,
      });

      storeItems.forEach((item) => {
        if (item.item_id === cart.item_id) {
          const itemDoc = doc(db, "items", cart.item_id);
          updateDoc(itemDoc, {
            item_purchase: (item.item_purchase += cart.item_quantity),
          });
        }
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
    setDivHeight(divRef.current.scrollHeight);
    setMessage("Are you sure you want to submit your order?");
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        }}
        className="w-full min-h-screen max-h-full fixed left-0 top-0 bot-0 z-10 pt-24 "
        style={{ background: `rgba(0, 0, 0, 0.8)` }}
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.2,
          },
        }}
        exit={{
          scale: 0,
        }}
        className={`fixed left-0 top-0 right-0 mt-10 bg-white w-1/2 z-20 ${
          modal ? "overflow-hidden" : "overflow-y-scroll"
        } rounded-md mx-auto`}
        ref={divRef}
        style={{ maxHeight: `${window.innerHeight - 100}px` }}
      >
        {modal ? (
          <div
            className="w-full absolute z-50 style-modal1 overflow-auto"
            style={{ height: `${divHeight}px` }}
          ></div>
        ) : (
          ""
        )}

        <div className="p-5">
          <div className="flex justify-center">
            <p className="text-2xl uppercase border border-sideBarMarketplaceButtonsActive w-fit py-2 px-10">
              Billing Summary
            </p>
          </div>

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
                <div className="flex flex-row justify-between px-3">
                  <p className="flex-1">{cart.item_name}</p>
                  <p className="flex-1 text-center">x{cart.item_quantity}</p>
                  <p className="flex-1 text-right">
                    ₱ {parseFloat(cart.total_price).toFixed(2)}
                  </p>
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
      </motion.div>

      <AnimatePresence>
        {modal && (
          <ConfirmDialog
            setModal={setModal}
            message={message}
            loader={loader}
            deleteItem={updateCart}
            isImportant={true}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default CheckoutModal;
