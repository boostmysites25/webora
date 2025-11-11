import React from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import PageBanner from "../components/Website/PageBanner";
import { blogs } from "../data/blogs";
import { Navigate, useParams } from "react-router-dom";
import GetInTouch from "../components/GetInTouch";
import CallToAction from "../components/CallToAction";

const BlogsDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <Navigate to="/blogs" />;
  }
  return (
    <>
      <Header />
      <div
        className="h-fit min-h-[55vh] w-full page-banner text-white pt-[15rem] pb-[10rem] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
        {/* <div
          className={`wrapper relative z-10 w-full flex flex-col gap-3 px-3 sm:px-8`}
        >
          <h1 data-aos="fade-up" className="heading text-start max-w-3xl">
            {blog.title}
          </h1>
        </div> */}
      </div>
      <div className="py-[5rem] wrapper">
        <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }}></div>
      </div>
      <CallToAction />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default BlogsDetail;
