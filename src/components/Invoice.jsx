import React from 'react'

const Invoice = ({recipe, empty, removeItem}) => {


  const handleEmptyInvoice = () => {
    empty();
  }

  const handlePrint = () => {
    window.print();
  }

  const handleDeleteRecipe = (item) => {
    removeItem(item)
  }
  return (
    <div className='bg-white lg:w-2/6 h-auto p-4 w-100 '>

        <div className="text-center p-3 border-2 border-black">
            <h2 className='text-2xl font-bold'>CWS Food Center</h2>
            <h5 className='text-gray-800 text-sm font-semibold'>Thana Chowk, Purnea - 854301</h5>
        </div>
      
        <table className="border-collapse w-full text-center ">
         <thead>
         <tr className='border-2 border-gray-800'>
            <th>Description</th>
            <th>Qty</th>
            <th>Price</th>
            <th className='d-print-none'>Remove</th>
          </tr>
         </thead>
         <tbody>
         {
            recipe?.map((item,index) => (
                  <tr key={index} className="border">
                    <td>{item.name}</td>
                    <td>1</td>
                    <td>{item.price}</td>
                    <td className='d-print-none'>
                      <button onClick={() => handleDeleteRecipe(item)} className='bg-red-600 text-white px-3 py-1 font-bold'>X</button>
                    </td>
                </tr>
            ))
          }
         </tbody>

         <tfoot className=''>
            <tr>
              <th colSpan="4" className='flex gap-3  d-print-none'>
                <a href="#" onClick={() => handlePrint()} className='bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded'>Print</a>
                <a href="#" onClick={() => handleEmptyInvoice()} className='bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded'>Clear</a>
              </th>
            </tr>
         </tfoot>
        </table>
    </div>
  )
}

export default Invoice