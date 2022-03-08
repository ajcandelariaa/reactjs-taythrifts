import React, { useEffect, useState } from "react";
import Item from "../Item";

function Category(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(props.category);
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
          { id: 6, name: "Jane Doe" },
          { id: 7, name: "Jane Doe" },
          { id: 8, name: "Jane Doe" },
        ]);
        break;
    }
  }, [props.category]);

  console.log(items);

  return (
    <div>
      <h1 className="text-2xl text-center mt-5 underline uppercase">
        {props.category}
      </h1>

      <div className="grid grid-cols-4 gap-5 my-10">
        {items == null ? 'No Items for Dresses Yet' : items.map((item) => (
          <Item key={item.id} actualPrice="200.00" lastPrice="100.00"/>
        ))}
      </div>
    </div>
  );
}

export default Category;
