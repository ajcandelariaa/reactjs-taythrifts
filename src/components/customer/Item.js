import React, { useEffect, useState } from "react";
import {
  collection,
  limit,
  orderBy,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { db } from "../../services/Firebase";
import { toastSuccess, toastError } from "../../helpers/Toaster";
import NameYourPriceModal from "./NameYourPriceModal";
import ItemModal from "./ItemModal";

function Item(props) {
  const [isHover, setIsHover] = useState(false);
  const [lastPriceExist, setLastPriceExist] = useState(false);
  const [loader, setLoader] = useState(false);
  const [nameYourPriceModal, setNameYourPriceModal] = useState(false);
  const [itemModal, setItemModal] = useState(false);
  const accountId = window.sessionStorage.getItem("account_id");
  const cartsCollectionRef = collection(db, "carts");

  useEffect(() => {
    if (props.item.item_last_price !== "") {
      setLastPriceExist(true);
    }
  }, []);

  const handleAddToCart = async (cartPrice) => {
    let orderNumber = 536;
    let cartArray = [];

    const getCarts1 = async () => {
      const queryCartData = query(
        cartsCollectionRef,
        orderBy("order_number", "desc"),
        limit(1)
      );
      const querySnapshot = await getDocs(queryCartData);
      querySnapshot.forEach((doc) => {
        orderNumber = doc.data().order_number + 1;
      });
    };

    const getCarts2 = async () => {
      const queryCartData = query(
        cartsCollectionRef,
        where("customer_id", "==", accountId),
        where("checkout", "==", false)
      );
      const querySnapshot = await getDocs(queryCartData);
      querySnapshot.forEach((doc) => {
        cartArray.push({ ...doc.data() });
        orderNumber = doc.data().order_number;
      });
    };

    const addToCart = async () => {
      setLoader(true);
      let isItemExist = false;

      cartArray.forEach((cart) => {
        if (cart.item_id === props.item.item_id) {
          isItemExist = true;
        }
      });

      if (!isItemExist) {
        const cartCollection = collection(db, "carts");
        await addDoc(cartCollection, {
          checkout: false,
          customer_id: accountId,
          store_id: props.item.store_id,
          item_category: props.item.item_category,
          item_desc: props.item.item_desc,
          item_id: props.item.item_id,
          item_imageUrl: props.item.item_imageUrl,
          item_name: props.item.item_name,
          item_price: Number(cartPrice),
          item_quantity: 1,
          order_number: Number(orderNumber),
          total_price: Number(cartPrice),
        })
          .then(() => {
            toastSuccess("Added To Cart");
            setLoader(false);
          })
          .catch((err) => {
            toastError("Error Adding To Cart");
            setLoader(false);
            console.log(err.message);
          });
      } else {
        toastError("This item is already in your cart!");
        setLoader(false);
      }
    };

    await getCarts1();
    await getCarts2();
    addToCart();
  };


  return (
    <div className="shadow-2xl bg-white rounded-xl">
      <div
        className="bg-itemBgHover rounded-tr-xl rounded-tl-xl relative cursor-pointer"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img
          src={props.item.item_imageUrl}
          alt="sampleItem"
          className={
            isHover
              ? "h-80 object-cover w-full rounded-tr-xl rounded-tl-xl opacity-50"
              : "h-80 object-cover w-full rounded-tr-xl rounded-tl-xl"
          }
          onClick={() => setItemModal(true)}
        />

        {isHover && (
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 grid grid-rows-2 gap-2">
            {loader === true ? (
              <>
                <button
                  className={`text-black bg-gray-300 rounded-3xl w-40 py-2 cursor-wait row-span-2 ${
                    lastPriceExist && "row-span-1"
                  }`}
                  disabled
                >
                  Adding...
                </button>
              </>
            ) : (
              <>
                <button
                  className={`text-black bg-white rounded-3xl w-40 py-2 hover:text-white hover:bg-itemBgHover row-span-2 ${
                    lastPriceExist && "row-span-1"
                  }`}
                  onClick={() => handleAddToCart(props.item.item_price)}
                >
                  Add to Cart
                </button>
              </>
            )}
            {lastPriceExist && (
              <button
                className="text-black bg-white rounded-3xl w-40 py-2 hover:text-white hover:bg-itemBgHover"
                onClick={() => setNameYourPriceModal(true)}
              >
                Name your price
              </button>
            )}
          </div>
        )}
      </div>
      <div className="flex justify-between py-3 px-5 w-full">
        <div>
          <div className="flex gap-1 items-center">
            <img
              src={props.item.store_imageUrl}
              alt="sampleResto"
              className="w-6 h-6 object-cover rounded-full"
            />
            <p>{props.item.store_name}</p>
          </div>
          <p className="mt-1 opacity-50">{props.item.item_name}</p>
        </div>
        <div>
          <p>₱ {parseFloat(props.item.item_price).toFixed(2)}</p>
          {lastPriceExist && (
            <p className="opacity-50 mt-1">
              ₱ {parseFloat(props.item.item_last_price).toFixed(2)}
            </p>
          )}
        </div>
      </div>
      {nameYourPriceModal && (
        <NameYourPriceModal
          setNameYourPriceModal={setNameYourPriceModal}
          item_price={parseFloat(props.item.item_price).toFixed(2)}
          last_price={parseFloat(props.item.item_last_price).toFixed(2)}
          handleAddToCart={handleAddToCart}
        />
      )}

      
      {itemModal && (
        <ItemModal
        item={props.item}
        setItemModal={setItemModal}
        lastPriceExist={lastPriceExist}
        loader={loader}
        handleAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default Item;
