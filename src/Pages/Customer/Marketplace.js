import React, { useState } from "react";
import CustomerNavbar from "../../components/Navbars/CustomerNavbar";
import Category from "../../components/Marketplace/Category";

function Marketplace() {
  const [category, setCategory] = useState("Tops");

  const setTops = () => {
    setCategory("Tops");
  };
  const setPants = () => {
    setCategory("Pants");
  };
  const setShorts = () => {
    setCategory("Shorts");
  };
  const setDresses = () => {
    setCategory("Dresses");
  };
  const setOthers = () => {
    setCategory("Others");
  };
  const setLatestProducts = () => {
    setCategory("Latest Products");
  }
  const setBestSeller = () => {
    setCategory("Best Seller");
  }

  return (
    <div>
      <CustomerNavbar link="../images/taythrifts_logo.png" />
      <div className="flex gap-2">
        <div className="bg-sideBarMarketplace h-screen">
          <div className="text-xl text-center text-white mt-5">Categories</div>
          <div className="grid grid-rows-5 gap-3 mt-5">
            <div
              className="flex gap-3 justify-items-center items-center bg-gray-600 text-white py-2 pl-3 pr-14 cursor-pointer"
              onClick={setLatestProducts}
            >
              <div className="bg-red-400 w-5 h-5 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
                5
              </div>
              <p className="text-white">Latest Products</p>
            </div>

            <div
              className="flex gap-3 justify-items-center items-center bg-gray-600 text-white py-2 pl-3 pr-14 cursor-pointer"
              onClick={setBestSeller}
            >
              <div className="bg-red-400 w-5 h-5 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
                5
              </div>
              <p className="text-white">Best Seller</p>
            </div>

            <div
              className="flex gap-3 justify-items-center items-center bg-gray-600 text-white py-2 pl-3 pr-14 cursor-pointer"
              onClick={setTops}
            >
              <div className="bg-red-400 w-5 h-5 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
                5
              </div>
              <p className="text-white">Tops</p>
            </div>

            <div
              className="flex gap-3 justify-items-center items-center bg-gray-600 text-white py-2 pl-3 pr-14 cursor-pointer"
              onClick={setPants}
            >
              <div className="bg-red-400 w-5 h-5 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
                5
              </div>
              <p className="text-white">Pants</p>
            </div>

            <div
              className="flex gap-3 justify-items-center items-center bg-gray-600 text-white py-2 pl-3 pr-14 cursor-pointer"
              onClick={setShorts}
            >
              <div className="bg-red-400 w-5 h-5 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
                5
              </div>
              <p className="text-white">Shorts</p>
            </div>

            <div
              className="flex gap-3 justify-items-center items-center bg-gray-600 text-white py-2 pl-3 pr-14 cursor-pointer"
              onClick={setDresses}
            >
              <div className="bg-red-400 w-5 h-5 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
                5
              </div>
              <p className="text-white">Dresses</p>
            </div>

            <div
              className="flex gap-3 justify-items-center items-center bg-gray-600 text-white py-2 pl-3 pr-14 cursor-pointer"
              onClick={setOthers}
            >
              <div className="bg-red-400 w-5 h-5 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
                5
              </div>
              <p className="text-white">Others</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <Category category={category} />
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
