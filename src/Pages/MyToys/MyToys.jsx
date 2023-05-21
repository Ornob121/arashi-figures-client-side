import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

//
const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const navigate = useNavigate();
  const [sort, setSort] = useState("default");
  console.log(sort);
  useTitle("| My Toys");

  const url = `https://arashi-figures-server.vercel.app/myToys/${sort}/?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url, sort]);
  console.log(setMyToys);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want delete this toy",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        // ! Add a toy in server api
        fetch(`https://arashi-figures-server.vercel.app/deleteToy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire({
                icon: "success",
                title: "Great",
                text: "The Toy Is Deleted",
              });
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Toy not deleted", "", "info");
      }
    });
  };

  if (myToys.length <= 0) {
    return (
      <h2 className="text-green-700 text-4xl text-center font-semibold capitalize mt-20">
        You do not have any toy. <br /> you have to add a toy to see your toys
      </h2>
    );
  }

  return (
    <div className="px-20 mt-16">
      <div className="flex text-lg">
        <p className="pr-3">Sort By:</p>
        <select name="sort" onChange={(e) => setSort(e.target.value)} id="">
          <option value="default">Default</option>
          <option value="priceUp">High Price</option>
          <option value="priceDown">Low Price</option>
        </select>
      </div>
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
              <th>Details</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToys?.map((toy, i) => (
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
                    onClick={() => {
                      navigate(`/toyDetails/${toy._id}`);
                    }}
                    className="btn btn-ghost btn-xs"
                  >
                    details
                  </button>
                </th>
                <td>
                  <button
                    onClick={() => navigate(`/updateMyToys/${toy._id}`)}
                    className="btn btn-ghost btn-xs"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
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

export default MyToys;
