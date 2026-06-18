import HeroBanner from "../components/HeroBanner";
import SecondaryBanner from "../components/SecondaryBanner";
import electronicsImage from "../assets/electronics.avif";
import jewelryImage from "../assets/jewelry.avif";
import mensClothingImage from "../assets/mens clothing.avif";
import womensClothingImage from "../assets/womens clothing.avif";

function Home(props)
{
  const categories = [
    {
      name: 'electronics',
      image: electronicsImage
    },
    {
      name: 'jewelery',
      image: jewelryImage
    },
    {
      name: "men's clothing",
      image: mensClothingImage
    },
    {
      name: "women's clothing",
      image: womensClothingImage
    }
  ];

  return(
    <>
      <HeroBanner products={props.products} />
      <SecondaryBanner />
      <section className="category-section">
        <h2>Categories</h2>
        <div className="category-grid">
        {categories.map(category => (
          <article className="category-card" key={category.name}>
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </article>
        ))}
        </div>
      </section>
    </>
  );
}

export default Home;
