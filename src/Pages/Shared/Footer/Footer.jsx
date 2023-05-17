import { Link } from "react-router-dom";
import logo from "../../../../public/image/globalfreakslogo1-svg.jpg";
import instagram from "../../../../public/icons/insta.png";
import fb from "../../../../public/icons/fb.png";
import twitter from "../../../../public/icons/twitter.png";
import yt from "../../../../public/icons/yt.png";
const Footer = () => {
  const help = (
    <>
      <li className="pb-1 text-sm">
        <Link>Instalment payment</Link>
      </li>
      <li className="pb-1 text-sm">
        <Link> Free shipping</Link>
      </li>
      <li className="pb-1 text-sm">
        <Link>Global Coins</Link>
      </li>
      <li className="pb-1 text-sm">
        <Link>What is a Pre-Order?</Link>
      </li>
      <li className="pb-1 text-sm">
        <Link>Payment methods</Link>
      </li>
      <li className="pb-1 text-sm">
        <Link>Return</Link>
      </li>
      <li className="pb-1 text-sm">
        <Link>Contact us</Link>
      </li>
    </>
  );
  const information = (
    <>
      <li className="pb-1 text-sm">
        <Link> Terms and Conditions of Use</Link>
      </li>
      <li className="pb-1 text-sm">
        <Link>Legal Notice</Link>
      </li>
      <li className="pb-1 text-sm">
        <Link> Cookie Policy</Link>
      </li>
      <li className="pb-1 text-sm">
        <Link>Privacy Policy</Link>
      </li>
      <li className="pb-1 text-sm">
        <Link>More information on Privacy</Link>
      </li>
    </>
  );
  const headquarters = (
    <>
      <li className="pb-1 text-sm">
        <Link>+34 621 29 49 75 (SOLO/ONLY WHATSAPP)</Link>
      </li>
      <li className="pb-1 text-sm">
        <Link>info@arashi-figures.com</Link>
      </li>
      <li>
        Arashi Figures <br /> C/ Gran KochuKhet 35-37, Nave 1-A <br /> 08700
        Mirpur <br /> Dhaka <br />
        Bangladesh
      </li>
    </>
  );
  return (
    <footer className="bg-black w-full px-20 text-white relative bottom-0">
      <div>
        <div className="grid grid-cols-3 py-8 items-center gap-40">
          <div className="flex items-center py-4 gap-3">
            <div className="border-2 w-[90px] border-white rounded-full">
              <img
                src={logo}
                className="h-20 p-2 invert brightness-[20]"
                alt=""
              />
            </div>
            <span className="text-white text-3xl">
              <span className=" font-bold">Arashi</span> Figures
            </span>
          </div>
          <div className="col-span-2">
            <h5 className="text-4xl font-bold pb-2">
              Sign up for our newsletter
            </h5>
            <p className="text-xl">
              and receive the latest news and special offers about our products.
            </p>
            <input
              type="email"
              className="w-[70%] py-3 bg-black border-2 border-orange-600 mt-4 rounded-3xl"
            />
            <button className="uppercase text-lg font-medium  bg-red-600 py-[14px] px-7 rounded-3xl relative right-36">
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 pb-8">
          <div>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">Help</h2>
            <ul>{help}</ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              {" "}
              Information
            </h2>
            <ul>{information}</ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              Headquarters
            </h2>
            <ul>{headquarters}</ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              Follow Us
            </h2>
            <div className="flex gap-8">
              <a href="https://facebook.com">
                <img className="rounded w-7 mr-4" src={fb} alt="" />
              </a>
              <a href="https://instagram.com">
                <img className="rounded w-7 mr-4" src={instagram} alt="" />
              </a>
              <a href="https://twitter.com">
                <img className="rounded w-7 mr-4" src={twitter} alt="" />
              </a>
              <a href="https://youtube.com">
                <img className="rounded w-7" src={yt} alt="" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center pb-4 text-sm">© 2023 - Arashi Figures</p>
      </div>
    </footer>
  );
};

export default Footer;
