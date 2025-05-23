import { useContext, useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

function Header() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);

  function handleSearch(event) {
    event.preventDefault();
    if (inputValue.trim() === '') return null;
    navigate(`?search=${inputValue}`);
    setInputValue('');
  }

  return (
    <header className="bg-slate-100">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-8 px-4 py-5 xl:px-0">
        <Link to="/">
          <img className="w-32" src="/src/assets/Logo.png" alt="Logo" />
        </Link>

        <form
          onSubmit={handleSearch}
          className="order-3 mx-auto flex w-full max-w-96 items-center gap-4 rounded-full bg-white px-4 py-3 sm:order-2"
        >
          <FaSearch className="h-5 w-5 text-gray-500" />
          <input
            className="w-full text-sm outline-none"
            type="text"
            placeholder="Search for products..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </form>

        <Link to={'/cart'} className="relative sm:order-3">
          <div className="absolute right-[-10px] top-[-10px] flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-sm text-white">
            {cartCount}
          </div>
          <FaShoppingCart className="h-7 w-7 text-gray-700" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
