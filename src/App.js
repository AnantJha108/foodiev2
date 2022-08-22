import logo from './logo.svg';
import Navbar from './components/Navbar';
import Invoice from './components/Invoice';
import Menu from './components/Menu';

function App() {
  return (
    <>
    <Navbar/>
    <div className='bg-black w-full h-screen p-5'>
        

        <div className="flex gap-5">
            <Invoice/>
            <Menu/>
        </div>
      </div>
      </>
  );
}

export default App;
