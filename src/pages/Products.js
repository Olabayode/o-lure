function Products(props)
{
  const groupedProducts = (props.products || []).reduce((groups, product) => {
    const category = product.category;

    if (!groups[category])
    {
      groups[category] = [];
    }

    groups[category].push(product);
    return groups;
  }, {});

  return(
    <>
      <h1>Products</h1>
      {props.products ? (
        Object.keys(groupedProducts).map(category => (
          <details key={category}>
            <summary>{category}</summary>
            <ul>
              {groupedProducts[category].map(product => (
                <li key={product.id}>
                  <p>{product.title} ${product.price}</p>
                  <button type="button" onClick={() => props.addToCart(product)}>Add</button>
                </li>
              ))}
            </ul>
          </details>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </>
  );
}

export default Products;
