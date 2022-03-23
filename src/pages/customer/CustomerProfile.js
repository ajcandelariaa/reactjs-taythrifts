import React from "react";
import { doc } from "firebase/firestore";
import { db } from "../../services/Firebase";
import EditCustomerImage from "../../components/customer/EditCustomerImage";
import EditCustomerInfo from "../../components/customer/EditCustomerInfo";
import EditCustomerPassword from "../../components/customer/EditCustomerPassword";

function CustomerProfile() {
  const accountId = window.sessionStorage.getItem("account_id");
  const docRef = doc(db, "customers", accountId);

  return (
    <div>
      <EditCustomerImage docRef={docRef} />
      <EditCustomerInfo docRef={docRef} />
      <EditCustomerPassword docRef={docRef} />
    </div>
  );
}

export default CustomerProfile;
