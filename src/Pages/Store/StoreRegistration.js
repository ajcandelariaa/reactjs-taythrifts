import React, {useState} from "react";
import RegistrationNavbar from "../../components/Navbars/RegistrationNavbar";
import { db, storage } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toastSuccess, toastError } from '../../toaster';

function StoreRegistration() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [loader, setLoader] = useState(false);

  const storesCollectionRef = collection(db, "stores");

  const chooseImage = (e) => {
    var reader = new FileReader();
    var file = e.target.files[0];
    if (file) {
      setImage(file);

      var reader = new FileReader();
      reader.onload = function(){
          document.getElementById("previewImg").src=reader.result;
      }
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);


    const storageRef = ref(storage, `stores/${Date.now()}${image.name}`);
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
          addDoc(storesCollectionRef, {
            name: name,
            emailAddress: emailAddress,
            username: username,
            password: password,
            contactNumber: contactNumber,
            address: address,
            imageUrl: url,
            verified: false,
          }).then(() => {
            toastSuccess();
            setLoader(false);
            setName("");
            setEmailAddress("");
            setUsername("");
            setPassword("");
            setConfirmPassword("");
            setContactNumber("");
            setAddress("");
            document.getElementById("previewImg").src='../images/defaultImage.png';
            setImage(null);
          }).catch((err) => {
            toastError();
            setLoader(false);
            console.log(err.message);
          })
        })
      }
    );
  };

  return (
    <div>
      <RegistrationNavbar link="../images/taythrifts_logo.png" />
      <div className="w-1/2 m-auto py-16 bg-regFormBg my-10">
        <h1 className="text-center text-xl mb-5">Store Register Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid items-center justify-items-center w-full">
            <div>
              <div className="grid grid-cols-regForm gap-6 mt-5 w-full">
                <label className="text-right">Store Name</label>
                <input type="text" className="w-full" value={name} onChange={(e) => setName(e.target.value)} required/>
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Email Address</label>
                <input type="text" className="w-full" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required/>
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Username</label>
                <input type="text" className="w-full" value={username} onChange={(e) => setUsername(e.target.value)} required/>
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Password</label>
                <input type="text" className="w-full" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Confirm Password</label>
                <input type="text" className="w-full" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Contact Number</label>
                <input type="text" className="w-full" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required/>
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Store Address</label>
                <input type="text" className="w-full" value={address} onChange={(e) => setAddress(e.target.value)} required/>
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Profile Image</label>
                <input type="file" className="w-full" accept="image/*" onChange={chooseImage} />
              </div>

              <div className="flex justify-center mt-8">
                <img src='../images/defaultImage.png' id="previewImg" alt="defaultImage" className="w-52 h-52 object-cover rounded-full" />
              </div>

              <div className="text-center mt-10">
                {loader === true ? 
                  <>
                    <button className="bg-gray-300 py-3 px-6 text-black cursor-wait" disabled>Submitting</button> 
                  </> : 
                  <>
                    <button className="bg-blue-500 py-3 px-6 text-white">Register</button>
                  </>
                }
                
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StoreRegistration;
