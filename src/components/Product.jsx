import React from 'react'

const Product = ({ name, img, price }) => {
    return (
        <div className='bg-white rounded'>
            <img src={img} className='w-full object-cover h-40 rounded-tr rounded-tl' alt="" />
            <div className="p-3">
                <h2 className='font-semibold'>{name}</h2>
                <h3 className='text-red-900 font-bold text-lg'>{price}/- Per Plate</h3>
            </div>
        </div>
    )
}

export default Product