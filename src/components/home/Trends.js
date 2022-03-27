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

function Trends() {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const itemsCollectionRef = collection(db, "items");

    const getItems = () => {
      const qBestSeller = query(
        itemsCollectionRef,
        where("item_purchase", ">", 0),
        orderBy("item_purchase", "asc"),
        limit(4)
      );
      const unsub = onSnapshot(qBestSeller, (querySnapsot) => {
        let itemsArray = [];
        querySnapsot.forEach((doc) => {
          itemsArray.push({
            ...doc.data(),
          });
        });
        setBestSeller(itemsArray);
      });
      return () => unsub();
    };

    getItems();
  }, []);

  return (
    <div className="trends bg-white">
      <div className="container mx-auto py-20">
        <h1 className="text-4xl text-center mb-10">Trends</h1>
        <div className="grid grid-cols-4 text-center gap-10">
          <div>
            <img src="../images/customer.jpg" className="" />
            <p className="mt-5 mb-2">Men's Blazer</p>
            <p className="text-xl text-orange-500">₱700.00</p>
          </div>
          <div>
            <img src="../images/customer.jpg" className="" />
            <p className="mt-5 mb-2">Men's Blazer</p>
            <p className="text-xl text-orange-500">₱700.00</p>
          </div>
          <div>
            <img src="../images/customer.jpg" className="" />
            <p className="mt-5 mb-2">Men's Blazer</p>
            <p className="text-xl text-orange-500">₱700.00</p>
          </div>
          <div>
            <img src="../images/customer.jpg" className="" />
            <p className="mt-5 mb-2">Men's Blazer</p>
            <p className="text-xl text-orange-500">₱700.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trends;
