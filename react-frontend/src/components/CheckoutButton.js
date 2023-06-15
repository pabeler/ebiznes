import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-public-key");

const StripeCheckoutButton = ({ totalSum }) => {
  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ totalSum }),
    });

    const session = await response.json();

    if (session.error) {
      // Handle error
      console.error(session.error);
      return;
    }

    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return <button onClick={handleClick}>Pay Now</button>;
};

export default StripeCheckoutButton;
