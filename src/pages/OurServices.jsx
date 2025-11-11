import React, { lazy } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import banner from "../assets/services-banner.webp";
import GetInTouch from "../components/GetInTouch";
const HomePageServicesList = lazy(() =>
  import("../components/HomePageServicesList")
);
const PageBanner = lazy(() => import("../components/Website/PageBanner"));
const WorkingProcess = lazy(() => import("../components/WorkingProcess"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const BrandLogos = lazy(() => import("../components/BrandLogos"));

const OurServices = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Our Services"} banner={banner} position={"left"} />
      <section className="py-[3rem]">
        <div className="wrapper">
          <p className="description text-center">
            At Webora AI, we deliver innovative technology solutions to empower
            modern businesses. From AI-driven insights and blockchain security
            to scalable cloud infrastructure, our expertise helps you innovate,
            optimize, and stay ahead in the digital era.
          </p>
          <div className="">
            <HomePageServicesList />
          </div>
          {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-6 md:gap-10">
            {allServices.map((item) => (
              <Link
                to={item.link}
                data-aos="fade-up"
                className="pb-[2rem] relative h-full"
              >
                <div className="rounded-[3rem] h-full sm:rounded-[8rem] shadow-2xl bg-background flex flex-col gap-3 items-center text-center px-8 py-10 border-4 border-primary">
                  <img
                    loading="lazy"
                    src={item.img}
                    alt={item.title}
                    className="object-contain w-[70%] max-w-[15rem]"
                  />
                  <h6 className="text-xl font-semibold">{item.title}</h6>
                  <p className="text-md   max-w-[80%] text-gray-600">
                    {item.description}
                  </p>
                </div>
                <Link
                  to={item.link}
                  className="absolute left-1/2 hover:-translate-y-1 transition-all duration-300 -translate-x-1/2 bottom-[0.5rem] z-20 text-[2rem] bg-background text-primary h-[3rem] w-[3rem] rounded-full border-2 border-primary flex items-center justify-center"
                >
                  <FiArrowUpRight />
                </Link>
              </Link>
            ))}
          </div> */}
        </div>
      </section>
      <WorkingProcess />
      <Testimonials />
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default OurServices;
