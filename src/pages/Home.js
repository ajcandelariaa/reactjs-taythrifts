import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Features from "../components/home/Features";
import Footer from "../components/home/Footer";
import Highlight from "../components/home/Highlight";
import Team from "../components/home/Team";
import Testimonials from "../components/home/Testimonials";
import Trends from "../components/home/Trends";
import HomeNavbar from "../components/navbars/HomeNavbar";

function Home() {
  const [navbar, setNavbar] = useState(false)
  
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  
  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <div className="">
      <HomeNavbar navbar={navbar}/>
      <div className="home-header home">
        <div className="container m-auto grid grid-cols-2 items-center justify-items-center py-32">
          <div className="text-white w-2/3">
            <p className="text-4xl mb-8">The revolution is here.</p>
            <p className="mb-10 text-xl text-gray-300">
              From concept to launch, Alt WAV provides actionable insights
              enabling you to create any Shopping experience with confidence.
            </p>
            <Link
              className="text-gray-300 border py-2 px-4 rounded-lg"
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
      {/* <Trends /> */}
      <Highlight />
      <Features />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
