import React from "react";

function Trends() {
  return (
    <div className="trends bg-white">
      <div className="container mx-auto py-14">
        <h1 className="text-4xl text-center mb-10">Trends</h1>
        <div className="grid grid-cols-4 text-center gap-10">
          <div>
            <img src="../images/customer.jpg" className="" />
            <p className="mt-5 mb-2">Men's Blazer</p>
            <p className="text-xl text-orange-500">₱700.00</p>
          </div>
          <div>
            <img src="../images/customer.jpg" className="" />
            <p className="mt-5 mb-2">Men's Blazer</p>
            <p className="text-xl text-orange-500">₱700.00</p>
          </div>
          <div>
            <img src="../images/customer.jpg" className="" />
            <p className="mt-5 mb-2">Men's Blazer</p>
            <p className="text-xl text-orange-500">₱700.00</p>
          </div>
          <div>
            <img src="../images/customer.jpg" className="" />
            <p className="mt-5 mb-2">Men's Blazer</p>
            <p className="text-xl text-orange-500">₱700.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trends;
