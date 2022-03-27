import React, { useState, useEffect } from "react";
import { db, storage } from "../../services/Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toastSuccess, toastError } from '../../helpers/Toaster';

function AddItem() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [actualPrice, setActualPrice] = useState(0);
  const [lastPrice, setLastPrice] = useState("");
  const [category, setCategory] = useState("Tops");
  const [image, setImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const accountId = window.sessionStorage.getItem("account_id");

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

  const validation = () => {
    if(lastPrice !== ""){
      setLastPrice(Number(lastPrice))
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    if(validation()){
      const itemsCollection = collection(db, "items");
      const storageRef = ref(storage, `items/${Date.now()}${image.name}`);
      const uploadImage = uploadBytesResumable(storageRef, image);
      uploadImage.on("state_changed", (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(progress);
      }, (error) => {
        toastError("Error Adding Item1");
        setLoader(false);
        console.log(error.message);
      }, () => {
        getDownloadURL(uploadImage.snapshot.ref)
          .then((url) => {
            addDoc(itemsCollection, {
              item_name: name,
              item_desc: desc,
              item_price: Number(actualPrice),
              item_last_price: lastPrice,
              item_category: category,
              item_purchase: 0,
              item_imageUrl: url,
              created_at: serverTimestamp(),
              store_id: accountId,
            }).then(() => {
              toastSuccess("Item Added!");
              setLoader(false);
              setName("");
              setDesc("");
              setActualPrice("");
              setLastPrice("");
              setCategory("Tops");
              setImage(null);
              document.getElementById("previewImg").src='../images/defaultImage.png';
              document.getElementById("image").value = null;
              setImage(null);
            }).catch((err) => {
              toastError("Error Adding Item2");
              setLoader(false);
              console.log(err.message);
            })
          })
        }
      );
    }
  };

  return (
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
              <label className="text-right">Name <span className="text-red-600">*</span></label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
              <label className="text-right">Category <span className="text-red-600">*</span></label>
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
              <label className="text-right">Actual Price <span className="text-red-600">*</span></label>
              <input
                type="number"
                min="0"
                step=".01"
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
                step=".01"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={lastPrice}
                onChange={(e) => setLastPrice(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5">
              <label className="text-right">Description <span className="text-red-600">*</span></label>
              <textarea
                type="text"
                className="w-full border border-gray-300 rounded-md h-14 px-3 outline-loginForm text-sm text-gray-700"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5">
              <label className="text-right">Image <span className="text-red-600">*</span></label>
              <input
                type="file"
                className="w-full border pt-1 border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                accept="image/*"
                id="image"
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
    </div>
  );
}

export default AddItem;
