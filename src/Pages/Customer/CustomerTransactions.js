import React from "react";
import Transaction from "../../components/customer/Transaction";

function CustomerTransactions() {
  return (
    <div className="container mx-auto my-10">
      <Transaction />
      <Transaction />
      <Transaction />
    </div>
  );
}

export default CustomerTransactions;
