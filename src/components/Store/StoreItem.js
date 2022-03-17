import React, { useEffect, useState } from "react";
import ConfirmDialog from "../../helpers/ConfirmDialog";
import { toastSuccess } from "../../helpers/Toaster";
import { deleteDoc, collection, doc } from "firebase/firestore";
import { db, storage } from "../../services/Firebase";

function StoreItem(props) {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [accept, setAccepted] = useState(false);

  const itemDoc = doc(db, "items", props.item.item_id);
  

  const editClicked = () => {
    // setModal(true);
    // setMessage("Are you sure you want to edit this item?");
  };

  const deleteClicked = () => {
    setModal(true);
    setMessage("Are you sure you want to delete this item?");
  };

  useEffect(() => {
    if (accept) {
      deleteDoc(itemDoc).then(() => {
        toastSuccess();
        setAccepted(false);
        setMessage("");
      })
    }
  }, [accept]);

  return (
    <div>
      <div className="border border-gray-200"></div>
      <div className="grid grid-cols-12 gap-4 my-1 w-full justify-items-center items-center">
        <img
          className="col-span-1 w-14 h-14 object-cover"
          src={props.item.item_imageUrl}
          alt="sampleItem"
        />
        <p className="col-span-3">{props.item.item_name}</p>
        <p className="col-span-2">{props.item.item_desc}</p>
        <p className="col-span-2">{props.item.item_category}</p>
        <p className="col-span-1">₱ {props.item.item_price}</p>
        <p className="col-span-1">
          {props.item.item_last_price === null
            ? "N/A"
            : `₱ ${props.item.item_last_price}`}
        </p>
        <p className="col-span-1">
          {new Date(props.item.created_at.seconds * 1000).toLocaleDateString(
            "en-US"
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

      {modal && (
        <ConfirmDialog
          setModal={setModal}
          setAccepted={setAccepted}
          message={message}
        />
      )}
    </div>
  );
}

export default StoreItem;
