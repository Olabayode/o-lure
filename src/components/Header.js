import { NavLink } from 'react-router-dom';

function Header()
{
  return(
    <header className="site-header">

    <div className="logo">
      O-LURE
    </div>

    <nav className="main-nav">
      <NavLink to="/o-lure/">Home</NavLink>
      <NavLink to="/o-lure/products">Shop</NavLink>
      <NavLink to="/o-lure/search">Search</NavLink>
      <NavLink to="/o-lure/cart">Cart</NavLink>
    </nav>

</header>
  );
}

export default Header;
