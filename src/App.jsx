import './App.css';
import SearchBar from './components/SearchBar';
import Product from './components/Product';
import { useEffect } from 'react';
import { useCartStore } from './stores/CartStore';
import { useProductsStore } from './stores/ProductsStore';

function App() {
  const cart = useCartStore((state) => state.cart);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const emptyCart = useCartStore((state) => state.emptyCart);
  const products = useProductsStore((state) => state.products);
  const fillProducts = useProductsStore((state) => state.fillProducts);

  // TESTING API FETCH REMOVE WHEN CONSTRUCTING MAIN PRODUCTS LIST COMPONENT
  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();

      if (!ignore) fillProducts(data.products);
    }

    fetchData();

    return () => ignore = true;
  }, []);

  console.log(products);

  return (
    <div id='app'>
      <div id='app-header' className='bg-amber-400 flex w-screen p-3 flex-wrap gap-3 items-center'>
        <h1 className='text-white text-3xl font-bold mr-auto'>JayMart</h1>
        <span id='cart-button' className='text-white'>Check Cart</span>
        <SearchBar />
      </div>
      <div className='w-screen flex p-3 flex-col items-center'>
        <h2 className='text-2xl w-full text-center pt-5 pb-8 border-b border-gray-400'>Welcome to JayMart!</h2>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <footer className='w-screen text-center p-5'>&copy;2026 Jason Fernandez. All rights reserved.</footer>
    </div>
  )
}

export default App
