import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
                <button className="hero-button">
                  Shop Now
                </button>
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
