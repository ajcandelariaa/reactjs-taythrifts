import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { collection,  getDocs } from "firebase/firestore";
import { db } from "../firebase";

import { toastValidAccount, toastInvalidAccount } from "../toaster";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [account, setAccount] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const customersCollectionRef = collection(db, "customers");
  const storesCollectionRef = collection(db, "stores");
  const navigate = useNavigate();

  const validation = () => {
    return true;
  };

  const clickInput = () => {
    setError(false);
    console.log('clicked');
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    if (validation()) {
      const getCustData = async () => {
        const custData = await getDocs(customersCollectionRef);
        const cust = custData.docs.filter(
          (doc) => doc.data().username === username && doc.data().password === password
        ).map((doc2) => ({id: doc2.id}));
        if (cust.length === 0) {
          toastInvalidAccount();
          setLoader(false);
          setError(true);
        } else {
          toastValidAccount();
          setLoader(false);
          navigate("/marketplace", { replace: true });
          window.sessionStorage.setItem("accountType", "customer");
          window.sessionStorage.setItem("account_id", cust[0].id);
        }
      };

      const getStoreData = async () => {
        const storeData = await getDocs(storesCollectionRef);
        const store = storeData.docs.filter(
          (doc) => doc.data().username === username && doc.data().password === password
        ).map((doc2) => ({id: doc2.id}));
        if (store.length === 0) {
          toastInvalidAccount();
          setLoader(false);
          setError(true);
        } else {
          toastValidAccount();
          setLoader(false);
          navigate("/dashboard", { replace: true });
          window.sessionStorage.setItem("accountType", "store");
          window.sessionStorage.setItem("account_id", store[0].id);
        }
      };



      if (accountType === "customer") {
        getCustData();
      } else {
        getStoreData();
      }
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
                onClick={clickInput}
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
                onClick={clickInput}
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
                  onClick={clickInput}
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
                  onClick={clickInput}
                  onChange={() => setAccountType("store")}
                />
                Store
              </div>
            </div>
            {error === false ? (
              <></>
            ) : (
              <>
                <div className="bg-red-300 mt-5 text-center py-2 rounded-md text-gray-800">
                  <p>Invalid Username and Password</p>
                </div>
              </>
            )}

            <div className="text-center mt-5">
              {loader === true ? (
                <>
                  <button
                    className="text-black bg-gray-300 w-11/12 rounded-md py-2 cursor-wait"
                    disabled
                  >
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
