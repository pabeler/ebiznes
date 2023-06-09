import React, { useContext } from "react";
import CartContext from "../CartContext";

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

  const handleCheckout = () => {
    // Here you should handle the checkout process
    console.log("Proceeding to checkout...");
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
