import React, {useState} from 'react'

function CartItem() {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

  return (
    <div className='my-4'>
        <div className='grid grid-cols-footerGrid gap-5'>
            <img src='../images/sampleItem.jpg' alt='sampleItem' className='object-cover h-full' />
            <div>
                <h1>Pants</h1>
                <div className='mt-2 flex gap-3'>
                    <img src='../images/sampleResto.jpg' alt='sampleResto' className='w-6 h-6 object-cover rounded-full' />
                    <p>Forever 21</p>
                </div>
                <div className='my-5'>
                    <div className='flex'>
                        <p className='pr-2'>Quantity: </p>
                        <button className='bg-gray-700 text-white w-5' onClick={decreaseQuantity}>-</button>
                        <div className='w-8'>
                            <p className='bg-gray-300 text-center'>{quantity}</p>
                        </div>
                        <button className='bg-gray-700 text-white w-5' onClick={increaseQuantity}>+</button>
                    </div>
                    <p>Category: Apparel & Accessories</p>
                    <p>Descirption: brown</p>
                    <p>Price: ₱ 200.00</p>
                </div>
                <div className=''>
                    <p className='text-red-500 hover:underline cursor-pointer'><i className="fa-solid fa-trash mr-2"></i>Remove Item</p>
                </div>
            </div>
        </div>
        
        <div className='border border-gray-300 mt-8'></div>
    </div>
  )
}

export default CartItem