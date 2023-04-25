import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Settings from './components/Settings';
import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import Login from "./components/Login";
import { useState,createContext } from "react";

export const logContext = createContext();

function App() {
  const [log, setLog] = useState("unlogged");
  return (
    <div className="App">

        <BrowserRouter>
        <logContext.Provider value={{log,setLog}}>
            <Navbar/>
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>

            <Footer/>
            </logContext.Provider>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
