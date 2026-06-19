import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import heroBannerImage from '../assets/heroBanner.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function HeroBanner(props)
{
  const featuredProducts = (props.products || []).slice(0, 6);

  if (!props.products)
  {
    return(
      <section className="hero-banner">
        <p>Loading featured products...</p>
      </section>
    );
  }

  return(
    <section className="hero-banner">
      <div
        className="hero-brand-banner"
        style={{'--hero-banner-image': `url(${heroBannerImage})`}}
      >
        <div className="hero-brand-content">
          <h1>
            <span>O</span>-LURE
          </h1>
          <p>Confidence Wears O-LURE</p>
          <div className="hero-brand-actions">
            <button type="button">About Us</button>
            <Link to="/o-lure/products">Shop Now</Link>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{clickable: true}}
        autoplay={{delay: 3000, disableOnInteraction: false}}
        loop={featuredProducts.length > 1}
      >
        {featuredProducts.map(product => (
          <SwiperSlide key={product.id}>
            <div className="hero-slide">
              <div>
                <h2>{product.title}</h2>
                <p>{product.category}</p>
                <strong>${product.price}</strong>
                <Link className="hero-button" to={`/o-lure/products/${product.id}`}>
                  Shop Now
                </Link>
              </div>
              <img src={product.image} alt={product.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroBanner;
