import React, { useState, useEffect } from "react";
import { db, storage } from "../../services/Firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toastSuccess, toastError } from "../../helpers/Toaster";

function EditItem({ showDefault, itemId }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [actualPrice, setActualPrice] = useState(0);
  const [lastPrice, setLastPrice] = useState(null);
  const [category, setCategory] = useState("Tops");
  const [image, setImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const accountId = window.sessionStorage.getItem("account_id");
  const docRef = doc(db, "items", itemId);

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setName(doc.data().item_name);
      setDesc(doc.data().item_desc);
      setActualPrice(doc.data().item_price);
      setLastPrice(doc.data().item_last_price);
      setCategory(doc.data().item_category);
      document.getElementById("previewImg").src=doc.data().item_imageUrl;
    })
  }, []);

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
    return true;
  };

  const updateItem = async () => {
    await updateDoc(docRef, {
      item_name: name,
      item_desc: desc,
      item_price: actualPrice,
      item_last_price: lastPrice,
      item_category: category,
    }).then(() => {
      toastSuccess();
      showDefault();
      setLoader(false);
    })
  }

  const updateItemWithImage = async (url) => {
    await updateDoc(docRef, {
      item_name: name,
      item_desc: desc,
      item_price: actualPrice,
      item_last_price: lastPrice,
      item_category: category,
      item_imageUrl: url,
    }).then(() => {
      toastSuccess();
      showDefault();
      setLoader(false);
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    
    if(validation()){
      console.log(image);
      if(image === null){
        updateItem();
      } else {
        const storageRef = ref(storage, `items/${Date.now()}${image.name}`);
        const uploadImage = uploadBytesResumable(storageRef, image);
        uploadImage.on("state_changed", (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log(progress);
        }, (error) => {
          toastError();
          setLoader(false);
          console.log(error.message);
        }, () => {
          getDownloadURL(uploadImage.snapshot.ref)
            .then((url) => {
              updateItemWithImage(url);
            }).catch((err) => {
              toastError();
              setLoader(false);
              console.log(err.message);
            })
          }
        );
      }
    }
  };

  return (
    <div>
      <div className="w-full mt-5 mb-10 mx-auto py-12 bg-regFormBg rounded-xl shadow-sm">
        <div className="flex justify-center mb-5 ">
          <p className="text-xl uppercase border border-sideBarMarketplaceButtonsActive w-fit py-2 px-10">
            Edit Item
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
                  Updating...
                </button>
              </>
            ) : (
              <>
                <button className="bg-sideBarMarketplaceButtonsActive hover:bg-sideBarMarketplaceButtons py-2 px-24 rounded-md text-white">
                  Update
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditItem;
