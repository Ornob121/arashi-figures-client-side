import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ShopByCategory = () => {
  const toys = useLoaderData();
  const [filteredToys, setFilteredToys] = useState(toys);
  //   console.log(toys);

  //! Use to filter the data of the toys
  const [subCategoryFilteredText, setSubCategoryFilteredText] =
    useState("Batman");

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
          <TabList>
            <Tab onClick={() => setSubCategoryFilteredText("One Piece")}>
              Anime
            </Tab>
            <Tab onClick={() => setSubCategoryFilteredText("Batman")}>DC</Tab>
            <Tab onClick={() => setSubCategoryFilteredText("Captain America")}>
              Marvel
            </Tab>
          </TabList>
          <TabPanel>
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
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 mb-6">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                        <div>
                          <p className="text-lg font-medium">
                            Price: ${toy.price}
                          </p>
                          <p>Rating:{toy.rating}</p>
                          <p>
                            <Rating
                              style={{ maxWidth: 100 }}
                              value={toy?.rating || 0}
                              readOnly
                            />
                          </p>
                        </div>
                        <button
                          onClick={() => navigate(`/toyDetails/${toy._id}`)}
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
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 mb-6">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                        <div>
                          <p className="text-lg font-medium">
                            Price: ${toy.price}
                          </p>
                          <p>Rating:{toy.rating}</p>
                          <p>
                            <Rating
                              style={{ maxWidth: 100 }}
                              value={toy?.rating || 0}
                              readOnly
                            />
                          </p>
                        </div>
                        <button
                          onClick={() => navigate(`/toyDetails/${toy._id}`)}
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
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 mb-6">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                        <div>
                          <p className="text-lg font-medium">
                            Price: ${toy.price}
                          </p>
                          <p>Rating:{toy.rating}</p>
                          <p>
                            <Rating
                              style={{ maxWidth: 100 }}
                              value={toy?.rating || 0}
                              readOnly
                            />
                          </p>
                        </div>
                        <button
                          onClick={() => navigate(`/toyDetails/${toy._id}`)}
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
          </TabPanel>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab onClick={() => setSubCategoryFilteredText("Batman")}>
                  Batman
                </Tab>
                <Tab onClick={() => setSubCategoryFilteredText("Superman")}>
                  Superman
                </Tab>
                <Tab onClick={() => setSubCategoryFilteredText("Wonder Women")}>
                  Wonder Women
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
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 mb-6">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                        <div>
                          <p className="text-lg font-medium">
                            Price: ${toy.price}
                          </p>
                          <p>Rating:{toy.rating}</p>
                          <p>
                            <Rating
                              style={{ maxWidth: 100 }}
                              value={toy?.rating || 0}
                              readOnly
                            />
                          </p>
                        </div>
                        <button
                          onClick={() => navigate(`/toyDetails/${toy._id}`)}
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
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 mb-6">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                        <div>
                          <p className="text-lg font-medium">
                            Price: ${toy.price}
                          </p>
                          <p>Rating:{toy.rating}</p>
                          <p>
                            <Rating
                              style={{ maxWidth: 100 }}
                              value={toy?.rating || 0}
                              readOnly
                            />
                          </p>
                        </div>
                        <button
                          onClick={() => navigate(`/toyDetails/${toy._id}`)}
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
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 mb-6">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                        <div>
                          <p className="text-lg font-medium">
                            Price: ${toy.price}
                          </p>
                          <p>Rating:{toy.rating}</p>
                          <p>
                            <Rating
                              style={{ maxWidth: 100 }}
                              value={toy?.rating || 0}
                              readOnly
                            />
                          </p>
                        </div>
                        <button
                          onClick={() => navigate(`/toyDetails/${toy._id}`)}
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
          </TabPanel>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                <Tab
                  onClick={() => setSubCategoryFilteredText("Captain America")}
                >
                  Captain America
                </Tab>
                <Tab onClick={() => setSubCategoryFilteredText("Thor")}>
                  Thor
                </Tab>
                <Tab onClick={() => setSubCategoryFilteredText("Ironman")}>
                  Ironman
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
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 mb-6">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                        <div>
                          <p className="text-lg font-medium">
                            Price: ${toy.price}
                          </p>
                          <p>Rating:{toy.rating}</p>
                          <p>
                            <Rating
                              style={{ maxWidth: 100 }}
                              value={toy?.rating || 0}
                              readOnly
                            />
                          </p>
                        </div>
                        <button
                          onClick={() => navigate(`/toyDetails/${toy._id}`)}
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
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 mb-6">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                        <div>
                          <p className="text-lg font-medium">
                            Price: ${toy.price}
                          </p>
                          <p>Rating:{toy.rating}</p>
                          <p>
                            <Rating
                              style={{ maxWidth: 100 }}
                              value={toy?.rating || 0}
                              readOnly
                            />
                          </p>
                        </div>
                        <button
                          onClick={() => navigate(`/toyDetails/${toy._id}`)}
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
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 mb-6">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between absolute bottom-8 left-5 right-5">
                        <div>
                          <p className="text-lg font-medium">
                            Price: ${toy.price}
                          </p>
                          <p>Rating:{toy.rating}</p>
                          <p>
                            <Rating
                              style={{ maxWidth: 100 }}
                              value={toy?.rating || 0}
                              readOnly
                            />
                          </p>
                        </div>
                        <button
                          onClick={() => navigate(`/toyDetails/${toy._id}`)}
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
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
