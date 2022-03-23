import React from "react";
import StoreTransactionItem from "./StoreTransactionItem";

function StoreTransaction({ transaction }) {
  return (
    <div className="bg-gray-100 shadow-lg p-5 mt-10 rounded-xl">
      <div className="flex justify-around text-black font-semibold  text-xl">
        <p>Customer: {transaction.customerName}</p>
        <p>Order Number: #{transaction.orderNumber}</p>
        <p>Date: {new Date(transaction.checkout_date.seconds * 1000).toLocaleDateString("en-US")}</p>
        <p>Total Spent: ₱ {parseFloat(transaction.totalSpent).toFixed(2)}</p>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-10 gap-4 w-full justify-items-center items-center font-bold bg-inventoryHeaderBg text-white py-2">
          <p className="col-span-1">Image</p>
          <p className="col-span-3">Product Name</p>
          <p className="col-span-2">Description</p>
          <p className="col-span-1">Category</p>
          <p className="col-span-1">Quantity</p>
          <p className="col-span-1">Price</p>
          <p className="col-span-1">Total Price</p>
        </div>
        {transaction.items.map((item) => (
          <StoreTransactionItem item={item} key={item.cartId} />
        ))}
      </div>
    </div>
  );
}

export default StoreTransaction;
