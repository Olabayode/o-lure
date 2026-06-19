import { Link } from 'react-router-dom';

function Footer()
{
  return(
    <footer className="site-footer">

      <div className="footer-brand">
        <h2>O-LURE</h2>
        <p>
          Timeless fashion designed for everyday elegance.
        </p>
      </div>

      <div>
        <h3>Shop</h3>
        <Link to="/o-lure/products">New Arrivals</Link>
        <Link to="/o-lure/products">Women</Link>
        <Link to="/o-lure/products">Men</Link>
      </div>

      <div>
        <h3>Support</h3>
        <a href="/">Shipping</a>
        <a href="/">Returns</a>
        <a href="/">Contact</a>
      </div>

      <div>
        <h3>Follow</h3>
        <a href="/">Instagram</a>
        <a href="/">Pinterest</a>
        <a href="/">TikTok</a>
      </div>

    </footer>
  );
}

export default Footer;