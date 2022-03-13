import React from "react";
import StoreNavbar from "../../components/Navbars/StoreNavbar";
import StoreTransaction from "../../components/Store/StoreTransaction";

function StoreTransactions() {
  return (
    <div>
      <StoreNavbar link="../images/taythrifts_logo.png" />
      <div className="container mx-auto my-10">
        <StoreTransaction />
        <StoreTransaction />
      </div>
    </div>
  );
}

export default StoreTransactions;
