function Home()
{
  const categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing"
  ];

  return(
    <>
      <h1>Home</h1>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;
