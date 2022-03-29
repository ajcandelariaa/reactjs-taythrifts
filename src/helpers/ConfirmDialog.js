import React from "react";
import { motion } from "framer-motion";

function ConfirmDialog({
  setModal,
  message,
  loader,
  deleteItem,
  isImportant = false,
}) {
  const bgClick = () => {
    if (!isImportant) {
      setModal(false);
    }
  };
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
        className={`w-full h-full fixed left-0 top-0 ${
          isImportant ? "z-30 style-modal2" : "z-10 style-modal1"
        } pt-24 `}
        onClick={bgClick}
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
        className={`fixed left-0 top-0 right-0 mt-10 bg-white w-96 border ${
          isImportant ? "z-40" : "z-20"
        } border-gray-300 rounded-md text-center mx-auto p-5`}
      >
        <img src="../images/alert.png" className="w-32 h-32 mx-auto mb-5" />
        <p>{message}</p>
        <div className="mt-5">
          {loader ? (
            <>
              <button
                className="bg-gray-300 py-1 px-10 rounded-md text-black mr-1"
                disabled
              >
                Yes
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-green-500 hover:bg-green-600 py-1 px-10 rounded-md text-white mr-1"
                onClick={() => deleteItem()}
              >
                Yes
              </button>
            </>
          )}
          <button
            className="bg-red-500 hover:bg-red-600 py-1 px-10 rounded-md text-white ml-1"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ConfirmDialog;
