import React, {useState} from 'react'

function Category(props) {
  const [isHover, setIsHover] = useState(false);

  const mouseIn = (e) => {
    setIsHover(true);
  }
  const mouseOut = (e) => {
    setIsHover(false);
  }


  return (
    <div>
      <h1 className='text-2xl text-center mt-5 underline uppercase'>{props.category}</h1>

      <div className='grid grid-cols-4 gap-5 my-10'>
        <div className='shadow-2xl bg-white rounded-xl'>
          <div className='bg-itemBgHover rounded-tr-xl rounded-tl-xl relative' onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
            <img src='../images/sampleItem.jpg' alt='sampleItem' className={isHover ? 'h-80 object-cover w-full rounded-tr-xl rounded-tl-xl opacity-50' : 'h-80 object-cover w-full rounded-tr-xl rounded-tl-xl'} />
            
            {isHover && (
                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 grid grid-rows-2 gap-2'>
                  <button className='text-black bg-white rounded-2xl w-40 py-1 hover:text-white hover:bg-pink-400'>Add to Cart</button>
                  <button className='text-black bg-white rounded-2xl w-40 py-1 hover:text-white hover:bg-pink-400'>Name your price</button>
                </div>
            )}
          </div>
          <div className='flex justify-between py-3 px-5 w-full'>
            <div>
              <div className='flex gap-1 items-center'>
                <img src='../images/sampleResto.jpg' alt='sampleResto' className='w-7 h-7 object-cover rounded-full' />
                <p>Forever 21</p>
              </div>
              <p>Yellow Turtle Neck Dress</p>
            </div>
            <div>
              <p>200.00</p>
              <p>150.00</p>
            </div>
          </div>
        </div>

        <div className='shadow-2xl bg-white rounded-xl'>
          <div className='bg-itemBgHover rounded-tr-xl rounded-tl-xl relative' onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
            <img src='../images/sampleItem.jpg' alt='sampleItem' className={isHover ? 'h-80 object-cover w-full rounded-tr-xl rounded-tl-xl opacity-50' : 'h-80 object-cover w-full rounded-tr-xl rounded-tl-xl'} />
            
            {isHover && (
                <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 grid grid-rows-2 gap-2'>
                  <button className='text-black bg-white rounded-2xl w-40 py-1 hover:text-white hover:bg-pink-400'>Add to Cart</button>
                  <button className='text-black bg-white rounded-2xl w-40 py-1 hover:text-white hover:bg-pink-400'>Name your price</button>
                </div>
            )}
          </div>
          <div className='flex justify-between py-3 px-5 w-full'>
            <div>
              <div className='flex gap-1 items-center'>
                <img src='../images/sampleResto.jpg' alt='sampleResto' className='w-7 h-7 object-cover rounded-full' />
                <p>Forever 21</p>
              </div>
              <p>Yellow Turtle Neck Dress</p>
            </div>
            <div>
              <p>200.00</p>
              <p>150.00</p>
            </div>
          </div>
        </div>

        

      </div>
    </div>
  )
}

export default Category