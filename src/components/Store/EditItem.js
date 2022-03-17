import React, { useState, useEffect } from "react";
import { db, storage } from "../../services/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toastSuccess, toastError } from "../../helpers/Toaster";

function EditItem(props) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [actualPrice, setActualPrice] = useState(0);
  const [lastPrice, setLastPrice] = useState(null);
  const [category, setCategory] = useState("Tops");
  const [image, setImage] = useState("");
  const [loader, setLoader] = useState(false);
  const accountId = window.sessionStorage.getItem("account_id");
  const itemId = props.item_id;

  useEffect(() => {
    const itemsCollection = collection(db, "items");
    
  }, [])

  const chooseImage = (e) => {
    var reader = new FileReader();
    var file = e.target.files[0];
    if (file) {
      setImage(file);

      reader.onload = function () {
        document.getElementById("previewImg").src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return;
  <div>
    <div className="w-full mt-5 mb-10 mx-auto py-12 bg-regFormBg rounded-xl shadow-sm">
      <div className="flex justify-center mb-5 ">
        <p className="text-xl uppercase border border-sideBarMarketplaceButtonsActive w-fit py-2 px-10">
          Add Item
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-1/2 mt-8 mx-auto pr-10 pl-5">
          <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
            <label className="text-right">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
            <label className="text-right">Category</label>
            <select
              className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Tops">Tops</option>
              <option value="Pants">Pants</option>
              <option value="Shorts">Shorts</option>
              <option value="Dresses">Dresses</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
            <label className="text-right">Actual Price</label>
            <input
              type="number"
              min="0"
              className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
              value={actualPrice}
              onChange={(e) => setActualPrice(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
            <label className="text-right">Last Price</label>
            <input
              type="number"
              min="0"
              className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-regForm gap-6 items-center mt-5">
            <label className="text-right">Description</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-regForm gap-6 items-center mt-5">
            <label className="text-right">Image</label>
            <input
              type="file"
              className="w-full border pt-1 border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
              accept="image/*"
              onChange={chooseImage}
              required
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <img
            src="../images/defaultImage.png"
            id="previewImg"
            alt="defaultImage"
            className="w-52 h-52 object-cover shadow-md"
          />
        </div>

        <div className="text-center mt-10">
          {loader === true ? (
            <>
              <button
                className="bg-gray-300 py-2 px-24 rounded-md text-black cursor-wait"
                disabled
              >
                Adding...
              </button>
            </>
          ) : (
            <>
              <button className="bg-sideBarMarketplaceButtonsActive hover:bg-sideBarMarketplaceButtons py-2 px-24 rounded-md text-white">
                Add
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  </div>;
}

export default EditItem;
