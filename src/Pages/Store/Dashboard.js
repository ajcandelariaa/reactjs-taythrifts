import React, { useState } from "react";
import AddItem from "../../components/store/AddItem";
import EditItem from "../../components/store/EditItem";
import Inventory from "../../components/store/Inventory";

function Dashboard() {
  const [show, setShow] = useState("Default");

  const showAddItem = () => {
    setShow("Add");
  };

  const hideAddItem = () => {
    setShow("Default");
  };

  return (
    <div className="container mx-auto">
      <div className="mt-5">
        {show !== "Default" ? (
          <>
            <button
              className="py-2 px-3 bg-green-600 hover:bg-green-700 text-white"
              onClick={hideAddItem}
            >
              <i className="fa-solid fa-arrow-left mr-2"></i>Go Back
            </button>
          </>
        ) : (
          <>
            <button
              className="py-2 px-3 bg-green-600 hover:bg-green-700 text-white"
              onClick={showAddItem}
            >
              <i className="fa-solid fa-plus mr-2"></i>Add Item
            </button>
          </>
        )}
      </div>

      {show === "Add" ? <AddItem setShow={setShow} /> : show === "Edit" ? <EditItem setShow={setShow} /> : <Inventory />}
    </div>
  );
}

export default Dashboard;
