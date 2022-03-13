import React, { useState } from "react";
import AddItem from "../../components/Store/AddItem";
import Inventory from "../../components/Store/Inventory";
import StoreNavbar from "../../components/Navbars/StoreNavbar";

function Dashboard() {
  const [showAdd, setShowAdd] = useState(false);

  const showAddItem = () => {
    setShowAdd(true);
  };

  const hideAddItem = () => {
    setShowAdd(false);
  };

  return (
    <div>
      <StoreNavbar link="../images/taythrifts_logo.png" />

      <div className="container mx-auto">
        <div className="mt-5">
          {showAdd ? (
            <>
              <button
                className="py-2 px-3 bg-green-600 hover:bg-green-700 text-white"
                onClick={hideAddItem}
              >
                <i class="fa-solid fa-arrow-left mr-2"></i>Go Back
              </button>
            </>
          ) : (
            <>
              <button
                className="py-2 px-3 bg-green-600 hover:bg-green-700 text-white"
                onClick={showAddItem}
              >
                <i class="fa-solid fa-plus mr-2"></i>Add Item
              </button>
            </>
          )}
        </div>

        {showAdd ? <AddItem setShowAdd={setShowAdd} /> : <Inventory />}
      </div>
    </div>
  );
}

export default Dashboard;
