import React from "react";

function ConfirmDialog({ setModal, message, loader, deleteItem }) {
  return (
    <div>
      <div
        className="w-full h-full fixed left-0 top-0 z-10 pt-24 "
        style={{ background: `rgba(0, 0, 0, 0.8)` }}
        onClick={() => setModal(false)}
      ></div>
      <div className="fixed left-0 top-0 right-0 mt-10 bg-white w-96 border z-20 border-gray-300 rounded-md text-center mx-auto p-5">
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
      </div>
    </div>
  );
}

export default ConfirmDialog;
