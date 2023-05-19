import Swal from "sweetalert2";

//
const AddAToy = () => {
  // ! Input values
  const handleAddAToy = (event) => {
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
    const toy = {
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
    console.log(toy);

    // ! Add a toy in server api
    fetch("http://localhost:5000/addAToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Great",
            text: "The Toy Is Added",
          });
        }
      });
  };

  return (
    <div className="my-16">
      <h2 className="text-3xl text-center text-green-900 mt-12">Add A Toy</h2>
      <div className="card-body px-24">
        <form onSubmit={handleAddAToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
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
                placeholder="info@gmail.com"
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
                required
              ></textarea>
            </label>
          </div>

          <div className="form-control mt-6">
            <input
              className="btn btn-success text-white bg-green-600 btn-block"
              type="submit"
              value="Add"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
