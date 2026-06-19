import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import womenBanner from "../assets/women-banner.jpg";
import menBanner from "../assets/men-banner.jpg";
import jewelryBanner from "../assets/jewelry-banner.gif";

function Products(props)
{
  const [openCollections, setOpenCollections] = useState({
    women: false,
    men: false,
    jewelry: false
  });
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

  const toggleCollection = (collection) => {
    setOpenCollections(currentCollections => ({
      ...currentCollections,
      [collection]: !currentCollections[collection]
    }));
  }

  const renderProducts = (products) => (
    <div className="products-grid">
      {products?.map(product => (
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
  );

  const renderCollectionProducts = (collection, products, children) => (
    <AnimatePresence>
      {openCollections[collection] && (
        <motion.div
          className="collection-products"
          initial={{height: 0, opacity: 0}}
          animate={{height: "auto", opacity: 1}}
          exit={{height: 0, opacity: 0}}
          transition={{duration: 0.45, ease: "easeInOut"}}
        >
          {renderProducts(products)}
          {children}
        </motion.div>
      )}
    </AnimatePresence>
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
        <h2>Women</h2>
        <p className="section-description">
          Modern silhouettes designed for effortless elegance.
        </p>
        <div className="collection-banner-wrap">
          <img
            className="collection-banner"
            src={womenBanner}
            alt="Women's Collection"
          />
          <button
            className="collection-toggle-button"
            type="button"
            onClick={() => toggleCollection('women')}
          >
            {openCollections.women ? 'Hide collection' : 'View collection'}
          </button>
        </div>

        {renderCollectionProducts('women', visibleWomensProducts, (
          womensProducts?.length > 4 && (
            <button
              className="show-more-button"
              type="button"
              onClick={() => setShowAllWomensProducts(!showAllWomensProducts)}
            >
              {showAllWomensProducts ? 'Show less' : 'Show more'}
            </button>
          )
        ))}
      </section>

      <section className="product-section">
        <h2>Men</h2>
        <p className="section-description">
          Refined essentials crafted for everyday wear.
        </p>
        <div className="collection-banner-wrap">
          <img
            className="collection-banner"
            src={menBanner}
            alt="Men's Collection"
          />
          <button
            className="collection-toggle-button"
            type="button"
            onClick={() => toggleCollection('men')}
          >
            {openCollections.men ? 'Hide collection' : 'View collection'}
          </button>
        </div>

        {renderCollectionProducts('men', mensProducts)}
      </section>

      <section className="product-section">
        <h2>Jewelry</h2>
        <p className="section-description">
          Statement pieces designed to elevate every look.
        </p>
        <div className="collection-banner-wrap">
          <img
            className="collection-banner"
            src={jewelryBanner}
            alt="Jewelry Collection"
          />
          <button
            className="collection-toggle-button"
            type="button"
            onClick={() => toggleCollection('jewelry')}
          >
            {openCollections.jewelry ? 'Hide collection' : 'View collection'}
          </button>
        </div>

        {renderCollectionProducts('jewelry', jewelryProducts)}
      </section>
    </section>
  );
}

export default Products;
