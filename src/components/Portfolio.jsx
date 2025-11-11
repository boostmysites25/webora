import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const AUTO_SPEED = 25000;

const createAutoSlider = () => (slider) => {
  let timeout;
  let mouseOver = false;
  const clear = () => {
    clearTimeout(timeout);
  };
  const next = () => {
    clear();
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 0);
  };

  const handleMouseEnter = () => {
    mouseOver = true;
    clear();
  };
  const handleMouseLeave = () => {
    mouseOver = false;
    next();
  };

  slider.on("created", () => {
    slider.container.addEventListener("mouseenter", handleMouseEnter);
    slider.container.addEventListener("mouseleave", handleMouseLeave);
    next();
  });
  slider.on("dragStarted", clear);
  slider.on("animationEnded", next);
  slider.on("updated", next);
  slider.on("destroyed", () => {
    slider.container.removeEventListener("mouseenter", handleMouseEnter);
    slider.container.removeEventListener("mouseleave", handleMouseLeave);
  });
};

const sliderOptions = {
  loop: true,
  renderMode: "performance",
  drag: false,
  defaultAnimation: { duration: AUTO_SPEED, easing: (t) => t },
  slides: {
    perView: 1.2,
    spacing: 16,
  },
  breakpoints: {
    "(min-width: 640px)": {
      slides: {
        perView: 1.6,
        spacing: 16,
      },
    },
    "(min-width: 768px)": {
      slides: {
        perView: 2.2,
        spacing: 20,
      },
    },
    "(min-width: 1024px)": {
      slides: {
        perView: 3,
        spacing: 24,
      },
    },
    "(min-width: 1280px)": {
      slides: {
        perView: 3.5,
        spacing: 28,
      },
    },
  },
};

const Card = ({ item }) => {
  const imageSrc = item.img || item.image;
  const content = (
    <>
      <div className="relative h-full w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={item.title}
          width="300"
          height="300"
          loading="lazy"
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05071a]/95 via-[#05071a]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-2 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60 backdrop-blur">
        <h3 className="font-medium text-center text-white text-xl">
          {item.title}
        </h3>
        <p className="text-center text-white/80 text-sm tracking-wide uppercase">
          View case study
        </p>
      </div>
    </>
  );

  const caseStudySlug = item.caseStudy?.slug ?? item.slug;

  if (caseStudySlug) {
    return (
      <Link
        to={`/case-study/${caseStudySlug}`}
        className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 via-transparent to-black/40 shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_35px_60px_-15px_rgba(15,23,42,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 via-transparent to-black/40 shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_35px_60px_-15px_rgba(15,23,42,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {content}
    </a>
  );
};

const Portfolio = ({ page }) => {
  const showWeb = useMemo(
    () => !page || page === "web-development",
    [page]
  );
  const showApp = useMemo(
    () => !page || page === "app-development",
    [page]
  );

  const webProjects = useMemo(
    () => portfolioData.webDevelopment,
    []
  );
  const appProjects = useMemo(
    () => portfolioData.appDevelopment,
    []
  );

  const [webSliderRef] = useKeenSlider(
    {
      ...sliderOptions,
    },
    [createAutoSlider()]
  );

  const [appSliderRef] = useKeenSlider(
    {
      ...sliderOptions,
      rtl: true,
    },
    [createAutoSlider()]
  );

  return (
    <div id="portfolio" className="  py-[2rem] relative">
      <div className="blue-bg-shape rotate-[-45deg] top-[2rem] right-3 -z-10"></div>
      <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[-2rem] left-[-2rem] -z-10"></div>
      <div className="">
        <div className="flex flex-col items-center gap-5  ">
          <p className="gradient-text uppercase">Portfolio</p>
          <h2 className="heading text-center mb-5">Our Selected Projects</h2>
          {showWeb && (
            <div className="flex w-full flex-col gap-4 pt-4">
              <h3 className="wrapper text-left text-lg font-semibold uppercase tracking-[0.35em] sm:text-center">
                Web Development
              </h3>
              <div ref={webSliderRef} className="keen-slider">
                {webProjects.map((item) => (
                  <div key={item.id} className="keen-slider__slide">
                    <Card item={item} />
                  </div>
                ))}
              </div>
            </div>
          )}
          {showApp && (
            <div className="flex w-full flex-col gap-4 pt-8">
              <h3 className="wrapper text-left text-lg font-semibold uppercase tracking-[0.35em] sm:text-center">
                App Development
              </h3>
              <div ref={appSliderRef} className="keen-slider">
                {appProjects.map((item) => (
                  <div key={item.id} className="keen-slider__slide">
                    <Card item={item} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
