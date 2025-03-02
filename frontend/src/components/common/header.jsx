import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Marketplace</Link>
        <SearchBar />
        <nav className="flex gap-4">
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};