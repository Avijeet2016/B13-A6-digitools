import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Stats from './components/Stats';
import Steps from './components/Steps';
import Tab from './components/Tab';
import Transform from './components/Transform';
import Products from './components/Products';
import Cart from './components/Cart';

const getProducts = async () => {
  const res = await fetch('/productModel.json');
  return res.json();
}



function App() {
  const [tab, setTab] = useState("products");
  
  const [cart, setCart] = useState([]);

  const productsPromise = getProducts();
  return (
    <>
      <Navbar cart={cart}></Navbar>
      <Banner></Banner>
      <Tab tab={tab} setTab={setTab} cart={cart}></Tab>
      <Suspense
        fallback={
          <div className='flex justify-center items-center'>
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        {tab === "products" && (
          <Products productsPromise={productsPromise} cart={cart} setCart={setCart}></Products>
        )}
      </Suspense>
      {tab === "cart" && <Cart cart={cart} setCart={setCart}></Cart>}
      <Stats></Stats>
      <Steps></Steps>
      <Pricing></Pricing>
      <Transform></Transform>
      <Footer></Footer>
    </>
  );
}

export default App
