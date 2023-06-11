import React, { useContext } from "react";
import "./BasketIcon.css";
import CartContext from "../CartContext";

export default function BasketIcon() {
  const { cart, setCart } = useContext(CartContext);
  const totalSum = parseFloat(
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
  );
  return (
    <div className="basket">
      <img
        className="basket--icon"
        src="images\shopping-basket.png"
        alt="basket"
      />
      <div className="basket--header">
        <h3 className="basket--header_text">Mój Koszyk</h3>
        <h3 className="basket--header_text">{totalSum}zł</h3>
      </div>
    </div>
  );
}
