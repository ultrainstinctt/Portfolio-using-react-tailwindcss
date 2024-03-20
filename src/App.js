import './App.css';
import NavBar from "./components/NavBar";
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
 
  return (
    <div>  
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  
  );
}

export default App;