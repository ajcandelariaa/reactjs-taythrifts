import React from "react";

function Highlight() {
  return (
    <div className="highlight bg-gray-100">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-4xl mb-5">Highlight</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <img src="../images/customer.jpg" alt="customer" className="w-full h-96 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
