import SearchProducts from "./components/SearchProducts";
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products/";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(url);
        console.log('Data from axios:');
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
      <SearchProducts products={products} />
    </>
  );
}

export default App;
