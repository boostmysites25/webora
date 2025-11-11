import React from "react";
import bgImg from "../assets/testimonial-bg.png";
import { useKeenSlider } from "keen-slider/react";
import { RiDoubleQuotesR } from "react-icons/ri";
import { testimonials } from "../constants";

const animation = { duration: 30000, easing: (t) => t };

const Testimonials = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 3,
      spacing: 30,
      origin: "center",
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 30,
        },
      },
      "(min-width: 769px)": {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
      "(min-width: 1550px)": {
        slides: {
          perView: 4,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div
      className="py-[3rem] mt-[5rem] mb-[3rem] relative bg-[#c4daf86f]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="blue-bg-shape left-0 top-0 rotate-45"></div>
      <div className="blue-bg-shape right-0 bottom-3 rotate-45"></div>
      <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-1/2 -z-10"></div>
      <div data-aos="fade-up" className="wrapper mb-[3rem]">
        <p className="uppercase z-10 relative mb-2 gradient-text">
          testimonials
        </p>
        <h1 className="heading z-10 relative text-center capitalize">
          What Our Clients Say
        </h1>
      </div>
      <div data-aos="fade-left" ref={sliderRef} className="keen-slider">
        {testimonials.concat(testimonials).map(({ id, img, title, name, description }, index) => (
          <div key={id} className="keen-slider__slide">
            <div className="flex flex-col items-center bg-background p-5 mx-2 rounded-xl h-full">
              {/* <img
                loading='lazy'
                src={img}
                alt="featured in"
                className="h-[7rem] w-[12rem] object-contain"
              /> */}
              <div className="w-full flex gap-4 items-center justify-between">
                <span className="text-primary text-3xl">★★★★★</span>
                <RiDoubleQuotesR className="text-7xl text-primary/20" />
              </div>
              <div className="h-full flex flex-col justify-between">
                <p className="description">" {description} "</p>
                <div className="w-full flex gap-3 items-center mt-4">
                  {/* <div className="min-w-[4.5rem] max-w-[4.5rem] min-h-[4.5rem] max-h-[4.5rem] rounded-full overflow-hidden bg-gray-300"></div> */}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-medium">{name}</h3>
                    <p className="text-sm text-wrap">{title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
