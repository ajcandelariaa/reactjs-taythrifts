import React from "react";
import TransactionItem from "./TransactionItem";
import { motion } from "framer-motion";

function TransactionItemModal({
  setTransactionModal,
  transaction,
  orderNumber,
}) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        }}
        className="w-full min-h-screen max-h-full fixed left-0 top-0 bot-0 z-10 pt-24 "
        style={{ background: `rgba(0, 0, 0, 0.8)` }}
        onClick={() => setTransactionModal(false)}
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.2,
          },
        }}
        exit={{
          scale: 0,
        }}
        className="fixed left-0 top-0 right-0 mt-10 bg-gray-100 w-11/12 border z-20 border-gray-300 rounded-md mx-auto p-5 max-h-3/5 overflow-y-scroll"
        style={{ maxHeight: `${window.innerHeight - 100}px` }}
      >
        <p className="text-2xl">Order Number: #{orderNumber}</p>
        <div className="grid grid-cols-12 gap-4 w-full justify-items-center items-center font-bold bg-inventoryHeaderBg text-white py-2 mt-5">
          <p className="col-span-1">Image</p>
          <p className="col-span-3">Product Name</p>
          <p className="col-span-2">Description</p>
          <p className="col-span-1">Supplier</p>
          <p className="col-span-2">Location</p>
          <p className="col-span-1">Quantity</p>
          <p className="col-span-1">Product Price</p>
          <p className="col-span-1">Total Price</p>
        </div>
        {transaction.items.map((item) => (
          <TransactionItem item={item} key={item.cartId} />
        ))}
      </motion.div>
    </div>
  );
}

export default TransactionItemModal;
