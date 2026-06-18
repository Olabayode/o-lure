import { Link } from 'react-router-dom';

function SecondaryBanner()
{
  return(
    <section className="secondary-banner">
      <div>
        <p>Trending now</p>
        <h2>Jewelery</h2>
        <span>Discover standout pieces from this featured category.</span>
      </div>
      <Link to="/o-lure/products">Shop category</Link>
    </section>
  );
}

export default SecondaryBanner;
