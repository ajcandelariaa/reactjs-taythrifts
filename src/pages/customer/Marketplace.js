import React, { useState, useEffect } from "react";
import Category from "../../components/customer/Category";
import MarketplaceSidebar from "../../components/customer/MarketplaceSidebar";
import {
  collection,
  limit,
  orderBy,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../services/Firebase";

function Marketplace() {
  const [category, setCategory] = useState("All Products");
  const [filters, setFilters] = useState([]);
  const [items, setItems] = useState([]);
  const [latest, setLatest] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [countAll, setCountAll] = useState(0);
  const [countLatest, setCountLatest] = useState(0);
  const [countBestSeller, setCountBestSeller] = useState(0);
  const [countTops, setCountTops] = useState(0);
  const [countPants, setCountPants] = useState(0);
  const [countShorts, setCountShorts] = useState(0);
  const [countDresses, setCountDresses] = useState(0);
  const [countOthers, setCountOthers] = useState(0);

  useEffect(() => {
    const itemsCollectionRef = collection(db, "items");
    const storesCollectionRef = collection(db, "stores");
    let storesArray = [];

    const getStores = () => {
      const queryStoreData = query(storesCollectionRef);
      const unsub = onSnapshot(queryStoreData, (querySnapsot) => {
        querySnapsot.forEach((doc) => {
          storesArray.push({ ...doc.data(), store_id: doc.id });
        });
      });
      return () => unsub();
    };

    const getAllProducts = () => {
      const queryItemData = query(
        itemsCollectionRef,
        orderBy("item_price", "asc")
      );
      const unsub = onSnapshot(queryItemData, (querySnapsot) => {
        let itemsArray = [];
        querySnapsot.forEach((doc) => {
          switch (doc.data().item_category) {
            case "Tops":
              setCountTops((prevCount) => prevCount + 1);
              break;
            case "Pants":
              setCountPants((prevCount) => prevCount + 1);
              break;
            case "Shorts":
              setCountShorts((prevCount) => prevCount + 1);
              break;
            case "Dresses":
              setCountDresses((prevCount) => prevCount + 1);
              break;
            case "Others":
              setCountOthers((prevCount) => prevCount + 1);
              break;
            default:
          }
          storesArray.forEach((i) => {
            if (doc.data().store_id === i.store_id) {
              itemsArray.push({
                ...doc.data(),
                item_id: doc.id,
                store_id: i.store_id,
                store_name: i.name,
                store_imageUrl: i.imageUrl,
              });
            }
          });
        });
        setItems(itemsArray);
        setFilters(itemsArray);
        setCountAll(itemsArray.length);
      });
      return () => unsub();
    };
    const getBestSellers = () => {
      const qBestSeller = query(
        itemsCollectionRef,
        where("item_purchase", ">", 0),
        orderBy("item_purchase", "desc"),
        limit(10)
      );
      const unsub = onSnapshot(qBestSeller, (querySnapsot) => {
        let itemsArray = [];
        querySnapsot.forEach((doc) => {
          storesArray.forEach((i) => {
            if (doc.data().store_id === i.store_id) {
              itemsArray.push({
                ...doc.data(),
                item_id: doc.id,
                store_id: i.store_id,
                store_name: i.name,
                store_imageUrl: i.imageUrl,
              });
            }
          });
        });
        setBestSeller(itemsArray);
        setCountBestSeller(itemsArray.length);
      });
      return () => unsub();
    };

    const getLatestProducts = () => {
      const qLatest = query(
        itemsCollectionRef,
        orderBy("created_at", "desc"),
        limit(10)
      );
      const unsub = onSnapshot(qLatest, (querySnapsot) => {
        let itemsArray = [];
        querySnapsot.forEach((doc) => {
          storesArray.forEach((i) => {
            if (doc.data().store_id === i.store_id) {
              itemsArray.push({
                ...doc.data(),
                item_id: doc.id,
                store_id: i.store_id,
                store_name: i.name,
                store_imageUrl: i.imageUrl,
              });
            }
          });
        });
        setLatest(itemsArray);
        setCountLatest(itemsArray.length);
      });
      return () => unsub();
    };

    getStores();
    getAllProducts();
    getBestSellers();
    getLatestProducts();
  }, []);
  
  return (
    <div className="flex">
      <MarketplaceSidebar
        items={items}
        bestSeller={bestSeller}
        latest={latest}
        category={category}
        setCategory={setCategory}
        setFilters={setFilters}
        countAll={countAll}
        countLatest={countLatest}
        countBestSeller={countBestSeller}
        countTops={countTops}
        countPants={countPants}
        countShorts={countShorts}
        countDresses={countDresses}
        countOthers={countOthers}
      />
      <Category
        category={category}
        items={filters}
        latest={latest}
        bestSeller={bestSeller}
      />
    </div>
  );
}

export default Marketplace;
