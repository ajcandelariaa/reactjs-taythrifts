import React, { useState } from "react";
import { motion } from "framer-motion";

function NameYourPriceModal({
  setNameYourPriceModal,
  item_price,
  last_price,
  handleAddToCart,
}) {
  const [price, setPrice] = useState(item_price);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddToCart(price);
    setNameYourPriceModal(false);
  };

  return (
    <div>
      <motion.div
        key={"modal 1"}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0.3,
          },
        }}
        className="w-full min-h-screen max-h-full fixed left-0 top-0 bot-0 z-10 pt-24 "
        style={{ background: `rgba(0, 0, 0, 0.8)` }}
      ></motion.div>
      <motion.div
        key={"modal 2"}
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          scale: 0,
          transition: {
            delay: 0.3,
          },
        }}
        className="fixed left-0 top-0 right-0 mt-10 bg-white w-96 border z-20 border-gray-300 rounded-md text-center mx-auto p-5"
      >
        <p className="text-xl mb-5">Name Your Price</p>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            className="w-3/5 border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700 text-center"
            value={price}
            min={last_price}
            max={item_price}
            step=".01"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <p className="mt-2 text-sm text-gray-600">
            Enter any amount from {last_price} php - {item_price} php
          </p>
          <div className="mt-5">
            <button className="bg-green-500 hover:bg-green-600 py-1 px-10 rounded-md text-white mr-1">
              Submit
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 py-1 px-10 rounded-md text-white ml-1"
              onClick={(e) => {
                e.preventDefault();
                setNameYourPriceModal(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default NameYourPriceModal;
