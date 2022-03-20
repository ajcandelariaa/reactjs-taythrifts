import React, { useState, useEffect } from "react";
import { updateDoc, onSnapshot } from "firebase/firestore";
import { storage } from "../../services/Firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { toastSuccess, toastError } from "../../helpers/Toaster";

function EditStoreImage({ docRef }) {
  const [oldImage, setOldImage] = useState(null);
  const [image, setImage] = useState(null);
  const [imageLoader, setImageLoader] = useState(false);

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setOldImage(doc.data().imagePath);
      document.getElementById("previewImg").src = doc.data().imageUrl;
    });
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

  const updateImage = async (url, path) => {
    await updateDoc(docRef, { imageUrl: url, imagePath: path }).then(() => {
      toastSuccess("Profile Image Updated!");
      setImageLoader(false);
      setImage(null);
      document.getElementById("image").value = null;
    });
  };

  const handleImageForm = (e) => {
    e.preventDefault();
    setImageLoader(true);
    const path = `stores/${Date.now()}${image.name}`;
    const storageRef = ref(storage, path);
    const uploadImage = uploadBytesResumable(storageRef, image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        toastError("Error Updating Image");
        setImageLoader(false);
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const oldImageRef = ref(storage, oldImage);
          deleteObject(oldImageRef);
          updateImage(url, path);
        });
      }
    );
  };

  return (
    <div className="w-1/2 m-auto py-16 bg-regFormBg my-10">
      <h1 className="text-center text-xl mb-5">Edit Store Image</h1>
      <form onSubmit={handleImageForm}>
        <div className="grid items-center justify-items-center w-full">
          <div>
            <div className="grid grid-cols-regForm gap-6 mt-5 w-full">
              <label className="text-right">Upload Image</label>
              <input
                type="file"
                className="w-full border pt-1 border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                accept="image/*"
                onChange={chooseImage}
                id="image"
                required
              />
            </div>
            <div className="mt-5 w-52 h-52 mx-auto">
              <img
                src="../images/sampleResto.jpg"
                id="previewImg"
                alt="sampleResto"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center mt-10">
              {imageLoader === true ? (
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
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditStoreImage;
