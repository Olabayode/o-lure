import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function SearchProducts(props)
{
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [sortedProducts, setSortedProducts] = useState([]);

  const initialQuery = searchParams.get('query') || '';

  useEffect(() => {
    const randomizedProducts = [...(props.products || [])]
      .filter(product => product.category !== "electronics")
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);

    setSortedProducts(randomizedProducts);
  }, [props.products]);

  useEffect(() => {
    if (query !== initialQuery)
    {
      setSearchParams(
        { query: query || '' },
        { replace: true }
      );
    }
  }, [query, initialQuery, setSearchParams]);

  const sort = (criteria) => {
    let sortedArray = [...sortedProducts];

    if (criteria === 'Title')
    {
      sortedArray.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }
    else if (criteria === 'Price')
    {
      sortedArray.sort((a, b) =>
        a.price - b.price
      );
    }

    setSortedProducts(sortedArray);
  };

  return(
    <section className="search-page">

      <div className="search-header">

        <p>DISCOVER</p>

        <h1>Search Collection</h1>

        <span>
          Explore curated pieces across women, men and jewelry.
        </span>

      </div>

      <div className="search-controls">

        <input
          className="search-input"
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(event) =>
            setQuery(event.target.value)
          }
        />

        <button
          type="button"
          onClick={() => sort('Title')}
        >
          Sort A–Z
        </button>

        <button
          type="button"
          onClick={() => sort('Price')}
        >
          Sort by Price
        </button>

      </div>

      <h2 className="trending-products-title">Trending Products</h2>

      {/* <p className="search-count">
        {sortedProducts
          ?.filter(product =>
            product.title
              .toLowerCase()
              .includes(query.toLowerCase())
          ).length}
        {' '}results
      </p> */}

      <div className="search-results">

        {sortedProducts
            ?.filter(product =>
              product.title
                .toLowerCase()
                .includes(query.toLowerCase())
            )
            .map(product => (

            <article
              className="search-card"
              key={product.id}
            >

              <Link
                className="search-card-link"
                to={`/o-lure/products/${product.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="search-image">

                  <img
                    src={product.image}
                    alt={product.title}
                  />

                </div>

                {/* <p className="search-category">
                  {product.category}
                </p> */}

                <h3>
                  {product.title.split(' ').slice(0, 4).join(' ')}
                </h3>

                <p className="search-price">
                  ${product.price}
                </p>
              </Link>

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
  );
}

export default SearchProducts;
