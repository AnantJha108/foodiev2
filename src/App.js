import logo from './logo.svg';
import Navbar from './components/Navbar';
import Invoice from './components/Invoice';
import Menu from './components/Menu';
import { useState } from 'react';

function App() {

  const [invoice, setInvoice] = useState([]);

  const emptyInvoice = () => {
    setInvoice([]);
  }

  const addItems = (recipe) => {
    setInvoice([...invoice, recipe]);

    // console.log(invoice);
  }

  const removeItem = (item) => {

    let newArray = invoice;
    newArray.splice(newArray.findIndex(a => a.name === item.name),1)
    setInvoice([...newArray]);

  }

  return (
    <>
    <Navbar/>
    <div className='bg-black w-full h-screen p-5'>
        

        <div className="flex gap-5">
            <Invoice recipe={invoice} empty={emptyInvoice}  removeItem={removeItem}/>
            <Menu addItems={addItems}/>
        </div>
      </div>
      </>
  );
}

export default App;
