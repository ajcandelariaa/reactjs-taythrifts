import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import { toastValidAccount, toastInvalidAccount } from '../toaster';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [account, setAccount] = useState([]);
  const [loader, setLoader] = useState(false);

  const validation = () => {
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    if(validation()){
      const customersCollectionRef = collection(db, "customers");
      const storesCollectionRef = collection(db, "stores");

      const getCustData = async () => {
        const custData = await getDocs(customersCollectionRef);
        const cust = custData.docs.filter((doc) => doc.data().username === username && doc.data().password === password);
        if(cust.length == 0){
          toastInvalidAccount();
          setLoader(false);
        } else {
          toastValidAccount();
          setLoader(false);
        }
      }

      const getStoreData = async () => {
        const storeData = await getDocs(storesCollectionRef);
        const store = storeData.docs.filter((doc) => doc.data().username === username && doc.data().password === password);
        if(store.length == 0){
          toastInvalidAccount();
          setLoader(false);
        } else {
          toastValidAccount();
          setLoader(false);
        }
      }


      if(accountType == "customer"){
        getCustData();
      } else {
        getStoreData();
      }

      // window.sessionStorage.setItem("accountType", "value");
      // window.sessionStorage.setItem("account_id", "value");
      // window.sessionStorage.getItem("key");
    }

  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="grid grid-cols-1 items-center justify-items-center z-10 shadow-loginFormLeft">
        <div className="w-loginForm">
          <div className="grid grid-cols-loginFormImage items-center mb-5 gap-3">
            <Link to="/">
              <img
                src="images/taythrifts_logo.png"
                alt="taythrifts_logo"
                className="w-full"
              />
            </Link>
            <h3 className="text-loginForm text-4xl">Login Form</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-500">Username</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm mt-2 mb-5 text-gray-700"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-gray-500">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm mt-2 mb-5 text-gray-700"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-2 justify-items-center">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="cursor-pointer"
                  name="accountType"
                  checked={accountType === "customer"}
                  required
                  onChange={() => setAccountType("customer")}
                />
                Customer
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="cursor-pointer"
                  name="accountType"
                  checked={accountType === "store"}
                  onChange={() => setAccountType("store")}
                />
                Store
              </div>
            </div>
            <div className="text-center mt-5">
              {loader === true ? (
                  <>
                    <button className="text-black bg-gray-300 w-11/12 rounded-md py-2 cursor-wait" disabled>
                      Logging In...
                    </button>
                  </>
                ) : (
                  <>
                    <button className="text-white bg-loginForm w-11/12 rounded-md py-2 hover:bg-btnLoginHover">
                      Log In
                    </button>
                  </>
                )}
            </div>
            <div className="mt-9">
              <p>
                Doesn't have an account yet? Click{" "}
                <Link className="text-loginForm underline" to="/signup">
                  here
                </Link>{" "}
                to sign-up
              </p>
              <p>
                Click{" "}
                <Link className="text-loginForm underline" to="/">
                  here
                </Link>{" "}
                to go back.
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="z-0">
        <img
          src="images/login.jpg"
          alt="login-bg"
          className="object-cover h-full"
        />
      </div>
    </div>
  );
}

export default Login;
