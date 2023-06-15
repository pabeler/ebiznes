import React, { useContext, useState } from "react";
import CartContext from "../CartContext";
import { loadStripe } from "@stripe/stripe-js";
import "./CheckoutButton";

const stripePromise = loadStripe(
  "pk_test_51NJ02BA92ElYRt2EPKz5OYHMhLGJSk6vS6poc01HSMFfv4LC8s8xx9gKDgdDqoMdeQ2JkXdZq0Jpylj2Ud8LMZb9008v9HWuYm"
);

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

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

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const order = {
      user: { id: sessionStorage.getItem("id") },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      destination_address: "ADRES_DO_DOSTAWY",
      status: "CREATED",
      items: cart.map((item) => ({
        book: {
          id: item.id,
          price: item.price * 100,
        },
        quantity: item.quantity,
      })),
    };

    // Send the request to create a new order
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

    const paymentRequest = {
      totalPrice: totalSum,
      items: cart.map((item) => ({
        book: {
          id: item.id,
          price: item.price * 100,
        },
        quantity: item.quantity,
      })),
    };

    const sessionResponse = await fetch(
      "http://localhost:8080/api/v1/checkout/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentRequest),
      }
    );

    const session = await sessionResponse.json();
    console.log(sessionResponse.json());

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div>
      <h2>Koszyk</h2>
      <div className="cart-container">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image_url} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>{item.price} zł</p>
              <p>Ilość: {item.quantity}</p>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>
                Usuń z koszyka
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <h3>Suma całkowita: {totalSum} zł</h3>
        <button onClick={handleCheckout}>Przejdź do płatności</button>
      </div>
    </div>
  );
}
