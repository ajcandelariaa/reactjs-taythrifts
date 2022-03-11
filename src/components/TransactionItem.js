import React from "react";

function TransactionItem() {
  return (
    <div>
      <div className="border border-gray-200"></div>
      <div className="grid grid-cols-12 gap-4 my-1 w-full justify-items-center items-center">
        <img
          className="col-span-1 w-10 h-10 object-cover"
          src="../images/sampleItem.jpg"
          alt="sampleItem"
        />
        <p className="col-span-3">Yellow Turtle Neck Dress</p>
        <p className="col-span-2">Medium</p>
        <p className="col-span-1">Forever 21</p>
        <p className="col-span-2">Taytay</p>
        <p className="col-span-1">2</p>
        <p className="col-span-1">₱ 450.00</p>
        <p className="col-span-1">₱ 900.00</p>
      </div>
    </div>
  );
}

export default TransactionItem;
