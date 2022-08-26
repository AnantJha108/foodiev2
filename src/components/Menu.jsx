import React from 'react'
import ProductData from '../data/products.json'
import Product from './Product'

const Menu = (props) => {

 const handleClick = (recipe) => {
    props.addItems(recipe);
 }
  return (
    <div className='grid grid-cols-4 gap-5 w-4/6 d-print-none'>
       
        {
            ProductData.map((product, index) => {
                return (
                    <button onClick={() => handleClick(product)} key={index}>
                        <Product name={product.name} img={product.img} price={product.price}/>
                    </button>
                )
            })
        }
      
    </div>
  )
}

export default Menu