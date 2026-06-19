import { Link, useNavigate, useParams } from "react-router-dom";

function ProductDetails(props)
{
  const params = useParams();
  const navigate = useNavigate();
  const product = props.products?.find(item => (
    item.id === Number(params.productId)
  ));

  if (!props.products)
  {
    return(
      <section className="product-details-page">
        <p>Loading product...</p>
      </section>
    );
  }

  if (!product)
  {
    return(
      <section className="product-details-page">
        <h1>Product not found</h1>
        <Link to="/o-lure/products">Back to products</Link>
      </section>
    );
  }

  const similarProducts = props.products
    .filter(item => (
      item.category === product.category && item.id !== product.id
    ))
    .slice(0, 3);

  return(
    <section className="product-details-page">
      <button
        className="back-link"
        type="button"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <div className="product-details-layout">
        <div className="product-details-media">
          <div className="product-details-image">
            <img src={product.image} alt={product.title} />
          </div>
          <button
            type="button"
            onClick={() => props.addToCart(product)}
          >
            Add to Cart
          </button>
        </div>

        <div className="product-details-info">
          <p className="product-details-category">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="product-details-price">${product.price}</p>
          <p className="product-details-description">{product.description}</p>

          <div className="product-rating">
            <span>Rating</span>
            <strong>{product.rating.rate} / 5⭐️</strong>
            <p>{product.rating.count} reviews</p>
          </div>
        </div>
      </div>

      {similarProducts.length > 0 && (
        <section className="similar-products">
          <h2>Similar Products</h2>
          <div className="similar-products-grid">
            {similarProducts.map(item => (
              <article className="product-card" key={item.id}>
                <Link
                  className="product-card-link"
                  to={`/o-lure/products/${item.id}`}
                >
                  <div className="product-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h3>{item.title.split(' ').slice(0, 3).join(' ')}</h3>
                  <p className="product-price">${item.price}</p>
                </Link>
                <button
                  type="button"
                  onClick={() => props.addToCart(item)}
                >
                  Add to Cart
                </button>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

export default ProductDetails;
