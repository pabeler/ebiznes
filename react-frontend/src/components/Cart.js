import React, { useContext, useState, useEffect } from "react";
import { fetchData } from "./FetchData";
import CartContext from "../CartContext";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [data, setData] = useState(null);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const totalSum = parseFloat(
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
  );

  const incrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity !== 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const [destinationAddress, setDestinationAddress] = useState("");
  const [useSavedAddress, setUseSavedAddress] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [blikCode, setBlikCode] = useState("");

  const handleCheckout = async () => {
    if (!useSavedAddress) {
      const addressString = `${country},${city},${street},${houseNumber},${apartmentNumber},${postalCode}`;
      setDestinationAddress(addressString);
    }

    const order = {
      user: { id: sessionStorage.getItem("id") },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      destination_address: destinationAddress,
      status: "PAID",
      items: cart.map((item) => ({
        book: {
          id: item.id,
          price: item.price * 100,
        },
        quantity: item.quantity,
      })),
    };

    const orderResponse = await fetch(
      "http://localhost:8080/api/v1/order/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }
    );

    if (!orderResponse.ok) {
      console.error("Failed to create order:", await orderResponse.text());
      return;
    }
  };

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetchData();
      if (response) {
        setData(response.data);
      }
    };

    fetchResponse().then((r) => console.log(r));

    if (useSavedAddress) {
      setDestinationAddress(data.address);
    }
  }, [useSavedAddress]);

  return (
    <div className="container">
      <h2>Koszyk</h2>
      <div className="row">
        <div className="row col-md-6">
          {cart.map((item) => (
            <div className="col-sm-6 col-lg-3 product">
              <div key={item.id} className="d-block text-center mb-4">
                <div className="product-list">
                  <div className="position-relative">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="img-fluid product-image"
                      style={{ width: "127px", height: "193px" }}
                    />
                  </div>
                  <div className="product-name pt-3">
                    <h3 className="text-capitalize">
                      <b>{item.title}</b>
                    </h3>
                    <p className="product-price mb-0">{item.price} zł</p>
                    <p className="card-text">Ilość: {item.quantity}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Usuń z koszyka
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          <h3>Suma całkowita: {totalSum} zł</h3>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="useSavedAddress"
              checked={useSavedAddress}
              onChange={(e) => setUseSavedAddress(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="useSavedAddress">
              Użyj zapisanego adresu
            </label>
          </div>
          {!useSavedAddress && (
            <div>
              <div className="form-group">
                <label htmlFor="country">Kraj</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">Miasto</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="street">Ulica</label>
                <input
                  type="text"
                  className="form-control"
                  id="street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="houseNumber">Numer domu</label>
                <input
                  type="text"
                  className="form-control"
                  id="houseNumber"
                  value={houseNumber}
                  onChange={(e) => setHouseNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="apartmentNumber">Numer mieszkania</label>
                <input
                  type="text"
                  className="form-control"
                  id="apartmentNumber"
                  value={apartmentNumber}
                  onChange={(e) => setApartmentNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="postalCode">Kod pocztowy</label>
                <input
                  type="text"
                  className="form-control"
                  id="postalCode"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
            </div>
          )}
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Informacje o płatności:</h3>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="paymentMethod"
                  checked={paymentMethod === "card"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.checked ? "card" : "blik")
                  }
                />
                <label className="form-check-label" htmlFor="paymentMethod">
                  Płatność kartą
                </label>
              </div>
              {paymentMethod === "card" && (
                <div className="form-group">
                  <label htmlFor="cardNumber">Numer karty</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>
              )}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="paymentMethod"
                  checked={paymentMethod === "blik"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.checked ? "blik" : "card")
                  }
                />
                <label className="form-check-label" htmlFor="paymentMethod">
                  Płatność Blik
                </label>
              </div>
              {paymentMethod === "blik" && (
                <div className="form-group">
                  <label htmlFor="blikCode">Kod Blik</label>
                  <input
                    type="text"
                    className="form-control"
                    id="blikCode"
                    value={blikCode}
                    onChange={(e) => setBlikCode(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Złóż zamówienie
          </button>
        </div>
      </div>
    </div>
  );
}
