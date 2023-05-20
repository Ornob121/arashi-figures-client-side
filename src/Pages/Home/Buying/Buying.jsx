import buy1 from "../../../../public/buying/buy1.svg";
import buy2 from "../../../../public/buying/buy2.svg";
import buy3 from "../../../../public/buying/buy3.svg";
const Buying = () => {
  return (
    <div className="mt-16 pb-8 bg-[#F3F3F3] px-20">
      <h5 className="text-3xl font-bold text-red-400 text-center pt-12 pb-3">
        How To Buy?
      </h5>
      <h3 className="text-center text-green-500 font-medium text-2xl pb-6 capitalize">
        Buying from us has never been more simple
      </h3>
      <div className="grid grid-cols-3">
        <div className="pb-10">
          <img src={buy1} className="mx-auto" alt="" />
          <p className="text-center text-lg font-bold">Tell us what to buy</p>
          <p className="text-center text-lg font-medium">
            First Select The Item You Want To Buy
          </p>
        </div>
        <div className="pb-10">
          <img src={buy2} className="mx-auto" alt="" />
          <p className="text-center text-lg font-bold">Check Out</p>
          <p className="text-center text-lg font-medium capitalize">
            Sign-in to checkout. It’s so simple.
          </p>
        </div>
        <div className="pb-10">
          <img src={buy3} className="mx-auto" alt="" />
          <p className="text-center text-lg font-bold">We ship your package</p>
          <p className="text-center text-lg font-medium capitalize">
            Select a shipping method. Combine packages and save
          </p>
        </div>
      </div>
    </div>
  );
};

export default Buying;
