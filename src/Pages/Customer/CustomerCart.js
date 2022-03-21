import React, { useEffect, useState } from "react";
import { collection, query, where, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../services/Firebase";
import { toastSuccess, toastError } from "../../helpers/Toaster";
import CartItem from "../../components/customer/CartItem";

function CustomerCart() {
  const [carts, setCarts] = useState([]);
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [totalCart, setTotalCart] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [overallAmount, setOverallAmount] = useState(0);
  const accountId = window.sessionStorage.getItem("account_id");

  useEffect(() => {
    const customersCollectionRef = doc(db, "customers", accountId);
    const storesCollectionRef = collection(db, "stores");
    const cartsCollectionRef = collection(db, "carts");
    let storesArray = [];

    const getCustomer = () => {
      const unsub = onSnapshot(customersCollectionRef, (doc) => {
        setFullname(
          doc.data().firstname +
            " " +
            doc.data().middlename +
            " " +
            doc.data().lastname
        );
        setAddress(doc.data().address);
        setContactNumber(doc.data().contactNumber);
      });
      return () => unsub();
    };

    const getStore = () => {
      const queryStoreData = query(storesCollectionRef);
      const unsub = onSnapshot(queryStoreData, (querySnapsot) => {
        querySnapsot.forEach((doc) => {
          storesArray.push({ ...doc.data(), store_id: doc.id });
        });
      });
      return () => unsub();
    };

    const getCartItems = () => {
      const qCarts = query(
        cartsCollectionRef,
        where("customer_id", "==", accountId),
        where("checkout", "==", false)
      );
      const unsub = onSnapshot(qCarts, (querySnapsot) => {
        let cartItemsArray = [];
        let total = 0;
        let totalQuant = 0;
        querySnapsot.forEach((doc) => {
          storesArray.forEach((i) => {
            console.log(doc.data().store_id === i.store_id);
            if (doc.data().store_id === i.store_id) {
              total += doc.data().total_price;
              totalQuant += doc.data().item_quantity;
              cartItemsArray.push({
                ...doc.data(),
                cart_id: doc.id,
                store_name: i.name,
                store_imageUrl: i.imageUrl,
              });
            }
          });
        });
        console.log(cartItemsArray);
        setCarts(cartItemsArray);
        setTotalCart(totalQuant);
        setTotalAmount(total);
        setOverallAmount(total + 50);
      });
      return () => unsub();
    };

    getCustomer();
    getStore();
    getCartItems();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="w-3/4 grid grid-cols-3 mx-auto mt-5 mb-10 gap-x-3">
        <div className="col-span-1">
          <div className="p-5 shadow-xl">
            <p>Summary</p>
            <div className="grid grid-cols-2">
              <p>Total amount</p>
              <p>₱ {parseFloat(totalAmount).toFixed(2)}</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Shipping Fee</p>
              <p>₱ 50.00</p>
            </div>
            <div className="border border-gray-500 my-5"></div>
            <div className="grid grid-cols-2">
              <p>Total Amount</p>
              <p>₱ {parseFloat(overallAmount).toFixed(2)}</p>
            </div>
            <button className="uppercase text-white bg-blue-600 px-4 py-2 rounded-md mt-5">
              Checkout
            </button>
          </div>

          <div className="p-5 shadow-xl mt-5">
            <p>Customer Information</p>
            <div className="mt-5">
              <p>Full Name:</p>
              <p>{fullname}</p>
            </div>
            <div className="mt-5">
              <p>Address:</p>
              <p>{address}</p>
            </div>
            <div className="mt-5">
              <p>Contact Number:</p>
              <p>{contactNumber}</p>
            </div>
            <div className="mt-5">
              <p>Mode of Payment:</p>
              <p>Cash On Delivery (COD)</p>
            </div>
            {/* <div className="mt-5">
              <p>Expected delivery date:</p>
              <p>March 7th 2022 - March 14th 2022</p>
            </div> */}
          </div>
        </div>
        <div className="col-span-2">
          <div className="p-5 shadow-xl">
            <p>Cart ({totalCart} Item/s)</p>
            {carts.length === 0
              ? "You don't have any added item yet"
              : carts.map((cart) => (
                  <CartItem cart={cart} key={cart.cart_id} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCart;
