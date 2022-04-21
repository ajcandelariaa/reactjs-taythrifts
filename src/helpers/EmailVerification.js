import { updateDoc } from "firebase/firestore";
import React from "react";
import { toastSuccess } from "../helpers/Toaster";

function EmailVerification({ docRef }) {
 
  const verifiyEmail = async () => {
    await updateDoc(docRef, {
      verified: true,
    });
    toastSuccess("Your email is now verified!");
  };

  return (
    <div className="grid place-items-center h-screen -mt-20">
      <button
        onClick={verifiyEmail}
        className="shop-btn relative text-black hover:text-white border border-sideBarMarketplace py-6 px-14 text-2xl rounded-lg"
      >
        <span className="z-10 relative">Verify your email first</span>
      </button>
    </div>
  );
}

export default EmailVerification;
