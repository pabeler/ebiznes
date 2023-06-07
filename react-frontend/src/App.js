import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import AddressDetails from './components/AddressDetails';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Categories from './components/Categories';
import Services from './components/Services';
import Blogs from './components/Blogs'  
import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import Login from "./components/Login";
import { useState, useEffect, createContext } from "react";
import ChangeCredentials from "./components/ChangeCredentials";
import AccountDetails from "./components/AccountDetails";
import {ToastContainer} from "react-toastify";


export const logContext = createContext();

function App() {
  const [log, setLog] = useState("unlogged");

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setLog("logged");
    } else {
      setLog("unlogged");
    }
  }, []);

  return (
    <div className="App">

        <BrowserRouter>
        <logContext.Provider value={{log,setLog}}>
            <Navbar/>
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/addressDetails" element={<AddressDetails/>}/>
                <Route path="/changePassword" element={<ChangeCredentials/>}/>
                <Route path="/accountDetails" element={<AccountDetails/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>

            <Footer/>
            </logContext.Provider>
        </BrowserRouter>
        <ToastContainer/>
        
    </div>
  );
}

export default App;
