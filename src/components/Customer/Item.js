import React, { useEffect, useState } from "react";

function Item(props) {
  const [isHover, setIsHover] = useState(false);
  const [lastPriceExist, setLastPriceExist] = useState(false);

  const mouseIn = () => {
    setIsHover(true);
  };
  const mouseOut = () => {
    setIsHover(false);
  };

  const nameYourPrice = () => {};

  useEffect(() => {
    if (props.item.item_last_price !== "") {
      setLastPriceExist(true);
    }
  }, [])

  return (
    <div className="shadow-2xl bg-white rounded-xl">
      <div
        className="bg-itemBgHover rounded-tr-xl rounded-tl-xl relative"
        onMouseEnter={mouseIn}
        onMouseLeave={mouseOut}
      >
        <img
          src={props.item.item_imageUrl}
          alt="sampleItem"
          className={
            isHover
              ? "h-80 object-cover w-full rounded-tr-xl rounded-tl-xl opacity-50"
              : "h-80 object-cover w-full rounded-tr-xl rounded-tl-xl"
          }
        />

        {isHover && (
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 grid grid-rows-2 gap-2">
            <button className={`text-black bg-white rounded-3xl w-40 py-2 hover:text-white hover:bg-itemBgHover row-span-2 ${lastPriceExist && 'row-span-1'}`}>
              Add to Cart
            </button>
            {lastPriceExist && (
              <button
                className="text-black bg-white rounded-3xl w-40 py-2 hover:text-white hover:bg-itemBgHover"
                onClick={nameYourPrice}
              >
                Name your price
              </button>
            )}
          </div>
        )}
      </div>
      <div className="flex justify-between py-3 px-5 w-full">
        <div>
          <div className="flex gap-1 items-center">
            <img
              src={props.item.store_imageUrl}
              alt="sampleResto"
              className="w-6 h-6 object-cover rounded-full"
            />
            <p>{props.item.store_name}</p>
          </div>
          <p className="mt-1 opacity-50">{props.item.item_name}</p>
        </div>
        <div>
          <p>₱ {props.item.item_price}</p>
          {lastPriceExist && (
            <p className="opacity-50 mt-1">₱ {props.item.item_last_price}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;
