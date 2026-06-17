import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

function SearchProducts(props)
{
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [sortedProducts, setSortedProducts] = useState();
  const initialQuery = searchParams.get('query') || '';

  useEffect(() => {
    setSortedProducts(props.products);
  }, []);

  useEffect(() => {
    if (query !== initialQuery)
    {
      setSearchParams({query: query || ''}, {replace: true});
    }
  }, [initialQuery, query, setSearchParams]);

  const sort = (criteria) => {
    console.log(sortedProducts);
    let sortedArray = [...sortedProducts];
    if (criteria === 'Title')
    {
      sortedArray.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (criteria === 'Price')
    {
      sortedArray.sort((a, b) => a.price - b.price);
    }
    else 
    {
      sortedArray.sort((a, b) => a.id - b.id);
    }
    setSortedProducts(sortedArray);
  }

  return(
    <>
      <div>
        <input 
          type='text'
          placeholder='Search products...'
          value={query}
          onChange={event => {
            setQuery(event.target.value);
          }}
        />
        <input 
          type='button' 
          value='Title'
          onClick={event => {
            sort(event.target.value);
          }}
        /><input 
          type='button' 
          value='Price'
          onClick={event => {
            sort(event.target.value);
          }}
        />
      </div>
      <ul>
        {sortedProducts?.sort((a, b) => a.sortBy - b.sortBy).filter(p => p?.title.toLowerCase().includes(query?.toLowerCase())).map(link => (
          <li key={link.id}>
            <p>{link.title} ${link.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchProducts;