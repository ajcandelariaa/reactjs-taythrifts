import React from "react";
import CustomerNavbar from "../../components/Navbars/CustomerNavbar";
import Transaction from "../../components/Customer/Transaction";

function CustomerTransactions() {
  return (
    <div>
      <CustomerNavbar link="../images/taythrifts_logo.png" />
      <div className="container mx-auto my-10">
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
    </div>
  );
}

export default CustomerTransactions;
