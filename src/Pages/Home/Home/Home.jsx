import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Buying from "../Buying/Buying";
import ProductPic from "../ProductPic/ProductPic";
import Review from "../Review/Review";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  useTitle("| Home");
  return (
    <div className="mt-12">
      <Banner></Banner>
      <ProductPic></ProductPic>
      <ShopByCategory></ShopByCategory>
      <Review></Review>
      <Buying></Buying>
    </div>
  );
};

export default Home;
