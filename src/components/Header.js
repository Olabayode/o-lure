import { NavLink } from 'react-router-dom';

function Header()
{
  return(
    <header className="site-header">
      <h1>o-lure</h1>
      <nav>
        <NavLink to="/o-lure/">Home</NavLink>
        <NavLink to="/o-lure/search">Search</NavLink>
        <NavLink to="/o-lure/cart">Cart</NavLink>
      </nav>
    </header>
  );
}

export default Header;
