import React from "react";
import StoreItem from "./StoreItem";

function Inventory({items, showEditItem}) {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-12 gap-4 w-full justify-items-center items-center font-semibold bg-inventoryHeaderBg text-white py-5">
        <p className="col-span-1">Image</p>
        <p className="col-span-3">Product Name</p>
        <p className="col-span-2">Description</p>
        <p className="col-span-1">Category</p>
        <p className="col-span-1">Actual Price</p>
        <p className="col-span-1">Last Price</p>
        <p className="col-span-2">Created At</p>
        <p className="col-span-1">Actions</p>
      </div>

      {items.length === 0
        ? "You have no added items yet"
        : items.map((item) => <StoreItem item={item} key={item.item_id} showEditItem={showEditItem} />)}
    </div>
  );
}

export default Inventory;
