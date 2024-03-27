// import React, { useState } from 'react'


// function App() {
//     const [counter, setCounter] = useState(0);
//     const [InpVal, setInpVal] = useState(0);

//     const IC = () =>{
//         setCounter(counter+1);
//     }
//     const DC = () =>{
//         setCounter(counter-1);
//     }
//     const RS = () =>{
//         setCounter(0);
//     }
//     const INP = (Val) =>{
//         setInpVal(Val);
//     }
//     const addInpVal = (Val) =>{
//         setCounter(counter + Number(Val));
//         setInpVal(0);
//     }

//   return (
//     <div className='App'>
//       <h1>{counter}</h1>
//       <button onClick={IC}>Increment</button>
//       <button onClick={DC}>Decrement</button>
//       <button onClick={RS}>Reset</button>
//       <br />
//       <input type="number" onChange={(e) => INP(e.target.value)} value={InpVal}/>
//       <button onClick={addInpVal}>Add</button>
//     </div>
//   )
// }

// export default App



// ExamCode

import React, { useState } from 'react';
import ProductCard from './Components/ProductCard';
import Cart from './Components/Cart';

const products = [
  { id: 1, name: 'Product 1', price: 10, image: 'http://books.google.com/books/content?id=JHEkAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api' },
  { id: 2, name: 'Product 2', price: 15, image: 'product2.jpg' },
  // ... add more products
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId, quantity) => {
    const existingItem = cartItems.find((item) => item.id === productId);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      setCartItems([...cartItems, { id: productId, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} subtotal={subtotal} />
      <button>Checkout</button>  {/* This button can be linked to a checkout page */}
    </div>
  );
};

export default App;
