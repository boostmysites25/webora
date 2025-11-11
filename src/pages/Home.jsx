import React, { lazy, memo } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import aboutImg from "../assets/aboutus-3.webp";
import aboutImg2 from "../assets/why-ai-matters.webp";
import BrandLogos from "../components/BrandLogos";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import FAQSection from "../components/FAQSection";

const Banner = lazy(() => import("../components/Website/Banner"));
const TrustWorthySection = lazy(() =>
  import("../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() => import("../components/IndustriesWeServe"));
const HomePageServicesList = lazy(() =>
  import("../components/HomePageServicesList")
);
const GetInTouch = lazy(() => import("../components/GetInTouch"));

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <section id="about-us" className="relative pt-[5rem] pb-[3rem]">
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <p
            data-aos="fade-down"
            className="gradient-text uppercase text-center mb-5 md:mb-7"
          >
            About Us
          </p>
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <div className="flex flex-col">
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg}
                alt="about"
                className="h-full w-full aspect-video rounded-xl object-cover"
              />
            </div>
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading">
                Building the Future with Cutting-Edge Technology.
              </h3>
              <p className="description">
                At Webora AI, we are more than a tech company—we are a strategic
                partner in your digital transformation journey. With expertise
                in AI, blockchain, RPA, game development, and more, we craft
                solutions that drive innovation and efficiency. From startups to
                enterprises, we empower businesses to stay ahead in the digital
                era with custom digital solutions tailored to their unique
                needs. Let’s create a smarter, more connected world—together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomePageServicesList />
      <TrustWorthySection />
      <section id="about-us" className="relative py-[3rem]">
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading">Why AI Matters</h3>
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg2}
                alt="about"
                className="md:hidden h-full w-full aspect-video rounded-xl object-cover"
              />
              <p className="description">
                At Webora AI, we believe that Artificial Intelligence is more
                than a technology—it’s a transformative force reshaping
                industries. By integrating AI into business processes, we help
                organizations streamline operations, uncover insights, and
                deliver hyper-personalized experiences. From predictive
                analytics to intelligent automation, we empower companies to
                harness AI for sustainable growth and competitive advantage.
              </p>
            </div>
            <div className="md:flex hidden flex-col">
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg2}
                alt="about"
                className="h-full w-full aspect-video rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <IndustriesWeServe />
      <CallToAction />
      <Portfolio />
      <Testimonials />
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05071a] via-[#090d25] to-[#05071a]"></div>
        <div className="absolute left-[-10%] top-[-20%] h-[22rem] w-[22rem] rounded-full bg-primary/40 blur-[160px]"></div>
        <div className="absolute right-[-15%] bottom-[-25%] h-[26rem] w-[26rem] rounded-full bg-[#6A58F7]/35 blur-[180px]"></div>
        <div className="wrapper relative z-10">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <div className="relative">
              <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-3xl"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/[0.04] p-10 shadow-[0_45px_75px_-25px_rgba(15,23,42,0.65)] backdrop-blur-xl">
                <div className="mb-6 h-[1px] w-20 bg-gradient-to-r from-primary via-white/60 to-transparent"></div>
                <h3 className="heading text-white text-3xl md:text-4xl">
                  Vision of Our Company
                </h3>
                <p className="description mt-6 text-lg leading-relaxed text-white/80">
                  At Webora AI, our vision is to redefine the future of
                  technology by creating intelligent, scalable, and impactful
                  digital solutions. We aim to empower businesses across
                  industries to embrace innovation, achieve sustainable growth,
                  and deliver exceptional user experiences. Our goal is to be a
                  trusted partner in digital transformation—helping organizations
                  turn ideas into powerful realities through creativity,
                  technology, and excellence.
                </p>
                <div className="mt-10 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary/80"></span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary via-white/40 to-transparent"></div>
                  <span className="h-2 w-2 rounded-full bg-primary/30"></span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex relative h-full items-center justify-center">
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.02] blur-sm"></div>
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent p-[1px]">
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[#070b21]">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_55%)]"></div>
                    <div className="absolute inset-0 animate-[spin_25s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(108,99,255,0.35),transparent_55%)]"></div>
                  </div>
                  <div className="absolute inset-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-lg"></div>
                  <div className="absolute left-8 top-8 h-14 w-14 rounded-full bg-primary/40 blur-3xl"></div>
                  <div className="absolute right-8 bottom-12 h-24 w-24 rounded-full border border-white/15 bg-gradient-to-br from-primary/35 via-transparent to-transparent"></div>
                  <div className="absolute inset-x-12 top-16 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  <div className="absolute inset-x-10 bottom-10 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default memo(Home);
