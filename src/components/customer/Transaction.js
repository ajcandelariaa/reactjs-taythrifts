import React, { useState } from "react";
import TransactionItemModal from "./TransactionItemModal";

function Transaction({ transaction }) {
  const [transactionModal, setTransactionModal] = useState(false);

  return (
    <div >
      <div className="border border-gray-200"></div>
      <div className="grid grid-cols-5 gap-4 py-2 my-1 w-full justify-items-center items-center">
        <p>{transaction.orderNumber}</p>
        <p>{new Date(transaction.checkoutDate.seconds * 1000).toLocaleDateString("en-US")}</p>
        <p>₱ {parseFloat(transaction.totalSpent).toFixed(2)}</p>
        <p>{transaction.numberOfItems}</p>
        <p className="cursor-pointer" onClick={() => setTransactionModal(true)} ><i class="fa-solid fa-eye"></i></p>
      </div>
      {transactionModal && (
        <TransactionItemModal
        setTransactionModal={setTransactionModal}
        transaction={transaction}
        orderNumber={transaction.orderNumber}
        />
      )}
    </div>
  );
}

export default Transaction;
