import React, { useEffect } from "react";
import StoreTransactionItem from "./StoreTransactionItem";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../services/Firebase";

function StoreTransaction() {

  useEffect(() => {
    // const accountId = window.sessionStorage.getItem("account_id");
    // const cartsCollection = collection(db, "carts");
    // const customersCollection = collection(db, "customers");
    // let orderNumbersArray = [];
    // let customersArray = [];

    // const getOrderNumbers = () => {
    //   const q = query(
    //     cartsCollection,
    //     where("store_id", "==", accountId),
    //     where("checkout", "==", true)
    //   );
    //   const unsub = onSnapshot(q, (querySnapsot) => {
    //     querySnapsot.forEach((doc) => {
    //       if (!orderNumbersArray.includes(doc.data().order_number)) {
    //         orderNumbersArray.push(doc.data().order_number);
    //       }
    //     });
    //   });
    //   return () => unsub();
    // };

    // const getCustomers = () => {
    //   const queryStoreData = query(customersCollection);
    //   const unsub = onSnapshot(queryStoreData, (querySnapsot) => {
    //     querySnapsot.forEach((doc) => {
    //       customersArray.push({ ...doc.data(), customer_id: doc.id });
    //     });
    //   });
    //   return () => unsub();
    // };

    // const getTransactions = () => {
    //   const transactionsArray = [];
    //   console.log(orderNumbersArray.length);
    //   console.log(orderNumbersArray);
    //   orderNumbersArray.forEach((orderNumber) => {
    //     const transaction = [];
    //     let customerId = "";
    //     const q = query(
    //       cartsCollection,
    //       where("store_id", "==", accountId),
    //       where("order_number", "==", orderNumber)
    //     );
    //     const unsub = onSnapshot(q, (querySnapsot) => {
    //       querySnapsot.forEach((doc) => {
    //         console.log(doc.data());
    //         transaction.push({ ...doc.data() });
    //         customerId = doc.data().customer_id;
    //       });
    //     });
    //     customersArray.forEach((customer) => {
    //       if (customer.customer_id === customerId) {
    //         transactionsArray.push({
    //           orders: transaction,
    //           orderNumber: orderNumber,
    //           customerName: customer.nickname,
    //           customerImage: customer.imageUrl,
    //         });
    //       }
    //     });
    //     return () => unsub();
    //   });
    // };

    // getOrderNumbers();
    // getCustomers();
    // getTransactions();
  }, []);

  return (
    <div className="bg-gray-100 shadow-lg p-5 mt-10 rounded-xl">
      <div className="flex justify-around text-black font-semibold  text-xl">
        <p>Customer: Aj Candelaria</p>
        <p>Order Number: #536</p>
        <p>Date: September 5, 2020</p>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-10 gap-4 w-full justify-items-center items-center font-bold bg-inventoryHeaderBg text-white py-2">
          <p className="col-span-1">Image</p>
          <p className="col-span-3">Product Name</p>
          <p className="col-span-2">Description</p>
          <p className="col-span-1">Category</p>
          <p className="col-span-1">Quantity</p>
          <p className="col-span-1">Price</p>
          <p className="col-span-1">Total Price</p>
        </div>
        <StoreTransactionItem />
        <StoreTransactionItem />
        <StoreTransactionItem />
      </div>
    </div>
  );
}

export default StoreTransaction;
