import React, { useState } from "react";

function NameYourPrice({ setNameYourPriceModal, item_price, last_price, handleAddToCart }) {
  const [price, setPrice] = useState(item_price);

  const handleSubmit = () => {
    handleAddToCart(price);
    setNameYourPriceModal(false);
  };

  return (
    <div>
      <div
        className="w-full min-h-screen max-h-full fixed left-0 top-0 bot-0 z-10 pt-24 "
        style={{ background: `rgba(0, 0, 0, 0.6)` }}
      ></div>
      <div className="fixed left-0 top-0 right-0 mt-10 bg-white w-96 border z-20 border-gray-300 rounded-md text-center mx-auto py-5">
        <p className="text-xl mb-5">Name Your Price</p>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            className="w-3/5 border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
            value={price}
            min={last_price}
            max={item_price}
            step=".01"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <p className="mt-2">Enter any amount from {last_price} php - {item_price} php</p>
          <div className="mt-5">
            <button className="bg-green-500 hover:bg-green-600 py-1 px-10 rounded-md text-white mr-1">Submit</button>
            <button
              className="bg-red-500 hover:bg-red-600 py-1 px-10 rounded-md text-white ml-1"
              onClick={() => setNameYourPriceModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NameYourPrice;
