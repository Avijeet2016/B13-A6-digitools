import './App.css'
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Stats from './components/Stats';
import Steps from './components/Steps';
import Tab from './components/Tab';
import Transform from './components/Transform';

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Tab></Tab>
      <Stats></Stats>
      <Steps></Steps>
      <Pricing></Pricing>
      <Transform></Transform>
      <Footer></Footer>
    </>
  );
}

export default App
