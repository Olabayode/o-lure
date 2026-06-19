import { useState } from "react";
import womenBanner from "../assets/women-banner.jpg";
import menBanner from "../assets/men-banner.jpg";
import jewelryBanner from "../assets/jewelry-banner.gif";

function Products(props)
{
  const [showAllWomensProducts, setShowAllWomensProducts] = useState(false);

  const womensProducts = props.products?.filter(
  product => product.category === "women's clothing"
);

const visibleWomensProducts = showAllWomensProducts
  ? womensProducts
  : womensProducts?.slice(0, 4);

const mensProducts = props.products?.filter(
  product => product.category === "men's clothing"
);

const jewelryProducts = props.products?.filter(
  product => product.category === "jewelery"
);

  return(
    <section className="products-page">

      <section className="products-banner">

        <div className="products-banner-content">

          <p>SPRING / SUMMER 2026</p>

          <h1>Collections</h1>

          <span>
            Refined pieces designed for effortless everyday elegance.
          </span>

        </div>

      </section>

     <section className="product-section">

  <>
  <h2>Women</h2>

      <img
        className="collection-banner"
        src={womenBanner}
        alt="Women's Collection"
      />

  <p className="section-description">
    Modern silhouettes designed for effortless elegance.
  </p>
  </>

  <div className="products-grid">

    {visibleWomensProducts?.map(product => (
      <article className="product-card" key={product.id}>

        <div className="product-image">
          <img
            src={product.image}
            alt={product.title}
          />
        </div>

        <h3>{product.title.split(' ').slice(0, 3).join(' ')}</h3>

        <p className="product-price">
          ${product.price}
        </p>

        <button
          type="button"
          onClick={() => props.addToCart(product)}
        >
          Add to Cart
        </button>

      </article>
    ))}
    

      </div>

      {womensProducts?.length > 4 && (
        <button
          className="show-more-button"
          type="button"
          onClick={() => setShowAllWomensProducts(!showAllWomensProducts)}
        >
          {showAllWomensProducts ? 'Show less' : 'Show more'}
        </button>
      )}

    </section>

    <section className="product-section">

  <>
    <h2>Men</h2>

    <img
      className="collection-banner"
      src={menBanner}
      alt="Men's Collection"
    />

    <p className="section-description">
      Refined essentials crafted for everyday wear.
    </p>
  </>

      <div className="products-grid">

    
    {mensProducts?.map(product => (
      <article className="product-card" key={product.id}>

        <div className="product-image">
          <img
            src={product.image}
            alt={product.title}
          />
        </div>

        <h3>{product.title.split(' ').slice(0, 3).join(' ')}</h3>

        <p className="product-price">
          ${product.price}
        </p>

        <button
          type="button"
          onClick={() => props.addToCart(product)}
        >
          Add to Cart
        </button>

      </article>
    ))}
    

      </div>

    </section>

    <section className="product-section">

    <>
      <h2>Jewelry</h2>

      <img
        className="collection-banner"
        src={jewelryBanner}
        alt="Jewelry Collection"
      />

      <p className="section-description">
        Statement pieces designed to elevate every look.
      </p>
    </>

      <div className="products-grid">

    
    {jewelryProducts?.map(product => (
      <article className="product-card" key={product.id}>

        <div className="product-image">
          <img
            src={product.image}
            alt={product.title}
          />
        </div>

        <h3>{product.title.split(' ').slice(0, 3).join(' ')}</h3>

        <p className="product-price">
          ${product.price}
        </p>

        <button
          type="button"
          onClick={() => props.addToCart(product)}
        >
          Add to Cart
        </button>

      </article>
    ))}
    

      </div>

    </section>


    </section>
  );
}

export default Products;
