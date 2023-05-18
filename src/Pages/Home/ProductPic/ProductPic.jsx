import "react-tabs/style/react-tabs.css";
const ProductPic = () => {
  return (
    <div className="mt-10 px-20">
      <h3 className="text-center text-3xl font-semibold text-green-800">
        Here Are Some Of Our Product Images
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <img
          className="w-[500px] h-[400px] shadow-md rounded-md"
          src="https://i.ibb.co/dL31dYb/img1.jpg"
          alt=""
        />
        <img
          className="w-[500px] h-[400px] shadow-md rounded-md"
          src="https://i.ibb.co/RcdkPWN/img2.png"
          alt=""
        />
        <img
          className="w-[500px] h-[400px] shadow-md rounded-md"
          src="https://i.ibb.co/BnnXKXs/img3.jpg"
          alt=""
        />
        <img
          className="w-[500px] h-[400px] shadow-md rounded-md"
          src="https://i.ibb.co/jHFtwRp/img4.jpg"
          alt=""
        />
        <img
          className="w-[500px] h-[400px] shadow-md rounded-md"
          src="https://i.ibb.co/2h7sRyd/img5.jpg"
          alt=""
        />
        <img
          className="w-[500px] h-[400px] shadow-md rounded-md"
          src="https://i.ibb.co/KWvMLSy/img6.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductPic;
