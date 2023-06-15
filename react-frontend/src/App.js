import "./App.css";
import CartContext from "./CartContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AddressDetails from "./components/AddressDetails";
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
import { createContext, useEffect, useState } from "react";
import ChangeCredentials from "./components/ChangeCredentials";
import AccountDetails from "./components/AccountDetails";
import { ToastContainer } from "react-toastify";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import BookDetails from "./components/BookDetails";
import Regulations from "./components/Regulations";
import Privacy from "./components/Privacy";
export const logContext = createContext();

function App() {
  const [log, setLog] = useState("unlogged");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const role = sessionStorage.getItem("role");
      if (role) {
        setLog(role);
      }
      // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      setLog("unlogged");
    }

    //   axios.interceptors.response.use(
    //     (response) => response,
    //     async (error) => {
    //       const originalRequest = error.config;
    //       if (error.response.status === 401 && !originalRequest._retry) {
    //         originalRequest._retry = true;
    //         try {
    //           const response = await axios.post(
    //             "http://localhost:8080/api/v1/auth/refresh",
    //             {
    //               refreshToken: sessionStorage.getItem("refreshToken"),
    //             }
    //           );
    //           const newToken = response.data.token;
    //           sessionStorage.setItem("token", newToken);
    //           sessionStorage.setItem("refreshToken", response.data.refreshToken);
    //           axios.defaults.headers.common[
    //             "Authorization"
    //           ] = `Bearer ${newToken}`;
    //           return axios(originalRequest);
    //         } catch (error) {
    //           console.error(error.message);
    //           console.log("Nie udało się odświeżyć tokenu", "error");
    //           logout();
    //         }
    //       }
    //       return Promise.reject(error);
    //     }
    //   );
  }, []);

  // function logout() {
  //   // Remove tokens and user info from the local storage
  //   sessionStorage.removeItem("token");
  //   sessionStorage.removeItem("refreshToken");
  //   sessionStorage.removeItem("id");
  //   sessionStorage.removeItem("role");
  // }

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="App">
        <BrowserRouter>
          <logContext.Provider value={{ log, setLog }}>
            <Navbar />
            <div className="spacer">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addressDetails" element={<AddressDetails />} />
              <Route path="/changePassword" element={<ChangeCredentials />} />
              <Route path="/accountDetails" element={<AccountDetails />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/services" element={<Services />} />
              <Route path="/add-book" element={<AddBook />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/edit-book" element={<EditBook />} />
              <Route path="/product/:id" element={<BookDetails />} />
              <Route path="/regulations" element={<Regulations />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
            </div>
            <Footer />
          </logContext.Provider>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </CartContext.Provider>
  );
}

export default App;
