import React from 'react'

const Invoice = () => {
  return (
    <div className='bg-white h-auto w-3/6 p-4'>

        <div className="text-center p-3 border-2 border-black">
            <h2 className='text-2xl font-bold'>CWS Food Center</h2>
            <h5 className='text-gray-800 text-sm font-semibold'>Thana Chowk, Purnea - 854301</h5>
        </div>
        <div className="flex border border-black justify-around gap-10 px-2 font-semibold">
                <h2 className='flex-1'>Description</h2>
                <h2>Qty</h2>
                <h2>Price</h2>
                <h2>Remove</h2>
        </div>
    </div>
  )
}

export default Invoice