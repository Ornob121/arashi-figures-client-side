import buy1 from "../../../../public/buying/buy1.svg";
import buy2 from "../../../../public/buying/buy2.svg";
import buy3 from "../../../../public/buying/buy3.svg";
const Buying = () => {
  return (
    <div className="mt-16 bg-[#F3F3F3] px-20">
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
      <div>
        <h4 className="text-center font-thin text-3xl tracking-wide pb-2">
          Subscribe to our mailing list
        </h4>
        <p className="text-center">
          Receive updates on new arrivals, special offers and other discount
          information.
        </p>
        <div className=" w-[60%] py-4 mx-auto">
          <input
            type="email"
            required
            className="bg-[#F3F3F3] border-b text-center outline-0 border-[#D4D4D4] w-full py-2 text-lg"
            name="email"
            placeholder="Your Email"
            id=""
          />
        </div>
        <div className="mx-auto text-center pt-2">
          <button className="px-7 mb-16 py-3 text-sm font-semibold uppercase border border-black hover:bg-green-500 hover:text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buying;
