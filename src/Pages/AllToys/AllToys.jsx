import { useLoaderData, useNavigate } from "react-router-dom";

//
const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto w-full my-12 px-20">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
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
          {allToys.map((toy) => (
            <tr key={toy._id}>
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
                <p>{toy.name}</p>
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
  );
};

export default AllToys;
