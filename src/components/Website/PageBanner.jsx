import React from "react";

const PageBanner = ({ title, banner, position, description }) => {
  let alignment;
  if (position === "left") {
    alignment = "items-start";
  } else if (position === "right") {
    alignment = "items-end";
  } else {
    alignment = "items-center";
  }
  return (
    <div
      className="h-fit w-full page-banner text-white pt-[15rem] pb-[10rem] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
      <div
        className={`${alignment} wrapper relative z-10 w-full flex flex-col gap-3 px-3 sm:px-8`}
      >
        <h1 data-aos="fade-up" className="heading-1 text-start max-w-3xl">
          {title}
        </h1>
        {description && (
          <p data-aos="fade-up" className="description max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;
