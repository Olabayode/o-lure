import { Link } from 'react-router-dom';
import campaignImage from '../assets/pinFash1.jpg';

function SecondaryBanner()
{
  return(
    <section
      className="campaign-banner"
      style={{
        backgroundImage: `url(${campaignImage})`
      }}
    >
      <div className="campaign-overlay">

        <p>NEW COLLECTION</p>

        <h2>Summer Essentials</h2>

        <span>
          Elevated pieces designed for every occasion.
        </span>

        <Link to="/o-lure/products">
          Discover Collection
        </Link>

      </div>
    </section>
  );
}

export default SecondaryBanner;