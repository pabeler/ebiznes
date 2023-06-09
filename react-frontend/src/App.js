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
import Basket from "./components/Basket";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import {createContext, useEffect, useState} from "react";
import ChangeCredentials from "./components/ChangeCredentials";
import AccountDetails from "./components/AccountDetails";
import {ToastContainer} from "react-toastify";
import AddBook from "./components/AddBook";


export const logContext = createContext();

function App() {
  const [log, setLog] = useState("unlogged");

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
        const role = sessionStorage.getItem("role");
        if (role) {
            setLog(role);
        }
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      setLog("unlogged");
    }

    axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const response = await axios.post(
              "http://localhost:8080/api/v1/auth/refresh",
              {
                refreshToken: sessionStorage.getItem("refreshToken"),
              }
            );
            const newToken = response.data.token;
            sessionStorage.setItem("token", newToken);
            sessionStorage.setItem("refreshToken", response.data.refreshToken);
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${newToken}`;
            return axios(originalRequest);
          } catch (error) {
            console.error(error.message);
            console.log("Nie udało się odświeżyć tokenu", "error");
            logout();
          }
        }
        return Promise.reject(error);
      }
    );
  }, []);

  function logout() {
    // Remove tokens and user info from the local storage
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("id");

    // Remove auth header for future requests
    delete axios.defaults.headers.common["Authorization"];

    // Redirect to login page or home page
    this.props.history.push("/login");
  }

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
                <Route path="/basket" element={<Basket />} />
                <Route path="/add-book" element={<AddBook/>}/>
            </Routes>

            <Footer/>
            </logContext.Provider>
        </BrowserRouter>
        <ToastContainer/>
    </div>
  );
}

export default App;
