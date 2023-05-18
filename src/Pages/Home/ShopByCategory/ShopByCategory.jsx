import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const ShopByCategory = () => {
  const toys = useLoaderData();
  //   console.log(toys);

  //! Use to filter the data of the toys
  const [filterText, setFilterText] = useState("DC");

  //! Filtering the data according to category
  const filteredToys = toys.filter((toy) => toy.category === filterText);

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
            {toys.map((toy) => (
              <Tab key={toy._id} onClick={() => setFilterText(toy.category)}>
                {toy.category}
              </Tab>
            ))}
          </TabList>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList>
                {filteredToys[0].subs.map((filToy, i) => (
                  <Tab key={i}>{filToy.subcategory}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {filteredToys[0].subs[0].toys.map((toy, i) => (
                    <div
                      className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke]"
                      key={i}
                    >
                      <img
                        src={toy.image}
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 pb-4">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-medium mb-2">
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
                          onClick={() => navigate(`/toyDetails/${toy.id}`)}
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
                  {filteredToys[0].subs[1].toys.map((toy, i) => (
                    <div
                      className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke]"
                      key={i}
                    >
                      <img
                        src={toy.image}
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 pb-4">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-medium mb-2">
                            Price: ${toy.price}
                          </p>
                          <p>Rating: {toy.rating}</p>
                          <Rating
                            style={{ maxWidth: 180 }}
                            value={toy.rating}
                          />
                        </div>
                        <button
                          onClick={() => navigate(`/toyDetails/${toy.id}`)}
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
                  {filteredToys[0].subs[2].toys.map((toy, i) => (
                    <div
                      className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke]"
                      key={i}
                    >
                      <img
                        src={toy.image}
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 pb-4">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-medium mb-2">
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
                          onClick={() => navigate(`/toyDetails/${toy.id}`)}
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
                {filteredToys[0].subs.map((filToy, i) => (
                  <Tab key={i}>{filToy.subcategory}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {filteredToys[0].subs[0].toys.map((toy, i) => (
                    <div
                      className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke]"
                      key={i}
                    >
                      <img
                        src={toy.image}
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 pb-4">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-medium mb-2">
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
                          onClick={() => navigate(`/toyDetails/${toy.id}`)}
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
                  {filteredToys[0].subs[1].toys.map((toy, i) => (
                    <div
                      className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke]"
                      key={i}
                    >
                      <img
                        src={toy.image}
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 pb-4">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-medium mb-2">
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
                          onClick={() => navigate(`/toyDetails/${toy.id}`)}
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
                  {filteredToys[0].subs[2].toys.map((toy, i) => (
                    <div
                      className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke]"
                      key={i}
                    >
                      <img
                        src={toy.image}
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 pb-4">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-medium mb-2">
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
                          onClick={() => navigate(`/toyDetails/${toy.id}`)}
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
                {filteredToys[0].subs.map((filToy, i) => (
                  <Tab key={i}>{filToy.subcategory}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {filteredToys[0].subs[0].toys.map((toy, i) => (
                    <div
                      className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke]"
                      key={i}
                    >
                      <img
                        src={toy.image}
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 pb-4">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-medium mb-2">
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
                          onClick={() => navigate(`/toyDetails/${toy.id}`)}
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
                  {filteredToys[0].subs[1].toys.map((toy, i) => (
                    <div
                      className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke]"
                      key={i}
                    >
                      <img
                        src={toy.image}
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 pb-4">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-medium mb-2">
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
                          onClick={() => navigate(`/toyDetails/${toy.id}`)}
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
                  {filteredToys[0].subs[2].toys.map((toy, i) => (
                    <div
                      className="mx-auto mt-5 p-4 w-3/4 rounded-lg shadow-xl border border-[whitesmoke]"
                      key={i}
                    >
                      <img
                        src={toy.image}
                        className="w-52 mx-auto h-52"
                        alt=""
                      />
                      <h2 className="text-center text-2xl font-semibold text-green-700 pb-4">
                        {toy.name}
                      </h2>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-medium mb-2">
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
                          onClick={() => navigate(`/toyDetails/${toy.id}`)}
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
