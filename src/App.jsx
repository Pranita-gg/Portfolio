import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import CustomButton from "./components/CustomButton";


function App() {
  return (
    <>
   
     <NavBar/>
     
     <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Projects" element={<Projects/>}/>
         <Route path="/About" element={<About/>}/>
       

     </Routes>
    
<Footer/>
     
     
    </>
  );
}

export default App;
