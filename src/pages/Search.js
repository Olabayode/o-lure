import SearchProducts from "../components/SearchProducts";

function Search(props)
{
  return(
    <>
      <SearchProducts products={props.products} />
    </>
  );
}

export default Search;