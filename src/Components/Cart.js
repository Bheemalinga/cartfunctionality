import React from "react";

const Cart = ({ cartItems, removeFromCart, subtotal }) => {
  return (
    <div className="cart">
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((cartItem) => (
        <div key={cartItem.id} className="cart-item">
          <p>{cartItem.name}</p>
          <p>Quantity: {cartItem.quantity}</p>
          <p>Price: ${cartItem.price * cartItem.quantity}</p>
          <button onClick={() => removeFromCart(cartItem.id)}>Remove</button>
        </div>
      ))}
      {cartItems.length > 0 && (
        <div className="cart-subtotal">
          <p>Subtotal: ${subtotal}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
