import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";  
import Features from "../components/Features";


function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Categories />
      <FeaturedProducts />
    </div>
  );
}       
export default Home;