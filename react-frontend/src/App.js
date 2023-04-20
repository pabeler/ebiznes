import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
