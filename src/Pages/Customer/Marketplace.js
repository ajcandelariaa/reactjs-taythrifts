import React, { useState, useEffect } from "react";
import CustomerNavbar from "../../components/Navbars/CustomerNavbar";
import Category from "../../components/Customer/Category";
import MarketplaceSidebar from "../../components/Customer/MarketplaceSidebar";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function Marketplace() {
  const [category, setCategory] = useState("All Products");
  const [items, setItems] = useState([]);

  const itemsCollectionRef = collection(db, "items");
  const storesCollectionRef = collection(db, "stores");

  useEffect(() => {
    const getItems = async () => {
      const itemData = await getDocs(itemsCollectionRef);
      const storeData = await getDocs(storesCollectionRef);

      setItems(itemData.docs.map((doc) => {
        const store = storeData.docs.filter((doc2) => doc2.id === doc.data().store_id).map((doc3) => ({...doc3.data()}));
        return ({...doc.data(), item_id: doc.id, store_name: store[0].name, store_imageUrl: store[0].imageUrl})
      }));
    };

    getItems();
  }, []);

  return (
    <div>
      <CustomerNavbar link="../images/taythrifts_logo.png" />
      <div className="flex bg-gray-300">
        <MarketplaceSidebar category={category} setCategory={setCategory} />
        <Category category={category} items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default Marketplace;
