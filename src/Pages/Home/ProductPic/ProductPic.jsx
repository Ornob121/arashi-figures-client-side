import "react-tabs/style/react-tabs.css";
const ProductPic = () => {
  return (
    <div className="mt-20 md:px-20">
      <h3 className="text-center text-3xl font-semibold text-green-800">
        Here Are Some Of Our Product Images
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div data-aos="slide-down" data-aos-delay="200" className=" mx-auto">
          <img
            className="w-[500px] h-[400px] shadow-md rounded-md"
            src="https://i.ibb.co/dL31dYb/img1.jpg"
            alt=""
          />
        </div>
        <div data-aos="slide-down" data-aos-delay="200" className=" mx-auto">
          <img
            className="w-[500px] h-[400px] shadow-md rounded-md"
            src="https://i.ibb.co/RcdkPWN/img2.png"
            alt=""
          />
        </div>
        <div data-aos="slide-down" data-aos-delay="200" className=" mx-auto">
          <img
            className="w-[500px] h-[400px] shadow-md rounded-md"
            src="https://i.ibb.co/BnnXKXs/img3.jpg"
            alt=""
          />
        </div>
        <div data-aos="slide-up" data-aos-delay="400" className=" mx-auto">
          <img
            className="w-[500px] h-[400px] shadow-md rounded-md"
            src="https://i.ibb.co/jHFtwRp/img4.jpg"
            alt=""
          />
        </div>
        <div data-aos="slide-up" data-aos-delay="300" className=" mx-auto">
          <img
            className="w-[500px] h-[400px] shadow-md rounded-md"
            src="https://i.ibb.co/2h7sRyd/img5.jpg"
            alt=""
          />
        </div>
        <div data-aos="slide-up" data-aos-delay="400" className=" mx-auto">
          <img
            className="w-[500px] h-[400px] shadow-md rounded-md"
            src="https://i.ibb.co/KWvMLSy/img6.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPic;
