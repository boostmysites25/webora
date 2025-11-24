import React, { lazy } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import map from "../assets/map.webp";
import { clientDetails } from "../constants";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import banner from "../assets/contact-us-banner.webp";
import { InquiryForm } from "../components/GetInTouch";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));

const ContactUs = () => {
  const phoneDisplay = clientDetails.phoneDisplay ?? clientDetails.phone;

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
            <a
              href={`tel:${clientDetails.phone}`}
              className="flex items-center gap-3 my-7 w-fit"
            >
              <div className="w-[3.5rem] h-[3.5rem] bg-background/20 rounded-full p-3 flex justify-center items-center">
                <FaPhoneAlt className="text-3xl" />
              </div>
              <p className="sm:text-lg font-medium">{phoneDisplay}</p>
            </a>
            <a
              href={`mailto:${clientDetails.email}`}
              className="flex items-center gap-3 my-7 w-fit"
            >
              <div className="w-[3.5rem] h-[3.5rem] bg-background/20 rounded-full p-3 flex justify-center items-center">
                <FaEnvelope className="text-3xl" />
              </div>
              <p className="sm:text-lg font-medium">{clientDetails.email}</p>
            </a>
            <div className="flex gap-3 mt-7 w-fit">
              <div className="w-[3.5rem] h-[3.5rem] bg-background/20 rounded-full p-3 flex justify-center items-center">
                <FaMapLocationDot className="text-3xl" />
              </div>
              <p className="sm:text-lg font-medium max-w-[35rem]">
                {clientDetails.address}
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="overflow-hidden rounded-2xl border border-white/20 shadow-xl">
                <iframe
                  title="Webora AI Bengaluru Office Directions"
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
              <a
                href={clientDetails.mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em]"
              >
                Open in Google Maps
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.6}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25v-2.5a2 2 0 0 0-2-2h-6.5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.5a2 2 0 0 0 2-2v-2.5M14.25 12H21m0 0-2.25-2.25M21 12l-2.25 2.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
