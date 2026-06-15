function SearchProducts(props)
{
  return(
    <>
      <ul>
        {props.products.map(link => (
          <li key={link.id}>
            <p>{link.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchProducts;