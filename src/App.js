import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import QA from './components/QA';
import Reviews from './components/Reviews';
function App() {
  const hamburger=()=>
  {
    var elem=document.getElementById('menu-btn')
    var nav=document.getElementById('menu')
   elem.classList.toggle('open')
   nav.classList.toggle('flex')
   nav.classList.toggle('hidden')
  }
  return (
    <div className="App">
      <Navbar hamburger={hamburger}/>
      <Hero/>
      <QA/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
