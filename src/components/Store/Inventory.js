import React from "react";
import StoreItem from "./StoreItem";

function Inventory() {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-12 gap-4 w-full justify-items-center items-center font-bold bg-black text-white py-2">
        <p className="col-span-1">Image</p>
        <p className="col-span-3">Product Name</p>
        <p className="col-span-2">Description</p>
        <p className="col-span-2">Category</p>
        <p className="col-span-2">Actual Price</p>
        <p className="col-span-1">Last Price</p>
        <p className="col-span-1">Actions</p>
      </div>
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
      <StoreItem />
    </div>
  );
}

export default Inventory;
