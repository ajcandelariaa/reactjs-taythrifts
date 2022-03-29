import React, { useState } from "react";
import ConfirmDialog from "../../helpers/ConfirmDialog";
import { toastSuccess } from "../../helpers/Toaster";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/Firebase";
import { convertDateToString } from "../../helpers/GetStringDate";
import { AnimatePresence } from "framer-motion";

function StoreItem({ item, showEditItem }) {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const itemDoc = doc(db, "items", item.item_id);

  const editClicked = () => {
    showEditItem(item.item_id);
  };
  const deleteClicked = () => {
    setModal(true);
    setMessage("Are you sure you want to delete this item?");
  };

  const deleteItem = async () => {
    setLoader(true);
    await deleteDoc(itemDoc);
    setLoader(false);
    toastSuccess("Item Deleted!");
    setMessage("");
    setModal(false);
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 my-1 w-full justify-items-center items-center bg-gray-100 py-1">
        <img
          className="col-span-1 w-10 h-10 object-cover"
          src={item.item_imageUrl}
          alt="sampleItem"
        />
        <p className="col-span-3">{item.item_name}</p>
        <p className="col-span-2 overflow-hidden h-12">{item.item_desc}</p>
        <p className="col-span-1">{item.item_category}</p>
        <p className="col-span-1">₱ {parseFloat(item.item_price).toFixed(2)}</p>
        <p className="col-span-1">
          {item.item_last_price === ""
            ? "N/A"
            : `₱ ${parseFloat(item.item_last_price).toFixed(2)}`}
        </p>
        <p className="col-span-2">
          {convertDateToString(
            new Date(item.created_at.seconds * 1000).toLocaleDateString("en-US")
          )}
        </p>
        <p className="col-span-1 flex gap-2">
          <i
            className="fas fa-edit text-yellow-400 cursor-pointer hover:underline"
            onClick={editClicked}
          ></i>
          <i
            className="fas fa-trash text-red-400 cursor-pointer hover:underline"
            onClick={deleteClicked}
          ></i>
        </p>
      </div>
      <AnimatePresence>
        {modal && (
          <ConfirmDialog
            setModal={setModal}
            message={message}
            loader={loader}
            deleteItem={deleteItem}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default StoreItem;
