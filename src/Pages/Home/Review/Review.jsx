import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Review.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

//
const Review = () => {
  const [customerReviews, setCustomerReviews] = useState([]);
  useEffect(() => {
    fetch("https://arashi-figures-server.vercel.app/allReviews")
      .then((res) => res.json())
      .then((data) => setCustomerReviews(data));
  }, []);
  return (
    <div className="px-20 py-24 bg-blue-950">
      <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-5 items-center">
        <div
          className="text-white border-b-4 md:border-b-0 md:border-r-4 border-white"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
        >
          <h5 className="text-lg uppercase pb-4">TESTIMONIALS</h5>
          <h6 className="text-3xl font-bold pb-6">
            What Our Clients Say About Us
          </h6>
          <p className="text-blue-50 md:pb-0 pb-6">
            We appreciate your kind and honest feedback and invite you to our
            amazing store.
          </p>
        </div>
        <div
          className="col-span-2 text-white"
          style={{ backgroundColor: "rgb(23 37 84)" }}
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            style={{ backgroundColor: "rgb(23 37 84)" }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper mt-12"
          >
            {customerReviews.map((review) => (
              <SwiperSlide
                style={{ backgroundColor: "rgb(23 37 84)" }}
                key={review._id}
              >
                <div
                  className="text-center"
                  style={{ backgroundColor: "rgb(23 37 84)" }}
                >
                  <p className="pb-20 md:text-xl md:px-40 text-sm">
                    {review.comment}
                  </p>
                  <img
                    src={review.image}
                    style={{ height: "70px", width: "70px" }}
                    className="mx-auto mb-6 rounded-full"
                    alt=""
                  />
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={Math.round(review.rating)}
                    readOnly
                    className="mx-auto"
                  />
                  <h5 className="text-xl tracking-wide pt-4">{review.name}</h5>
                  <p>
                    <small>{review.job}</small>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
