import React, { useEffect, useState } from "react";
import Item from "./Item";

function Category(props) {
  const [newItems, setNewItems] = useState([]);

  useEffect(() => {
    setNewItems(props.items.filter((item) => props.category === item.item_category))
  }, [props.category]);

  return (
    <div className="container mx-auto px-5">
      <div className="flex justify-center mt-10">
        <p className="text-2xl uppercase border border-sideBarMarketplaceButtonsActive w-fit py-2 px-10">
          {props.category}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-7 my-10">
        {props.category === "All Products" ? (
          <>
            {props.items.length === 0
              ? "No Items for " + props.category + " Yet"
              : props.items.map((item) => (
                  <Item item={item} key={item.item_id} />
                ))}
          </>
        ) : (
          <>
            {newItems.length === 0
              ? "No Items for " + props.category + " Yet"
              : newItems.map((item) => <Item item={item} key={item.item_id} />)}
          </>
        )}
      </div>
    </div>
  );
}

export default Category;
