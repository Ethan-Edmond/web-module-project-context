import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

const initialCart = JSON.parse(window.localStorage.getItem('cart')) || [];

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState(initialCart);

	const addItem = item => {
    if (!cart.some(elem => elem.id === item.id)){
      const newCart = [...cart, item];
      setCart(newCart);
      window.localStorage.setItem('cart', JSON.stringify(newCart));
    }
	};

  const makeRemoveItem = (item) => {
    return () => {
      const newCart = cart.filter(elem => elem !== item);
      setCart(newCart);
      window.localStorage.setItem('cart', JSON.stringify(newCart));
    };
  };

	return (
		<div className="App">
      <ProductContext.Provider value={{products, addItem}}>
        <CartContext.Provider value={cart}>
			    <Navigation/>

			    {/* Routes */}
			    <Route exact path="/">
				    <Products/>
			    </Route>

			    <Route path="/cart">
				    <ShoppingCart makeRemoveItem={makeRemoveItem}/>
			    </Route>
        </CartContext.Provider>
      </ProductContext.Provider>
		</div>
	);
}

export default App;
