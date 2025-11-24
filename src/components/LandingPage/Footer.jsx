import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { clientDetails, logo } from "../../constants";

const Footer = () => {
  const phoneDisplay = clientDetails.phoneDisplay ?? clientDetails.phone;

  return (
    <div className="bg-[#2b0a05] py-[3rem] text-white">
      <div className="px-5 sm:px-10 flex flex-col gap-10 lg:flex-row items-start justify-between">
        <div className="flex flex-col gap-4 items-start lg:max-w-sm">
          <img
            fetchPriority="high"
            src={logo}
            alt="logo"
            width="150"
            height="100"
            className="h-[4.5rem] object-contain"
          />
          <div className="space-y-3 flex flex-col mt-5">
            <Link to={`mailto:${clientDetails.email}`} className="">
              {clientDetails.email}
            </Link>
            <Link to={`tel:${clientDetails.phone}`} className="">
              {phoneDisplay}
            </Link>
            <p className="text-white/80 leading-relaxed">
              {clientDetails.address}
            </p>
            <a
              href={clientDetails.mapLink}
              target="_blank"
              rel="noreferrer"
              className="text-primary/70 underline decoration-dotted underline-offset-4"
            >
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-lg font-semibold">Find Us</p>
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl max-w-md">
            <iframe
              title="Webora AI Bengaluru Office Map"
              src={clientDetails.mapEmbedUrl}
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
          <div className="flex mt-1 gap-5 justify-start">
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
