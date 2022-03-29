import React, { useState } from "react";
import StoreTransactionModal from "./StoreTransactionModal";
import { convertDateToString } from "../../helpers/GetStringDate";
import { AnimatePresence } from "framer-motion";

function StoreTransaction({ transaction }) {
  const [storeTransactionModal, setStoreTransactionModal] = useState(false);

  return (
    <div>
      <div className="border border-gray-200"></div>
      <div className="grid grid-cols-6 gap-4 py-2 my-1 w-full justify-items-center items-center">
        <p>{transaction.orderNumber}</p>
        <p>
          {convertDateToString(
            new Date(
              transaction.checkout_date.seconds * 1000
            ).toLocaleDateString("en-US")
          )}
        </p>
        <p>{transaction.customerName}</p>
        <p>₱ {parseFloat(transaction.totalSpent).toFixed(2)}</p>
        <p>{transaction.numberOfItems}</p>
        <p
          className="cursor-pointer"
          onClick={() => setStoreTransactionModal(true)}
        >
          <i class="fa-solid fa-eye"></i>
        </p>
      </div>
      <AnimatePresence>
        {storeTransactionModal && (
          <StoreTransactionModal
            setStoreTransactionModal={setStoreTransactionModal}
            transaction={transaction}
            orderNumber={transaction.orderNumber}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default StoreTransaction;
