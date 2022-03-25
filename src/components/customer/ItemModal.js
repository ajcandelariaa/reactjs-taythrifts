import React from "react";

function ItemModal({ item, setItemModal, lastPriceExist, loader, handleAddToCart }) {
  return (
    <div>
      <div
        className="w-full min-h-screen max-h-full fixed left-0 top-0 bot-0 z-10 pt-24 "
        style={{ background: `rgba(0, 0, 0, 0.8)` }}
        onClick={() => setItemModal(false)}
      ></div>
      <div
        className="fixed left-0 top-0 right-0 mt-10 bg-gray-100 w-1/2 border z-20 border-gray-300 rounded-md mx-auto p-5 max-h-3/5 overflow-y-scroll"
        style={{ maxHeight: `${window.innerHeight - 100}px` }}
      >
        <div className="flex gap-5">
          <div className="flex-1 pr-5 border border-t-0 border-b-0 border-l-0 border-r-gray-300 ">
            <img
              src={item.item_imageUrl}
              alt="sampleItem"
              className="w-full rounded-tr-xl rounded-tl-xl"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm">{item.item_category}</p>
            <h1 className="text-4xl mb-2 mt-2">{item.item_name}</h1>
            <div className="flex mt-2 gap-2 items-center">
              <p className="text-yellow-600 font-bold">
                ₱ {parseFloat(item.item_price).toFixed(2)}
              </p>
              {lastPriceExist && (
                <p className="text-gray-500 text-sm">
                  (₱ {parseFloat(item.item_last_price).toFixed(2)})
                </p>
              )}
            </div>

            <p className="my-5 opacity-80">{item.item_desc}</p>
            <p>No. of Purchases: {item.item_purchase}</p>
            <div className="flex gap-1 mt-5">
              <img
                src={item.store_imageUrl}
                alt="sampleItem"
                className="w-6 h-6 object-cover rounded-full"
              />
              <p>{item.store_name}</p>
            </div>
            <div className="mt-5">
              {loader === true ? (
                <>
                  <button
                    className={`text-black bg-gray-300 rounded-3xl w-52 py-2 cursor-wait`}
                    disabled
                  >
                    <i class="fa-solid fa-cart-shopping mr-2"></i> Adding...
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-sideBarMarketplaceButtonsActive rounded-xl w-52 py-2 text-white hover:bg-sideBarMarketplaceButtons"
                    onClick={() => handleAddToCart(item.item_price)}><i class="fa-solid fa-cart-shopping mr-2"></i> Add to Cart </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
