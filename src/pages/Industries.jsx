import React from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import PageBanner from "../components/Website/PageBanner";
import IndustriesWeServe from "../components/IndustriesWeServe";
import GetInTouch from "../components/GetInTouch";
import banner from "../assets/industries-banner.webp";
import BrandLogos from "../components/BrandLogos";

const Industries = () => {
  return (
    <>
      <Header />
      <PageBanner
        title={"Industries We Serve"}
        banner={banner}
        position={"center"}
      />
      <div className="mt-[3rem]">
        <IndustriesWeServe />
      </div>
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Industries;
