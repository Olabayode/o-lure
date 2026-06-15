import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

function SearchProducts(props)
{
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState();
  const initialQuery = searchParams.get('query') || '';

  useEffect(() => {
    if (query !== initialQuery)
    {
      setSearchParams({query: query || ''}, {replace: true});
    }
  }, [initialQuery, query, setSearchParams]);

  return(
    <>
    <div>
      <input 
        type='text'
        placeholder='Search products...'
        value={query}
        onChange={event => {
          setQuery(event.target.value);
          console.log(query);
        }}
      />
      <button type='submit' />
    </div>
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