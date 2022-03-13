import React, { useState } from "react";

function MarketplaceSidebar(props) {
  const setTops = () => {
    props.setCategory("Tops");
  };
  const setPants = () => {
    props.setCategory("Pants");
  };
  const setShorts = () => {
    props.setCategory("Shorts");
  };
  const setDresses = () => {
    props.setCategory("Dresses");
  };
  const setOthers = () => {
    props.setCategory("Others");
  };
  const setLatestProducts = () => {
    props.setCategory("Latest Products");
  };
  const setBestSeller = () => {
    props.setCategory("Best Seller");
  };
  const setAllProducts = () => {
    props.setCategory("All Products");
  };
  return (
    <div className="bg-sideBarMarketplace min-h-screen max-h-full">
      <div className="text-xl text-center text-gray-300 mt-5">Categories</div>
      <div className="grid grid-rows-5 gap-3 mt-5">
        <div
          className={
            "flex gap-3 justify-items-center items-center bg-sideBarMarketplaceButtons text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (props.category === "All Products"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover ")
          }
          onClick={setAllProducts}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            125
          </div>
          <p className="text-gray-300">All Products</p>
        </div>

        <div
          className={
            "flex gap-3 justify-items-center items-center bg-sideBarMarketplaceButtons text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (props.category === "Latest Products"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover ")
          }
          onClick={setLatestProducts}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            5
          </div>
          <p className="text-gray-300">Latest Products</p>
        </div>

        <div
          className={
            "flex gap-3 justify-items-center items-center bg-sideBarMarketplaceButtons text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (props.category === "Best Seller"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover ")
          }
          onClick={setBestSeller}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            5
          </div>
          <p className="">Best Seller</p>
        </div>

        <div
          className={
            "flex gap-3 justify-items-center items-center bg-sideBarMarketplaceButtons text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (props.category === "Tops"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover ")
          }
          onClick={setTops}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            5
          </div>
          <p className="">Tops</p>
        </div>

        <div
          className={
            "flex gap-3 justify-items-center items-center bg-sideBarMarketplaceButtons text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (props.category === "Pants"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover ")
          }
          onClick={setPants}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            5
          </div>
          <p className="">Pants</p>
        </div>

        <div
          className={
            "flex gap-3 justify-items-center items-center bg-sideBarMarketplaceButtons text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (props.category === "Shorts"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover ")
          }
          onClick={setShorts}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            5
          </div>
          <p className="">Shorts</p>
        </div>

        <div
          className={
            "flex gap-3 justify-items-center items-center bg-sideBarMarketplaceButtons text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (props.category === "Dresses"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover ")
          }
          onClick={setDresses}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            5
          </div>
          <p className="">Dresses</p>
        </div>

        <div
          className={
            "flex gap-3 justify-items-center items-center bg-sideBarMarketplaceButtons text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (props.category === "Others"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover ")
          }
          onClick={setOthers}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            5
          </div>
          <p className="">Others</p>
        </div>
      </div>
    </div>
  );
}

export default MarketplaceSidebar;
