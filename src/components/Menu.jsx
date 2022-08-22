import React from 'react'
import ProductData from '../data/products.json'
import Product from './Product'

const Menu = () => {
  return (
    <div className='grid grid-cols-4 gap-5'>
       
        {
            ProductData.map((product, index) => {
                return (
                    <button key={index}>
                        <Product name={product.name} img={product.img} price={product.price}/>
                    </button>
                )
            })
        }
      
    </div>
  )
}

export default Menu