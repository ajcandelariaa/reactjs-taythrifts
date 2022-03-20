import React from 'react'
import StoreTransactionItem from './StoreTransactionItem'

function StoreTransaction() {
  return (
    <div className='bg-gray-300 shadow-lg p-5 mt-10 rounded-xl'>
        <div className='flex justify-around text-black font-semibold  text-xl'>
            <p>Customer: Aj Candelaria</p>
            <p>Order Number: #536</p>
            <p>Date: September 5, 2020</p>
        </div>

        <div className='mt-4'>
            <div className='grid grid-cols-9 gap-4 w-full justify-items-center items-center font-bold bg-black text-white py-2'>
                <p className='col-span-1'>Image</p>
                <p className='col-span-3'>Product Name</p>
                <p className='col-span-2'>Description</p>
                <p className='col-span-1'>Quantity</p>
                <p className='col-span-1'>Price</p>
                <p className='col-span-1'>Total Price</p>
            </div>
            <StoreTransactionItem />
            <StoreTransactionItem />
            <StoreTransactionItem />
        </div>
    </div>
  )
}

export default StoreTransaction