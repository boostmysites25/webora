import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { clientDetails, logo } from "../../constants";

const Footer = () => {
  return (
    <div className="bg-[#2b0a05] py-[3rem] text-white">
      <div className="px-5 sm:px-10 flex flex-col gap-3 sm:flex-row items-center justify-between">
        <div className="flex flex-col gap-3 items-start">
          <img
            fetchPriority="high"
            src={logo}
            alt="logo"
            width="150"
            height="100"
            className="h-[4.5rem] object-contain"
          />
          <div className="space-y-2 flex flex-col mt-5">
            <Link to={`mailto:${clientDetails.email}`} className="">
              {clientDetails.email}
            </Link>
            <Link to={`tel:${clientDetails.phone}`} className="">
              +{clientDetails.phone}
            </Link>
            {/* <p className="">{clientDetails.address}</p> */}
          </div>
        </div>
        <div className="">
          <div className="flex mt-3 gap-5 justify-start">
            <Link to={clientDetails.linkedin} target="_blank">
              <FaLinkedinIn className="text-2xl" />
            </Link>
            <Link to={clientDetails.instagram} target="_blank">
              <AiFillInstagram className="text-2xl" />
            </Link>
            <Link to={clientDetails.facebook} target="_blank">
              <GrFacebookOption className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
