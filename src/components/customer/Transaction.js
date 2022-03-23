import React from "react";
import TransactionItem from "./TransactionItem";

function Transaction({ transaction }) {
  return (
    <div className="bg-gray-300 shadow-lg p-5 mt-10 rounded-xl">
      <div className="flex justify-around text-black font-semibold  text-xl">
        <p>Order Number: #{transaction.orderNumber}</p>
        <p>Total Spent: ₱ {parseFloat(transaction.totalSpent).toFixed(2)}</p>
        <p>
          Date:{" "}
          {new Date(transaction.checkoutDate.seconds * 1000).toLocaleDateString("en-US")}
        </p>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-12 gap-4 w-full justify-items-center items-center font-bold bg-black text-white py-2">
          <p className="col-span-1">Image</p>
          <p className="col-span-3">Product Name</p>
          <p className="col-span-2">Description</p>
          <p className="col-span-1">Supplier</p>
          <p className="col-span-2">Location</p>
          <p className="col-span-1">Quantity</p>
          <p className="col-span-1">Product Price</p>
          <p className="col-span-1">Total Price</p>
        </div>
        {
          transaction.items.map((item) => <TransactionItem item={item} key={item.cartId} />)
        }
      </div>
    </div>
  );
}

export default Transaction;
