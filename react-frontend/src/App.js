import "./App.css";
import CartContext from "./CartContext";
// import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Settings from "./components/Settings";
import Shop from "./components/Shop";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Categories from "./components/Categories";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Cart from "./components/Cart";
// import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useState, useEffect, createContext } from "react";

export const logContext = createContext();

function App() {
  const [log, setLog] = useState("unlogged");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const savedCart = sessionStorage.getItem("cart");

    if (token) {
      setLog("logged");
      // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      setLog("unlogged");
    }
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    // axios.interceptors.response.use(
    //   (response) => response,
    //   async (error) => {
    //     const originalRequest = error.config;
    //     if (
    //       error.response &&
    //       error.response.status === 401 &&
    //       !originalRequest._retry
    //     ) {
    //       originalRequest._retry = true;
    //       try {
    //         const response = await axios.post(
    //           "http://localhost:8080/api/v1/auth/refresh",
    //           {
    //             refreshToken: sessionStorage.getItem("refreshToken"),
    //           }
    //         );
    //         const newToken = response.data.token;
    //         sessionStorage.setItem("token", newToken);
    //         sessionStorage.setItem("refreshToken", response.data.refreshToken);
    //         axios.defaults.headers.common[
    //           "Authorization"
    //         ] = `Bearer ${newToken}`;
    //         return axios(originalRequest);
    //       } catch (error) {
    //         console.error(error.message);
    //         console.log("Nie udało się odświeżyć tokenu", "error");
    //         logout();
    //       }
    //     }
    //     return Promise.reject(error);
    //   }
    // );
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // function logout() {
  //   // Remove tokens and user info from the local storage
  //   sessionStorage.removeItem("token");
  //   sessionStorage.removeItem("refreshToken");
  //   sessionStorage.removeItem("id");

  //   // Remove auth header for future requests
  //   delete axios.defaults.headers.common["Authorization"];

  //   // Redirect to login page or home page
  //   //navigate("/login");
  // }

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="App">
        <BrowserRouter>
          <logContext.Provider value={{ log, setLog }}>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/services" element={<Services />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>

            <Footer />
          </logContext.Provider>
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
}

export default App;
