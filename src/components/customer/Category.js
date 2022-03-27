import React from "react";
import Item from "./Item";
import { motion, AnimatePresence } from "framer-motion";

function Category({ items, category }) {
  return (
    <div className="container mx-auto px-5">
      <div className="flex justify-center mt-10">
        <p className="text-2xl uppercase border border-sideBarMarketplaceButtonsActive w-fit py-2 px-10">
          {category}
        </p>
      </div>

      <motion.div layout className="grid grid-cols-4 gap-7 my-10">
        <AnimatePresence>
          {items.length === 0
            ? "No Items for " + category + " Yet"
            : items.map((item) => <Item item={item} key={item.item_id} />)}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Category;
