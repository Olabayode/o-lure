import SearchProducts from "../components/SearchProducts";

function Search(props)
{
  return(
    <>
      <SearchProducts products={props.products} addToCart={props.addToCart} />
    </>
  );
}

export default Search;
