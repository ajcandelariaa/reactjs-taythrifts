import React, { useEffect } from "react";

function MarketplaceSidebar({
  items,
  bestSeller,
  latest,
  category, 
  setCategory,
  setFilters,
  countAll,
  countLatest,
  countBestSeller,
  countTops,
  countPants,
  countShorts,
  countDresses,
  countOthers,
}) {

  useEffect(() => {
    if(category === "Best Seller"){
      setFilters(bestSeller);
    } else if (category === "Latest Products") {
      setFilters(latest);
    } else if(category === "All Products"){
      setFilters(items);
    } else {
      setFilters(items.filter((item) => category === item.item_category))
    }
  },[category, items, setFilters])

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
          onClick={() => setCategory("All Products")}
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
          onClick={() => setCategory("Latest Products")}
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
          onClick={() => setCategory("Best Seller")}
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
          onClick={() => setCategory("Tops")}
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
          onClick={() => setCategory("Pants")}
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
          onClick={() => setCategory("Shorts")}
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
          onClick={() => setCategory("Dresses")}
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
          onClick={() => setCategory("Others")}
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
