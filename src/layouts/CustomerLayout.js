import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../services/Firebase";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CustomerNavbar from "../components/navbars/CustomerNavbar";
import EmailVerification from "../helpers/EmailVerification";

function CustomerLayout() {
  const [verified, setVerified] = useState(true);
  const [loading, setLoading] = useState(true);
  const accountId = window.sessionStorage.getItem("account_id");
  const docRef = doc(db, "customers", accountId);

  useEffect(() => {
    const unsub = onSnapshot(docRef, (doc) => {
      setVerified(doc.data().verified);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return (
    <div>
      <CustomerNavbar link="../images/taythrifts_logo.png" />
      {loading ? (
        <div className="grid place-items-center h-screen -mt-20">
          {/* <img src="../images/loader.gif" alt="loader" /> */}
          <h1>Loading...</h1>
        </div>
      ) : (
        <>{verified ? <Outlet /> : <EmailVerification docRef={docRef} />}</>
      )}
    </div>
  );
}

export default CustomerLayout;
