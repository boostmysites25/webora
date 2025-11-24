import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { allServices, clientDetails, logo } from "../../constants";

const Footer = () => {
  const phoneDisplay = clientDetails.phoneDisplay ?? clientDetails.phone;

  return (
    <footer className="bg-[#2b0a05] py-[3rem] text-white">
      <div className="wrapper mx-auto px-5 sm:px-10 flex flex-col gap-10 lg:flex-row justify-between">
        <div className="flex flex-col gap-4 items-start lg:max-w-sm">
          <img
            fetchPriority="high"
            src={logo}
            width="150"
            height="100"
            alt="logo"
            className="h-[4.5rem] object-contain"
          />
          <p className="max-w-[25rem]">
            Follow us on our social media handles to keep up to date with our
            latest work and announcements.
          </p>

          <div className="flex mt-3 gap-5 items-center">
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
        <div className="flex-1 flex flex-col gap-7 sm:flex-row md:gap-14">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Our Services</p>
            {allServices.map((item) => (
              <Link
                key={item.id}
                to={`/services/${item.title}`}
                className="cursor-pointer"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Quick Links</p>
            <Link to="/about-us" className="cursor-pointer">
              About Us
            </Link>
            <Link to="/services" className="cursor-pointer">
              Services
            </Link>
            <Link to="/contact-us" className="cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="w-full lg:max-w-sm">
          <p className="text-lg font-semibold mb-3">Visit Us</p>
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <iframe
              title="Webora AI Bengaluru Office"
              src={clientDetails.mapEmbedUrl}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
