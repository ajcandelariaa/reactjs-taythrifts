import React, { useState, useEffect } from "react";
import StoreItem from "./StoreItem";

import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase";

function Inventory() {
  const [items, setItems] = useState([]);
  const accountId = window.sessionStorage.getItem("account_id");

  useEffect(() => {
    const itemsCollection = collection(db, "items");
    const q = query(
      itemsCollection,
      where("store_id", "==", accountId),
      orderBy("created_at", "desc")
    );

    const getItems = async () => {
      const itemData = await getDocs(q);
      setItems(
        itemData.docs.map((doc2) => ({ ...doc2.data(), item_id: doc2.id }))
      );
    };

    getItems();
  }, []);

  return (
    <div className="mt-5">
      <div className="grid grid-cols-12 gap-4 w-full justify-items-center items-center font-bold bg-black text-white py-2">
        <p className="col-span-1">Image</p>
        <p className="col-span-3">Product Name</p>
        <p className="col-span-2">Description</p>
        <p className="col-span-2">Category</p>
        <p className="col-span-1">Actual Price</p>
        <p className="col-span-1">Last Price</p>
        <p className="col-span-1">Created At</p>
        <p className="col-span-1">Actions</p>
      </div>

      {items.length === 0
        ? "You have no added items yet"
        : items.map((item) => <StoreItem item={item} key={item.item_id} />)}
    </div>
  );
}

export default Inventory;
