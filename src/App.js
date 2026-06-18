import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Search from './pages/Search';
import Cart from './pages/Cart';

function App() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const url = "https://fakestoreapi.com/products/";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(url);
        setProducts(response.data);
      }
      catch (error) {
        console.log(error.message);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(currentCart => {
      const itemInCart = currentCart.find(item => item.id === product.id);

      if (itemInCart)
      {
        return currentCart.map(item => (
          item.id === product.id
            ? {...item, quantity: item.quantity + 1}
            : item
        ));
      }

      return [...currentCart, {...product, quantity: 1}];
    });
  }

  const increaseQuantity = (productId) => {
    setCart(currentCart => (
      currentCart.map(item => (
        item.id === productId
          ? {...item, quantity: item.quantity + 1}
          : item
      ))
    ));
  }

  const decreaseQuantity = (productId) => {
    setCart(currentCart => (
      currentCart
        .map(item => (
          item.id === productId
            ? {...item, quantity: item.quantity - 1}
            : item
        ))
        .filter(item => item.quantity > 0)
    ));
  }

  const removeFromCart = (productId) => {
    setCart(currentCart => (
      currentCart.filter(item => item.id !== productId)
    ));
  }

  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/o-lure/' element={<Home products={products} />} />
        <Route exact path='/o-lure/products' element={<Products products={products} addToCart={addToCart} />} />
        <Route exact path='/o-lure/search' element={<Search products={products} setProducts={setProducts} addToCart={addToCart} />} />
        <Route exact path='/o-lure/cart' element={<Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />} />
      </Routes>
    </>
  );
}

export default App;
