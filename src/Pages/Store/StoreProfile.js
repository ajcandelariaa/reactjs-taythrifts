import React from "react";
import { doc } from "firebase/firestore";
import { db } from "../../services/Firebase";
import EditStoreImage from "../../components/store/EditStoreImage";
import EditStoreInfo from "../../components/store/EditStoreInfo";
import EditStorePassword from "../../components/store/EditStorePassword";

function StoreProfile() {
  const accountId = window.sessionStorage.getItem("account_id");
  const docRef = doc(db, "stores", accountId);

  return (
    <div>
      <EditStoreImage docRef={docRef} />
      <EditStoreInfo docRef={docRef} />
      <EditStorePassword docRef={docRef} />
    </div>
  );
}

export default StoreProfile;
