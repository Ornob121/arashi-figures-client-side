import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

//
const UpdateMyToys = () => {
  const updateToy = useLoaderData();
  console.log(updateToy);
  const navigate = useNavigate();

  // ! Input values
  const handleUpdateAToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.photo.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.email.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.available.value;
    const details = form.description.value;
    if (rating > 5) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Your Rating cannot be more than 5",
      });
    }
    if (subcategory === "Select One") {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "You have to chose one Sub-Category",
      });
    }
    const updatedToy = {
      name,
      subcategory,
      image,
      price,
      rating,
      availableQuantity,
      sellerName,
      sellerEmail,
      details,
    };
    console.log(updatedToy);

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        // ! Add a toy in server api
        fetch(`http://localhost:5000/updateYourToy/${updateToy._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedToy),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire({
                icon: "success",
                title: "Great",
                text: "The Toy Is Updated",
              });
              navigate(-1);
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="my-16">
      <h2 className="text-3xl text-center text-green-900 mt-12">
        Update Your Toy
      </h2>
      <div className="card-body px-24">
        <form onSubmit={handleUpdateAToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                defaultValue={updateToy.name}
                name="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={updateToy.image}
                required
                placeholder="Photo URL"
                name="photo"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                placeholder="Seller Name"
                name="sellerName"
                value={updateToy.sellerName}
                disabled
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                disabled
                placeholder="info@gmail.com"
                value={updateToy.sellerEmail}
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub-Category</span>
              </label>
              <select
                name="subcategory"
                id=""
                defaultValue={updateToy.subcategory}
                required
                className="h-12  border border-[gray] rounded-lg cursor-pointer p-2"
              >
                <option value="Select One">Select One</option>
                <option value="One Piece">One Piece</option>
                <option value="Attack on Titan">Attack on Titan</option>
                <option value="Hunter x Hunter">Hunter x Hunter</option>
                <option value="Batman">Batman</option>
                <option value="Superman">Superman</option>
                <option value="Wonder Women">Wonder Women</option>
                <option value="Captain America">Captain America</option>
                <option value="Thor">Thor</option>
                <option value="Ironman">Ironman</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                defaultValue={updateToy.price}
                name="price"
                required
                placeholder="Price"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                defaultValue={updateToy.rating}
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="In Stock"
                defaultValue={updateToy.availableQuantity}
                name="available"
                required
              />
            </div>
          </div>
          <div className="form-control my-5">
            <label className="input-group">
              <textarea
                className="textarea border text-xl border-[gray] w-full h-[200px]"
                placeholder="Product Description"
                name="description"
                defaultValue={updateToy.details}
                required
              ></textarea>
            </label>
          </div>

          <div className="form-control mt-6">
            <input
              className="btn btn-success text-white bg-green-600 btn-block"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyToys;
