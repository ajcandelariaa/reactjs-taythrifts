import React, { useState, useEffect } from "react";
import AddItem from "../../components/store/AddItem";
import EditItem from "../../components/store/EditItem";
import Inventory from "../../components/store/Inventory";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../../services/Firebase";

function Dashboard() {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState("Default");
  const [itemId, setItemId] = useState("Default");
  const accountId = window.sessionStorage.getItem("account_id");

  const showAddItem = () => setShow("Add");
  const showDefault = () => setShow("Default");
  const showEditItem = (id) => {
    setShow("Edit"); 
    setItemId(id);
  }

  console.log(show);

  useEffect(() => {
  const itemsCollection = collection(db, "items");
    const q = query(itemsCollection, where("store_id", "==", accountId), orderBy("created_at", "desc"));
    const unsub = onSnapshot(q, querySnapsot => {
      let itemsArray = []
      querySnapsot.forEach(doc => {
        itemsArray.push({...doc.data(), item_id: doc.id})
      });
      setItems(itemsArray);
    });
    return () => unsub();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mt-5">
        {show !== "Default" ? (
          <>
            <button
              className="py-2 px-3 bg-green-600 hover:bg-green-700 text-white"
              onClick={showDefault}
            >
              <i className="fa-solid fa-arrow-left mr-2"></i>Go Back
            </button>
          </>
        ) : (
          <>
            <button
              className="py-2 px-3 bg-green-600 hover:bg-green-700 text-white"
              onClick={showAddItem}
            >
              <i className="fa-solid fa-plus mr-2"></i>Add Item
            </button>
          </>
        )}
      </div>

      {show === "Add" ? (
        <AddItem />
      ) : show === "Edit" ? (
        <EditItem showDefault={showDefault} itemId={itemId}  />
      ) : (
        <Inventory items={items} showEditItem={showEditItem} />
      )}
    </div>
  );
}

export default Dashboard;
