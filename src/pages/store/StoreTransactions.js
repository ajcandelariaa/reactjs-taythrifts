import React, { useEffect, useState } from "react";
import StoreTransaction from "../../components/store/StoreTransaction";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../services/Firebase";

function StoreTransactions() {
  const [transactions, setTransactions] = useState([]);
  const accountId = window.sessionStorage.getItem("account_id");

  useEffect(() => {
    const customersCollection = collection(db, "customers");
    const cartsCollection = collection(db, "carts");
    const ordersCollection = collection(db, "orders");
    let customersArray = [];
    let cartsArray = [];

    const getCustomers = () => {
      const queryStoreData = query(customersCollection);
      const unsub = onSnapshot(queryStoreData, (querySnapsot) => {
        querySnapsot.forEach((doc) => {
          customersArray.push({ ...doc.data(), customer_id: doc.id });
        });
      });
      return () => unsub();
    };

    const getCarts = () => {
      const q = query(
        cartsCollection,
        where("store_id", "==", accountId),
        where("checkout", "==", true)
      );
      const unsub = onSnapshot(q, (querySnapsot) => {
        querySnapsot.forEach((doc) => {
          cartsArray.push({ ...doc.data(), cartId: doc.id });
        });
      });
      return () => unsub();
    };

    const getTransactions = () => {
      let transactionsArray = [];
      const q = query(ordersCollection, orderBy("orderNumber", "desc"));
      const unsub = onSnapshot(q, (querySnapsot) => {
        querySnapsot.forEach((doc) => {
          let cartItemsArray = [];
          let totalSpent = 0;
          cartsArray.forEach((cart) => {
            if (doc.data().orderNumber === cart.order_number) {
              totalSpent += cart.total_price;
              cartItemsArray.push({
                ...cart,
                cartId: cart.cartId,
              });
            }
          });
          if (cartItemsArray.length > 0) {
            customersArray.forEach((customer) => {
              if (customer.customer_id === doc.data().customer_id) {
                transactionsArray.push({
                  ...doc.data(),
                  totalSpent: totalSpent,
                  orderId: doc.id,
                  items: cartItemsArray,
                  numberOfItems: cartItemsArray.length,
                  customerName: customer.nickname,
                });
              }
            });
          }
        });
        setTransactions(transactionsArray);
      });
      return () => unsub();
    };

    getCustomers();
    getCarts();
    getTransactions();
  }, []);
  return (
    <div className="container mx-auto my-10 bg-white">
      <div className="grid grid-cols-6 gap-4 w-full justify-items-center items-center font-bold bg-inventoryHeaderBg text-white py-3">
        <p>Order Number</p>
        <p>Checkout Date</p>
        <p>Customer</p>
        <p>Total Spent</p>
        <p>Number of Items</p>
        <p>View Items</p>
      </div>
      {transactions.length === 0
        ? "No transactions have been made yet"
        : transactions.map((transaction) => (
            <StoreTransaction
              transaction={transaction}
              key={transaction.orderId}
            />
          ))}
    </div>
  );
}

export default StoreTransactions;
