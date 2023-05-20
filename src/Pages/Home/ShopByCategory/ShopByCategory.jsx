import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { toast } from "react-toastify";
import { AuthContext } from "../../../provider/AuthProvider";

const ShopByCategory = () => {
  const toys = useLoaderData();
  const [filteredToys, setFilteredToys] = useState([]);
  //   console.log(toys);
  const { user } = useContext(AuthContext);

  //! Use to filter the data of the toys
  const [subCategoryFilteredText, setSubCategoryFilteredText] =
    useState("One Piece");

  //! Filtering the data according to category
  useEffect(() => {
    const filteredToys = toys.filter(
      (toy) => toy.subcategory === subCategoryFilteredText
    );
    setFilteredToys(filteredToys);
  }, [toys, subCategoryFilteredText]);

  console.log(filteredToys);
  //   ! Use navigate
  const navigate = useNavigate();
  return (
    <div className="px-20 my-16">
      <h2 className="text-center text-4xl font-semibold text-green-600 mb-10">
        Shop By Category
      </h2>
      <div>
        <Tabs forceRenderTabPanel defaultIndex={1}>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab onClick={() => setSubCategoryFilteredText("One Piece")}>
                One Piece
              </Tab>
              <Tab
                onClick={() => setSubCategoryFilteredText("Attack on Titan")}
              >
                Attack On Titan
              </Tab>
              <Tab
                onClick={() => setSubCategoryFilteredText("Hunter x Hunter")}
              >
                Hunter X Hunter
              </Tab>
              <Tab onClick={() => setSubCategoryFilteredText("Bleach")}>
                Bleach
              </Tab>
              <Tab onClick={() => setSubCategoryFilteredText("Jujutsu Kaisen")}>
                Jujutsu Kaisen
              </Tab>
              <Tab onClick={() => setSubCategoryFilteredText("Naruto")}>
                Naruto
              </Tab>
            </TabList>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {filteredToys.map((toy) => (
                  <div
                    key={toy._id}
                    className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke] h-[450px] relative"
                  >
                    <img
                      src={toy.image}
                      data-aos="zoom-in"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="300"
                      className="w-52 mx-auto h-52"
                      alt=""
                    />
                    <h2
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="500"
                      className="text-center text-2xl font-semibold text-green-700 mb-6"
                    >
                      {toy.name}
                    </h2>
                    <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                      <span
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="300"
                      >
                        <span className="text-lg font-medium">
                          Price: ${toy.price}
                        </span>
                        <br />
                        <span>Rating:{toy.rating}</span>
                        <span>
                          <Rating
                            style={{ maxWidth: 100 }}
                            value={toy?.rating || 0}
                            readOnly
                          />
                        </span>
                      </span>
                      <button
                        onClick={() => {
                          navigate(`/toyDetails/${toy._id}`);
                          if (!user) {
                            toast("You Have To login first");
                          }
                        }}
                        data-aos="zoom-out"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="300"
                        className="text-xl font-bold bg-green-500 py-2 px-4 rounded-md text-white"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {filteredToys.map((toy) => (
                  <div
                    key={toy._id}
                    className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke] h-[450px] relative"
                  >
                    <img
                      src={toy.image}
                      data-aos="zoom-in"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="300"
                      className="w-52 mx-auto h-52"
                      alt=""
                    />
                    <h2
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="500"
                      className="text-center text-2xl font-semibold text-green-700 mb-6"
                    >
                      {toy.name}
                    </h2>
                    <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                      <span
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="300"
                      >
                        <span className="text-lg font-medium">
                          Price: ${toy.price}
                        </span>
                        <br />
                        <span>Rating:{toy.rating}</span>
                        <span>
                          <Rating
                            style={{ maxWidth: 100 }}
                            value={toy?.rating || 0}
                            readOnly
                          />
                        </span>
                      </span>
                      <button
                        onClick={() => {
                          navigate(`/toyDetails/${toy._id}`);
                          if (!user) {
                            toast("You Have To login first");
                          }
                        }}
                        data-aos="zoom-out"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="300"
                        className="text-xl font-bold bg-green-500 py-2 px-4 rounded-md text-white"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {filteredToys.map((toy) => (
                  <div
                    key={toy._id}
                    className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke] h-[450px] relative"
                  >
                    <img
                      src={toy.image}
                      data-aos="zoom-in"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="300"
                      className="w-52 mx-auto h-52"
                      alt=""
                    />
                    <h2
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="500"
                      className="text-center text-2xl font-semibold text-green-700 mb-6"
                    >
                      {toy.name}
                    </h2>
                    <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                      <span
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="300"
                      >
                        <span className="text-lg font-medium">
                          Price: ${toy.price}
                        </span>
                        <br />
                        <span>Rating:{toy.rating}</span>
                        <span>
                          <Rating
                            style={{ maxWidth: 100 }}
                            value={toy?.rating || 0}
                            readOnly
                          />
                        </span>
                      </span>
                      <button
                        onClick={() => {
                          navigate(`/toyDetails/${toy._id}`);
                          if (!user) {
                            toast("You Have To login first");
                          }
                        }}
                        data-aos="zoom-out"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="300"
                        className="text-xl font-bold bg-green-500 py-2 px-4 rounded-md text-white"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {filteredToys.map((toy) => (
                  <div
                    key={toy._id}
                    className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke] h-[450px] relative"
                  >
                    <img
                      src={toy.image}
                      data-aos="zoom-in"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="300"
                      className="w-52 mx-auto h-52"
                      alt=""
                    />
                    <h2
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="500"
                      className="text-center text-2xl font-semibold text-green-700 mb-6"
                    >
                      {toy.name}
                    </h2>
                    <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                      <span
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="300"
                      >
                        <span className="text-lg font-medium">
                          Price: ${toy.price}
                        </span>
                        <br />
                        <span>Rating:{toy.rating}</span>
                        <span>
                          <Rating
                            style={{ maxWidth: 100 }}
                            value={toy?.rating || 0}
                            readOnly
                          />
                        </span>
                      </span>
                      <button
                        onClick={() => {
                          navigate(`/toyDetails/${toy._id}`);
                          if (!user) {
                            toast("You Have To login first");
                          }
                        }}
                        data-aos="zoom-out"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="300"
                        className="text-xl font-bold bg-green-500 py-2 px-4 rounded-md text-white"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {filteredToys.map((toy) => (
                  <div
                    key={toy._id}
                    className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke] h-[450px] relative"
                  >
                    <img
                      src={toy.image}
                      data-aos="zoom-in"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="300"
                      className="w-52 mx-auto h-52"
                      alt=""
                    />
                    <h2
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="500"
                      className="text-center text-2xl font-semibold text-green-700 mb-6"
                    >
                      {toy.name}
                    </h2>
                    <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                      <span
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="300"
                      >
                        <span className="text-lg font-medium">
                          Price: ${toy.price}
                        </span>
                        <br />
                        <span>Rating:{toy.rating}</span>
                        <span>
                          <Rating
                            style={{ maxWidth: 100 }}
                            value={toy?.rating || 0}
                            readOnly
                          />
                        </span>
                      </span>
                      <button
                        onClick={() => {
                          navigate(`/toyDetails/${toy._id}`);
                          if (!user) {
                            toast("You Have To login first");
                          }
                        }}
                        data-aos="zoom-out"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="300"
                        className="text-xl font-bold bg-green-500 py-2 px-4 rounded-md text-white"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {filteredToys.map((toy) => (
                  <div
                    key={toy._id}
                    className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke] h-[450px] relative"
                  >
                    <img
                      src={toy.image}
                      data-aos="zoom-in"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="300"
                      className="w-52 mx-auto h-52"
                      alt=""
                    />
                    <h2
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-delay="500"
                      className="text-center text-2xl font-semibold text-green-700 mb-6"
                    >
                      {toy.name}
                    </h2>
                    <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                      <span
                        data-aos="fade-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="300"
                      >
                        <span className="text-lg font-medium">
                          Price: ${toy.price}
                        </span>
                        <br />
                        <span>Rating:{toy.rating}</span>
                        <span>
                          <Rating
                            style={{ maxWidth: 100 }}
                            value={toy?.rating || 0}
                            readOnly
                          />
                        </span>
                      </span>
                      <button
                        onClick={() => {
                          navigate(`/toyDetails/${toy._id}`);
                          if (!user) {
                            toast("You Have To login first");
                          }
                        }}
                        data-aos="zoom-out"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="300"
                        className="text-xl font-bold bg-green-500 py-2 px-4 rounded-md text-white"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
