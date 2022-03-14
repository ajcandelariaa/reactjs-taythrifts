import React, {useState} from "react";
import RegistrationNavbar from "../../components/Navbars/RegistrationNavbar";
import { db } from "../../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

function StoreRegistration() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const storesCollectionRef = collection(db, "stores");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(storesCollectionRef, {
      name: name,
      emailAddress: emailAddress,
      username: username,
      password: password,
      contactNumber: contactNumber,
      address: address,
      imageUrl: imageUrl,
      verified: false,
    })
    .then(() => {
      alert("Form Submitted");
    })
    .catch((err) => {
      console.log(err.message);
    })

    setName("");
    setEmailAddress("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setContactNumber("");
    setAddress("");
    setImageUrl("");
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
                <input type="text" className="w-full" onChange={(e) => setName(e.target.value)} required/>
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Email Address</label>
                <input type="text" className="w-full" onChange={(e) => setEmailAddress(e.target.value)} required/>
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Username</label>
                <input type="text" className="w-full" onChange={(e) => setUsername(e.target.value)} required/>
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Password</label>
                <input type="text" className="w-full" onChange={(e) => setPassword(e.target.value)} required/>
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Confirm Password</label>
                <input type="text" className="w-full" onChange={(e) => setConfirmPassword(e.target.value)} required/>
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Contact Number</label>
                <input type="text" className="w-full" onChange={(e) => setContactNumber(e.target.value)} required/>
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Store Address</label>
                <input type="text" className="w-full" onChange={(e) => setAddress(e.target.value)} required/>
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Profile Image</label>
                <input type="file" className="w-full" />
              </div>

              <div className="flex justify-center mt-8">
                <img src="../images/sampleResto.jpg" alt="sampleResto" className="w-52 h-52 object-cover rounded-full" />
              </div>

              <div className="text-center mt-10">
                <button className="bg-blue-500 py-3 px-6 text-white">
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StoreRegistration;
