import React, {useState} from "react";
import Tops from "../../components/Marketplace/Tops";
import Pants from "../../components/Marketplace/Pants";
import Shorts from "../../components/Marketplace/Shorts";
import Dresses from "../../components/Marketplace/Dresses";
import Others from "../../components/Marketplace/Others";
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
      <div className="grid grid-cols-5 gap-5 w-1/2 mx-auto mt-5">
        <button className="bg-black text-white rounded-md py-2" onClick={setTops}>Tops</button>
        <button className="bg-black text-white rounded-md py-2" onClick={setPants}>Pants</button>
        <button className="bg-black text-white rounded-md py-2" onClick={setShorts}>Shorts</button>
        <button className="bg-black text-white rounded-md py-2" onClick={setDresses}>Dresses</button>
        <button className="bg-black text-white rounded-md py-2" onClick={setOthers}>Others</button>
      </div>

      <div className="container m-auto">
        {/* {
          category === 1 ? <Tops /> : 
          category === 2 ? <Pants /> :
          category === 3 ? <Shorts /> :
          category === 4 ? <Dresses /> : <Others />
        } */}
        <Category category={category} />
      </div>
    </div>
  );
}

export default Marketplace;
