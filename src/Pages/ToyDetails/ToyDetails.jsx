import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

//
const ToyDetails = () => {
  const singleToy = useLoaderData();
  console.log(singleToy);
  const {
    image,
    name,
    sellerName,
    sellerEmail,
    details,
    availableQuantity,
    price,
    rating,
  } = singleToy;
  useTitle("| Toy Details");
  return (
    <div className="my-20 grid grid-cols-1 gap-8 md:grid-cols-2 mx-auto md:px-20 items-center">
      <div>
        <img src={image} className="mx-auto max-h-[680px] rounded-xl" alt="" />
      </div>
      <div>
        <h2 className="text-5xl font-semibold mb-12">{name}</h2>
        <p className="text-xl mb-2">
          <span className="font-bold">Seller Name:</span> {sellerName}
        </p>
        <p className="text-xl mb-2">
          <span className="font-bold">Seller Email:</span> {sellerEmail}
        </p>
        <p className="text-xl mb-2">
          <span className="font-bold"> In Stock:</span> {availableQuantity}
        </p>
        <span className="mb-2">
          <Rating style={{ maxWidth: 100 }} value={rating || 0} readOnly />{" "}
          {rating}
        </span>
        <p className="text-3xl mb-2 mt-4 text-green-700">
          <span className="font-bold">Price:</span> ${price}
        </p>
        <p className="text-xl mb-2">{details}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
