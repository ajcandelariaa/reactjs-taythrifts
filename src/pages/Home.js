import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HomeNavbar from "../components/navbars/HomeNavbar";

function Home() {
  return (
    <div className="">
      <HomeNavbar />
      <div className="home-header">
        <div className="container m-auto grid grid-cols-2 items-center justify-items-center py-32">
          <div className="text-white w-2/3">
            <p className="text-4xl mb-8">The revolution is here.</p>
            <p className="mb-10 text-xl">
              From concept to launch, Alt WAV provides actionable insights
              enabling you to create any Shopping experience with confidence.
            </p>
            <Link
              className="text-white border py-2 px-4 rounded-lg"
              to="/login"
            >
              <i class="fas fa-shopping-cart mr-2"></i>Shop
            </Link>
          </div>
          <div className="h-familyShopping">
            <img src="images/familyShopping.png" alt="familyShopping" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
