import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

//
const AllToys = () => {
  const allToys = useLoaderData();
  const [filteredBySearchToys, setFilteredBySearchToys] = useState(allToys);
  console.log(filteredBySearchToys);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const { user } = useContext(AuthContext);
  console.log(searchText);
  useTitle("| All Toys");

  //   ! Search

  const handleSearch = () => {
    fetch(
      `https://arashi-figures-server.vercel.app/allToysSearch/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setFilteredBySearchToys(data));
  };

  return (
    <div className="md:px-20 mt-16">
      <div className="form-control text-center mx-auto">
        <div>
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-full my-12">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Seller</th>
              <th>Image</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredBySearchToys?.map((toy, i) => (
              <tr key={toy._id}>
                <td>{i + 1}</td>
                <th>
                  <p className="badge badge-ghost badge-sm">{toy.sellerName}</p>
                </th>
                <td>
                  <div className="space-x-3">
                    <img
                      src={toy.image}
                      className="w-20 h-20 rounded-lg"
                      alt="Toy Figure Pictures"
                    />
                  </div>
                </td>
                <td>
                  <p>{toy?.name || ""}</p>
                </td>
                <td className="text-center">{toy.subcategory}</td>
                <td className="text-center">${toy.price}</td>
                <td className="text-center">{toy.availableQuantity}</td>
                <td>
                  <button
                    onClick={() => {
                      navigate(`/toyDetails/${toy._id}`);
                      if (!user) {
                        toast("You Have To login first");
                      }
                    }}
                    className="btn btn-ghost btn-xs"
                  >
                    details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
