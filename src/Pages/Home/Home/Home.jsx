import Banner from "../Banner/Banner";
import ProductPic from "../ProductPic/ProductPic";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <div className="my-12">
      <Banner></Banner>
      <ProductPic></ProductPic>
      <ShopByCategory></ShopByCategory>
    </div>
  );
};

export default Home;
