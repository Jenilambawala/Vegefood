import './App.css';

import { Header } from './Components/Header';
import { Slider } from './Components/Slider';
import { Home } from './Components/Home';
import { Footer } from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Blog from './Components/Blog';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<><Slider/><Home/></>}> </Route>
        <Route path="/About" element={<About/>}> </Route>
        <Route path="/Products" element={<Products/>}> </Route>
        <Route path="/Contact" element={<Contact/>}> </Route>
        <Route path="/Blog" element={<Blog/>}> </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;