// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import BookList from './components/BookList/BookList';
import CartProvider from './context/useCartContext';
import Carrinho from './components/Carrinho/Carrinho';
import Search from './components/SearchBar/SearchBar';
import { AiOutlineShoppingCart } from 'react-icons/ai';



function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleOpen = () => {
    setIsCartOpen(true);
  };

  const handleClose = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <CartProvider>
        <div className='header bookshop'>
          <Search search={search} setSearch={setSearch}/>
          <h1 className=''>Bookshop</h1>
          <button type="button" className="cart_button" onClick={handleOpen}>
            <AiOutlineShoppingCart/>
          </button>
        </div>

      <BookList search={search} setSearch={setSearch}/>
      {isCartOpen && <Carrinho handleClose={handleClose} />}
      </CartProvider>
    </div>
  );
}

export default App