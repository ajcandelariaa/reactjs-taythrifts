import React, { useState, useEffect } from "react";
import {
  collection,
  limit,
  orderBy,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../services/Firebase";
import Transaction from "../../components/customer/Transaction";

function CustomerTransactions() {
  const [transactions, setTransactions] = useState([]);
  const accountId = window.sessionStorage.getItem("account_id");

  useEffect(() => {
    const storesCollectionRef = collection(db, "stores");
    const ordersCollectionRef = collection(db, "orders");
    const cartsCollectionRef = collection(db, "carts");
    let storesArray = [];
    let cartItemsArray = [];

    const getStores = () => {
      const queryStoreData = query(storesCollectionRef);
      const unsub = onSnapshot(queryStoreData, (querySnapsot) => {
        querySnapsot.forEach((doc) => {
          storesArray.push({ store_name: doc.data().name, store_id: doc.id, store_address: doc.data().address });
        });
      });
      return () => unsub();
    };

    const getCartItems = () => {
      const queryOrdersData = query(
        cartsCollectionRef,
        where("customer_id", "==", accountId),
        where("checkout", "==", true)
      );
      const unsub = onSnapshot(queryOrdersData, (querySnapsot) => {
        querySnapsot.forEach((doc) => {
          cartItemsArray.push({ ...doc.data(), cartId: doc.id });
        });
      });
      return () => unsub();
    };

    const getOrders = () => {
      const queryOrdersData = query(
        ordersCollectionRef,
        where("customer_id", "==", accountId),
        orderBy("orderNumber", "desc")
      );
      const unsub = onSnapshot(queryOrdersData, (querySnapsot) => {
        let transactionArray = [];
        querySnapsot.forEach((doc) => {
          let transactionItemsArray = [];
          cartItemsArray.forEach((cart) => {
            if (doc.data().orderNumber === cart.order_number) {
              storesArray.forEach((store) => {
                if (cart.store_id === store.store_id) {
                  transactionItemsArray.push({
                    ...cart,
                    cartId: cart.cartId,
                    storeName: store.store_name,
                    storeAddress: store.store_address,
                  });
                }
              });
            }
          });
          transactionArray.push({
            transactionId: doc.id,
            totalSpent: doc.data().total_price,
            orderNumber: doc.data().orderNumber,
            checkoutDate: doc.data().checkout_date,
            items: transactionItemsArray,
          });
        });
        setTransactions(transactionArray);
      });
      return () => unsub();
    };

    getStores();
    getCartItems();
    getOrders();
  }, []);
  return (
    <div className="container mx-auto my-10">
      {transactions.length === 0
        ? "No transactions have been made yet!"
        : transactions.map((transaction) => 
          <Transaction transaction={transaction} key={transaction.transactionId} />
        )}
    </div>
  );
}

export default CustomerTransactions;
