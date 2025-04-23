import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-slate-100">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-9 px-4 py-5 xl:px-0">
        <Link to="/">
          <img className="w-32" src="/src/assets/Logo.png" alt="Logo" />
        </Link>

        <form className="order-3 mx-auto flex w-full max-w-96 items-center gap-4 rounded-full bg-white px-4 py-3 sm:order-2">
          <FaSearch className="h-5 w-5 text-gray-500" />
          <input
            className="w-full text-sm outline-none"
            type="text"
            placeholder="Search for products..."
          />
        </form>

        <FaShoppingCart className="h-6 w-6 text-gray-700 sm:order-3" />
      </div>
    </header>
  );
}

export default Header;
