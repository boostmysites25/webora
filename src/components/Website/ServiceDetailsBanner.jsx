import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { allServices } from "../../constants";

const ServiceDetailsBanner = () => {
    const {pathname} = useLocation();
    const title = allServices.find((item) => item.link === pathname)?.title;
  return (
    <div className="min-h-[45vh] md:min-h-[70vh] w-full page-banner relative bg-[#17012C]">
      <div className="absolute py-2 top-[40%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
        <h1 data-aos="fade-up" className="heading text-white text-center">
          {title}
        </h1>
        <div
          data-aos="fade-up"
          className="mt-5 text-base sm:text-xl font-medium px-3 py-2 w-fit rounded-full border-2 border-primary flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
        >
          <Link to="/">
            Home
          </Link>
          <IoIosArrowForward />
          <Link to="/services">
            Services
          </Link>
          <IoIosArrowForward />
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsBanner;
