import './App.css'
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Stats from './components/Stats';
import Steps from './components/Steps';

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Steps></Steps>
      <Pricing></Pricing>
    </>
  );
}

export default App
