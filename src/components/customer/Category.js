import React, { useEffect, useState } from "react";
import Item from "./Item";

function Category({items, category, latest, bestSeller}) {
  const [newItems, setNewItems] = useState([]);

  useEffect(() => {
    if(category === "Best Seller"){
      setNewItems(bestSeller);
    } else if (category === "Latest Products") {
      setNewItems(latest);
    } else {
      setNewItems(items.filter((item) => category === item.item_category))
    }
  }, [category]);

  return (
    <div className="container mx-auto px-5">
      <div className="flex justify-center mt-10">
        <p className="text-2xl uppercase border border-sideBarMarketplaceButtonsActive w-fit py-2 px-10">
          {category}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-7 my-10">
        {category === "All Products" ? (
          <>
            {items.length === 0
              ? "No Items for " + category + " Yet"
              : items.map((item) => (
                  <Item item={item} key={item.item_id} />
                ))}
          </>
        ) : (
          <>
            {newItems.length === 0
              ? "No Items for " + category + " Yet"
              : newItems.map((item) => <Item item={item} key={item.item_id} />)}
          </>
        )}
      </div>
    </div>
  );
}

export default Category;
