import React from "react";
import { Link } from "react-router-dom";

function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();
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
              <lable className="text-gray-500">Username</lable>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm mt-2 mb-5 text-gray-700"
              />
            </div>
            <div>
              <lable className="text-gray-500">Password</lable>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm mt-2 mb-5 text-gray-700"
              />
            </div>
            <div className="grid grid-cols-2 justify-items-center">
              <div>
                <input type="radio" className="cursor-pointer" name="accountType" /> Customer
              </div>
              <div>
                <input type="radio" className="cursor-pointer" name="accountType" /> Store
              </div>
            </div>
            <div className="text-center mt-5">
              <button className="text-white bg-loginForm w-11/12 rounded-md py-2 hover:bg-btnLoginHover">
                Log In
              </button>
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
