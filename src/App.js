import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  const [products, setProducts] = useState(null);
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

  return (
    <>
      <Routes>
        <Route exact path='/o-lure/' element={<Home />} />
        <Route exact path='/o-lure/search' element={<Search products={products} setProducts={setProducts} />} />
      </Routes>
    </>
  );
}

export default App;