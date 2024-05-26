
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  
  return (
    <>
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route   path='/'     element={<Home/>} />
        <Route   path='/about' element={<About/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>
      <Footer/>
      </BrowserRouter> 
    
    </>
  );
}

export default App;
