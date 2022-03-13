import React, { useState, useEffect } from "react";
import CustomerNavbar from "../../components/Navbars/CustomerNavbar";
import Category from "../../components/Customer/Category";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import MarketplaceSidebar from "../../components/Customer/MarketplaceSidebar";

function Marketplace() {
  const [category, setCategory] = useState("All Products");
  const [items, setItems] = useState([]);

  const itemsCollectionRef = collection(db, "items");
  const storesCollectionRef = collection(db, "stores");

  useEffect(() => {
    let itemObject = [];
    const getUsers = async () => {
      const itemData = await getDocs(itemsCollectionRef);
      const storeData = await getDocs(storesCollectionRef);

      itemData.docs.forEach((doc) => {
        storeData.docs.forEach((doc2) => {
          itemObject.push({
            item_id: doc.id,
            item_name: doc.data().item_name,
            item_actegory: doc.data().item_actegory,
            item_desc: doc.data().item_desc,
            item_imageUrl: doc.data().item_imageUrl,
            item_last_price: doc.data().item_last_price,
            item_price: doc.data().item_price,
            store_name: doc2.data().name,
            store_imageUrl: doc2.data().imageUrl,
          });
        });
      })

      setItems(itemObject);
    };

    getUsers();
  }, []);

  return (
    <div>
      <CustomerNavbar link="../images/taythrifts_logo.png" />
      <div className="flex bg-gray-300">
        <MarketplaceSidebar category={category} setCategory={setCategory} />
        <Category category={category} items={items} />
      </div>
    </div>
  );
}

export default Marketplace;
