import React from "react";

function StoreTransactionItem({item}) {
  return (
    <div>
      <div className="border border-gray-200"></div>
      <div className="grid grid-cols-10 gap-4 my-1 w-full justify-items-center items-center">
        <img
          className="col-span-1 w-20 h-20 object-cover"
          src={item.item_imageUrl}
          alt="sampleItem"
        />
        <p className="col-span-3">{item.item_name}</p>
        <p className="col-span-2 overflow-hidden h-20 pt-1">{item.item_desc}</p>
        <p className="col-span-1">{item.item_category}</p>
        <p className="col-span-1">{item.item_quantity}</p>
        <p className="col-span-1">₱ {parseFloat(item.item_price).toFixed(2)}</p>
        <p className="col-span-1">₱ {parseFloat(item.total_price).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default StoreTransactionItem;
