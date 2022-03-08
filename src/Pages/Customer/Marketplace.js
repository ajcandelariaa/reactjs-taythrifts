import React, {useState} from "react";
import CustomerNavbar from "../../components/Navbars/CustomerNavbar";
import Category from "../../components/Marketplace/Category";

function Marketplace() {
  const [category, setCategory] = useState("Tops");

  const setTops = () => {
    setCategory("Tops");
  }
  const setPants = () => {
    setCategory("Pants");
  }
  const setShorts = () => {
    setCategory("Shorts");
  }
  const setDresses = () => {
    setCategory("Dresses");
  }
  const setOthers = () => {
    setCategory("Others");
  }

  return (
    <div>
      <CustomerNavbar link="../images/taythrifts_logo.png" />
      <div className="flex gap-2">
        <div className="bg-sideBarMarketplace h-screen">
          <div className="grid grid-rows-5 gap-5 mt-5">
            <button className="bg-gray-600 text-white py-2 w-52" onClick={setTops}>Tops</button>
            <button className="bg-gray-600 text-white py-2 w-52" onClick={setPants}>Pants</button>
            <button className="bg-gray-600 text-white py-2 w-52" onClick={setShorts}>Shorts</button>
            <button className="bg-gray-600 text-white py-2 w-52" onClick={setDresses}>Dresses</button>
            <button className="bg-gray-600 text-white py-2 w-52" onClick={setOthers}>Others</button>
          </div>
        </div>
        <div className="container mx-auto">
          <Category category={category} />
        </div>
      </div>

    </div>
  );
}

export default Marketplace;
