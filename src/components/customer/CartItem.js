import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../services/Firebase";
import { toastSuccess, toastError } from "../../helpers/Toaster";

function CartItem({ cart }) {
  const cartDoc = doc(db, "carts", cart.cart_id);

  const deleteCart = async () => {
    await deleteDoc(cartDoc).then(() => {
      toastSuccess("Item Deleted!");
    });
  };

  const updateCart = async (newQuant, newTotalPrice, message) => {
    await updateDoc(cartDoc, {
      total_price: Number(newTotalPrice),
      item_quantity: Number(newQuant),
    }).then(() => {
      toastSuccess(message);
    });
  };

  const decreaseQuantity = () => {
    updateCart(cart.item_quantity - 1, cart.total_price - cart.item_price, "Quantity Decreased!");
  };

  const increaseQuantity = () => {
    updateCart(cart.item_quantity + 1, cart.total_price + cart.item_price, "Quantity Increased!");
  };

  const removeItemCliked = () => {
      deleteCart();
  }

  return (
    <div className="my-4">
      <div className="grid grid-cols-footerGrid gap-5">
        <img
          src="../images/sampleItem.jpg"
          alt="sampleItem"
          className="object-cover h-full"
        />
        <div>
          <h1>{cart.item_name}</h1>
          <div className="mt-2 flex gap-3">
            <img
              src={cart.store_imageUrl}
              alt="sampleResto"
              className="w-6 h-6 object-cover rounded-full"
            />
            <p>{cart.store_name}</p>
          </div>
          <div className="my-5">
            <div className="flex">
              <p className="pr-2">Quantity: </p>
              {
                  cart.item_quantity === 1 ? <>
                    <button className="bg-gray-500 text-white w-5 cursor-not-allowed" disabled> - </button>
                  </> : <>
                  
              <button
                className="bg-gray-700 text-white w-5"
                onClick={decreaseQuantity}
              >
                -
              </button>
                  </>
              }
              <div className="w-8">
                <p className="bg-gray-300 text-center">{cart.item_quantity}</p>
              </div>
              <button
                className="bg-gray-700 text-white w-5"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <p>Category: {cart.item_category}</p>
            <p>Descirption: {cart.item_desc}</p>
            <p>Item Price: ₱ {parseFloat(cart.item_price).toFixed(2)}</p>
            <p>Total Price: ₱ {parseFloat(cart.total_price).toFixed(2)}</p>
          </div>
          <div className="">
            <p className="text-red-500 hover:underline cursor-pointer" onClick={removeItemCliked}>
              <i className="fa-solid fa-trash mr-2"></i>Remove Item
            </p>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 mt-8"></div>
    </div>
  );
}

export default CartItem;
