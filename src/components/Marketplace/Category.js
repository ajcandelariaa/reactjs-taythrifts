import React, { useEffect, useState } from "react";
import Item from "../Item";

function Category(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    switch (props.category) {
      case "Tops":
        setItems([
          { id: 1, name: "John Doe" },
          { id: 2, name: "Victor Wayne" },
          { id: 3, name: "Jane Doe" },
        ]);
        break;
      case "Pants":
        setItems([
          { id: 1, name: "John Doe" },
        ]);
        break;
      case "Shorts":
        setItems([
          { id: 1, name: "John Doe" },
          { id: 2, name: "Victor Wayne" },
        ]);
        break;
      case "Dresses":
        setItems(null);
        break;
      case "Others":
        setItems([
          { id: 1, name: "John Doe" },
          { id: 2, name: "Victor Wayne" },
          { id: 3, name: "Jane Doe" },
          { id: 4, name: "Jane Doe" },
          { id: 5, name: "Jane Doe" },
        ]);
        break;
      case "Latest Products":
        setItems(null);
        break;
      case "Best Seller":
        setItems(null);
        break;
      default:
        setItems([
          { id: 1, name: "John Doe" },
          { id: 2, name: "Victor Wayne" },
          { id: 3, name: "Jane Doe" },
          { id: 4, name: "Jane Doe" },
          { id: 5, name: "Jane Doe" },
          { id: 6, name: "Jane Doe" },
          { id: 7, name: "Jane Doe" },
          { id: 8, name: "Jane Doe" },
          { id: 9, name: "Jane Doe" },
          { id: 10, name: "Jane Doe" },
          { id: 11, name: "Jane Doe" },
          { id: 12, name: "Jane Doe" },
          { id: 13, name: "Jane Doe" },
        ]);
        break;
    }
  }, [props.category]);

  console.log(items);

  return (
    <div>
      <div className="flex justify-center mt-10">
        <p className="text-2xl uppercase border border-sideBarMarketplaceButtonsActive w-fit py-2 px-10">
          {props.category}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-7 my-10">
        {items == null ? 'No Items for ' + props.category + ' Yet' : items.map((item) => (
          <Item key={item.id} actualPrice="200.00" lastPrice="100.00"/>
        ))}
      </div>
    </div>
  );
}

export default Category;
