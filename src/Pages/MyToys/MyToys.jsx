import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

//
const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const navigate = useNavigate();

  const url = `http://localhost:5000/myToys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url]);

  return (
    <div className="px-20 mt-16">
      <div className="form-control text-center mx-auto"></div>
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy, i) => (
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
                <th>
                  <button
                    onClick={() => navigate(`/toyDetails/${toy._id}`)}
                    className="btn btn-ghost btn-xs"
                  >
                    details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
