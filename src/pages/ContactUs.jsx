import React, { lazy } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import map from "../assets/map.webp";
import { clientDetails } from "../constants";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import banner from "../assets/contact-us-banner.webp";
import { InquiryForm } from "../components/GetInTouch";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));

const ContactUs = () => {
  return (
    <>
      <Header />
      <PageBanner
        title={"Contact Us"}
        banner={banner}
        position={"left"}
        description="Reach out to discover how our tech solutions can propel your business forward."
      />
      <div className="wrapper">
        <div className="grid lg:grid-cols-2 gap-10 py-[3rem]">
          <div data-aos="fade-right" className="flex flex-col gap-5 pt-[2rem]">
            <h1 className="heading text-center lg:text-start">
              Innovate. Transform. Succeed.
            </h1>
            <p className="description text-center lg:text-start">
              Ready to take the next step? Reach out to us today to discuss how
              Webora AI can help transform your business. Whether you have a
              question, need support, or want to explore our services, we’re
              here to help.
            </p>
          </div>
          <div className="flex justify-center">
            <InquiryForm />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${map})` }}
        className="bg-primary/5 relative min-h-[50vh] bg-center bg-cover"
      >
        <div className="wrapper py-[3rem] flex justify-center">
          <div className="bg-primary/90 w-fit rounded-md text-white px-5 py-10">
            <h5 className="text-2xl font-semibold mb-2">Contact Info</h5>
            <hr />
            <Link
              to={`tel:${clientDetails.phone}`}
              className="flex items-center gap-3 my-7 w-fit"
            >
              <div className="w-[3.5rem] h-[3.5rem] bg-background/20 rounded-full p-3 flex justify-center items-center">
                <FaPhoneAlt className="text-3xl" />
              </div>
              <p className="sm:text-lg font-medium">{clientDetails.phone}</p>
            </Link>
            <Link
              to={`mailto:${clientDetails.email}`}
              className="flex items-center gap-3 my-7 w-fit"
            >
              <div className="w-[3.5rem] h-[3.5rem] bg-background/20 rounded-full p-3 flex justify-center items-center">
                <FaEnvelope className="text-3xl" />
              </div>
              <p className="sm:text-lg font-medium">{clientDetails.email}</p>
            </Link>
            <div className="flex gap-3 mt-7 w-fit">
              <div className="w-[3.5rem] h-[3.5rem] bg-background/20 rounded-full p-3 flex justify-center items-center">
                <FaMapLocationDot className="text-3xl" />
              </div>
              <p className="sm:text-lg font-medium max-w-[35rem]">
                {clientDetails.address}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
