import React, {useState} from "react";

function StoreItem() {

  return (
    <div>
      <div className="border border-gray-200"></div>
      <div className="grid grid-cols-12 gap-4 my-1 w-full justify-items-center items-center">
        <img
          className="col-span-1 w-14 h-14 object-cover"
          src="../images/sampleItem.jpg"
        />
        <p className="col-span-3">Yellow Turtle Neck Dress</p>
        <p className="col-span-2">Medium</p>
        <p className="col-span-2">Tops</p>
        <p className="col-span-2">Taytay</p>
        <p className="col-span-1">2</p>
        <p className="col-span-1 flex gap-2">
          <i className="fas fa-edit text-yellow-400 cursor-pointer hover:underline"></i>  
          <i className="fas fa-trash text-red-400 cursor-pointer hover:underline"></i>  
        </p>
      </div>
    </div>
  );
}

export default StoreItem;
