import React from "react";

function MarketplaceSidebar({
  category, 
  setCategory,
  countAll,
  countLatest,
  countBestSeller,
  countTops,
  countPants,
  countShorts,
  countDresses,
  countOthers
}) {

  const setTops = () => { setCategory("Tops"); };
  const setPants = () => { setCategory("Pants"); };
  const setShorts = () => { setCategory("Shorts"); };
  const setDresses = () => { setCategory("Dresses"); };
  const setOthers = () => { setCategory("Others"); };
  const setLatestProducts = () => { setCategory("Latest Products"); };
  const setBestSeller = () => { setCategory("Best Seller"); };
  const setAllProducts = () => { setCategory("All Products"); };

  return (
    <div className="bg-sideBarMarketplace min-h-screen max-h-full">
      <div className="text-xl text-center text-gray-300 mt-5">Categories</div>
      <div className="grid grid-rows-5 gap-3 mt-5">
        <div
          className={
            "flex gap-3 justify-items-center items-center text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (category === "All Products"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover bg-sideBarMarketplaceButtons")
          }
          onClick={setAllProducts}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            {countAll}
          </div>
          <p className="text-gray-300">All Products</p>
        </div>

        <div
          className={
            "flex gap-3 justify-items-center items-center text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (category === "Latest Products"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover bg-sideBarMarketplaceButtons")
          }
          onClick={setLatestProducts}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            {countLatest}
          </div>
          <p className="text-gray-300">Latest Products</p>
        </div>

        <div
          className={
            "flex gap-3 justify-items-center items-center text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (category === "Best Seller"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover bg-sideBarMarketplaceButtons")
          }
          onClick={setBestSeller}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            {countBestSeller}
          </div>
          <p className="">Best Seller</p>
        </div>

        <div
          className={
            "flex gap-3 justify-items-center items-center text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (category === "Tops"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover bg-sideBarMarketplaceButtons")
          }
          onClick={setTops}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            {countTops}
          </div>
          <p className="">Tops</p>
        </div>

        <div
          className={
            "flex gap-3 justify-items-center items-center text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (category === "Pants"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover bg-sideBarMarketplaceButtons")
          }
          onClick={setPants}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            {countPants}
          </div>
          <p className="">Pants</p>
        </div>

        <div
          className={
            "flex gap-3 justify-items-center items-center text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (category === "Shorts"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover bg-sideBarMarketplaceButtons")
          }
          onClick={setShorts}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            {countShorts}
          </div>
          <p className="">Shorts</p>
        </div>

        <div
          className={
            "flex gap-3 justify-items-center items-center text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (category === "Dresses"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover bg-sideBarMarketplaceButtons")
          }
          onClick={setDresses}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            {countDresses}
          </div>
          <p className="">Dresses</p>
        </div>

        <div
          className={
            "flex gap-3 justify-items-center items-center text-gray-300 py-2 pl-3 pr-20 cursor-pointer " +
            (category === "Others"
              ? "bg-sideBarMarketplaceButtonsActive"
              : "hover:bg-sideBarMarketplaceButtonsHover bg-sideBarMarketplaceButtons")
          }
          onClick={setOthers}
        >
          <div className="bg-circleCartBg w-7 h-7 rounded-full text-xs grid grid-cols-1 justify-items-center items-center">
            {countOthers}
          </div>
          <p className="">Others</p>
        </div>
      </div>
    </div>
  );
}

export default MarketplaceSidebar;
