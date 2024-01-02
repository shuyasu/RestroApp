import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Menu from "./Screens/Menu";
import Pagenotfound from "./Screens/Pagenotfound";
function App() {
  return (
   
    
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="*" element={<Pagenotfound/>}/>
     </Routes>

     </BrowserRouter>
  );
}

export default App;
