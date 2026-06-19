import HeroBanner from "../components/HeroBanner";
import SecondaryBanner from "../components/SecondaryBanner";
import jewelryImage from "../assets/j2.jpg";
import mensClothingImage from "../assets/pcM.jpg";
import womensClothingImage from "../assets/pc1.jpg";

function Home(props)
{
  const categories = [
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
