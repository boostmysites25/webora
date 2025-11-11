import React, { lazy } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import img1 from "../assets/aboutus-1.webp";
import bannerImg from "../assets/about-us-banner.webp";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import GetInTouch from "../components/GetInTouch";
import CallToAction from "../components/CallToAction";
import FAQSection from "../components/FAQSection";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));
const BrandLogos = lazy(() => import("../components/BrandLogos"));

const AboutUs = () => {
  return (
    <>
      <Header />
      <PageBanner
        position="left"
        title={"About Us"}
        banner={bannerImg}
        description="To be the world’s most trusted partner in AI technology and digital transformation, empowering businesses of all sizes to thrive in an increasingly complex and competitive landscape."
      />
      <section className="py-[3rem] wrapper grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col">
          <h1 data-aos="fade-right" className="heading">
            Empowering Digital Transformation with Webora AI
          </h1>
          <p data-aos="fade-right" className="description mt-4">
            Founded to redefine digital solutions, Webora AI leverages
            cutting-edge technology to propel businesses forward. Our passion
            for innovation and commitment to excellence drive us to build
            robust, scalable, and impactful solutions across AI, blockchain,
            RPA, game development, and more. Join us in crafting the future of
            digital transformation.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="relative w-full h-full lg:min-h-[50vh] rounded-lg overflow-hidden"
        >
          <img
            loading="lazy"
            src={img1}
            alt="about us"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="wrapper">
        <h1 data-aos="fade-right" className="heading">
          About Us
        </h1>
        <h5 data-aos="fade-right" className="text-2xl mt-4">
          The Journey of Webora AI:
        </h5>
        <p data-aos="fade-right" className="description mt-3">
          At Webora AI, we are committed to redefining the digital landscape by
          combining advanced AI solutions with expertise in web, mobile
          development, blockchain, and data science. We empower businesses to
          excel in a rapidly evolving tech landscape through transformative
          solutions tailored to meet unique business goals.
        </p>
        <h5 data-aos="fade-right" className="text-2xl mt-8">
          Our Evolution and Impact:
        </h5>
        <p data-aos="fade-right" className="description mt-3">
          What started as a bold vision has evolved into a powerhouse of over
          150 skilled professionals. With a portfolio of 80+ innovative tech
          solutions, we’ve made a significant impact across industries including
          finance, healthcare, gaming, and logistics.
        </p>
        <h5 data-aos="fade-right" className="text-2xl mt-8">
          A Legacy of Excellence:
        </h5>
        <ul
          data-aos="fade-right"
          className="description mt-3 list-disc list-inside"
        >
          <li>80+ AI and tech solutions implemented globally</li>
          <li>50+ digital transformation projects successfully delivered</li>
          <li>Collaborations with 120+ future-focused partners</li>
          <li>Achieving a 97% client satisfaction rate consistently</li>
        </ul>
        <p className="mt-5 description">
          At Webora AI, we are not just delivering technology; we are building
          solutions that solve real-world challenges. Every project is a step
          forward in our mission to transform businesses and shape the future of
          digital innovation.
        </p>
      </section>

      <section className="my-[3rem] py-[3rem]">
        <div className="wrapper">
          <div className="mt-5 grid lg:grid-cols-2 gap-5">
            {/* Core Values Section */}
            <div className="bg-primary/10 space-y-6 p-7 rounded-md">
              <h1 data-aos="fade-up" className="heading">
                Our Core Values
              </h1>
              {[
                {
                  id: 1,
                  title: "Innovation & Excellence",
                  desc: "We believe in pushing boundaries and delivering top-tier solutions that drive progress and impact.",
                },
                {
                  id: 2,
                  title: "Client-Centric Approach",
                  desc: "Our clients' success is our success. We prioritize their needs and deliver tailored solutions that drive value.",
                },
                {
                  id: 3,
                  title: "Integrity & Transparency",
                  desc: "We are committed to ethical practices, maintaining transparency in every project and interaction.",
                },
                {
                  id: 4,
                  title: "Continuous Growth",
                  desc: "Learning never stops. We embrace new challenges and technologies to stay ahead in the tech landscape.",
                },
                {
                  id: 5,
                  title: "Collaboration & Teamwork",
                  desc: "Our strength lies in our team. We foster a culture of collaboration to achieve common goals.",
                },
              ].map((item) => (
                <div data-aos="fade-up" key={item.id} className="space-y-1">
                  <h3 className="text-xl font-semibold">{item.title}:</h3>
                  <p className="description">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mission and Vision Section */}
            <div className="grid grid-cols-1 gap-5 h-full">
              {[
                {
                  id: 1,
                  img: mission,
                  title: "Our Mission",
                  desc: "To empower businesses with advanced technology solutions that drive innovation, efficiency, and growth in the digital era.",
                },
                {
                  id: 2,
                  img: vision,
                  title: "Our Vision",
                  desc: "To be a global leader in delivering transformative digital solutions that shape the future of industries worldwide.",
                },
              ].map((item) => (
                <div
                  data-aos="fade-up"
                  key={item.id}
                  className="space-y-2 h-full p-5 bg-blue-500/40 gap-5 rounded-md"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[10rem] object-contain fill-white mb-5"
                  />
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <FAQSection />
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default AboutUs;
