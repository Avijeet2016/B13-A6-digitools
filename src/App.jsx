import './App.css'
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Stats from './components/Stats';
import Steps from './components/Steps';
import Transform from './components/Transform';

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Steps></Steps>
      <Pricing></Pricing>
      <Transform></Transform>
      <Footer></Footer>
    </>
  );
}

export default App
