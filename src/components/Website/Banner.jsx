import React, { useEffect } from "react";
import vid from "../../assets/vids/banner.mp4";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import robot from "../../assets/ai-robot.png";
import gsap from "gsap";

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
    });

    // Add hover event listeners to pause and resume animation
    const robotElement = document.getElementById("robot");

    const handleMouseEnter = () => {
      tl.pause(); // Pause animation on hover
    };

    const handleMouseLeave = () => {
      tl.resume(); // Resume animation when hover ends
    };

    robotElement.addEventListener("mouseenter", handleMouseEnter);
    robotElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tl.kill(); // Clean up animation
      robotElement.removeEventListener("mouseenter", handleMouseEnter);
      robotElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div id="banner" className="min-h-screen banner relative">
      {/* <div id="banner" className="min-h-[calc(100vh+10rem)] banner relative"> */}
      <ReactPlayer
        url={vid}
        playing
        loop
        muted
        width="100%"
        height="100%"
        playsinline
        pip={false}
        playbackRate={0.4}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload noplaybackrate",
              disablePictureInPicture: true,
              playsinline: true,
            },
          },
        }}
        controls={false}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="absolute w-full h-fit left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 wrapper flex flex-col-reverse md:grid grid-cols-[60%_auto] items-center md:gap-10">
        <div
          data-aos="fade-right"
          className="flex w-full flex-col items-start justify-center relative z-10"
        >
          <p className="text-xl   tracking-wide text-white mt-2">
            Welcome to <span className="text-primary font-bold">Webora AI</span>
          </p>
          <h1 className="heading-1 text-white capitalize">
            Empowering Your Future with AI Innovation
          </h1>
          <Link to="/contact-us" className="primary-btn mt-5">
            Get Started Now
          </Link>
        </div>
        {/* <div className="lg:pt-0 pt-[10rem]">
        <Form />
        </div> */}
        <div data-aos="fade-left" className="md:flex hidden justify-center">
          <Link to="/contact-us" id="robot">
            <img
              src={robot}
              className="w-[15rem] object-contain relative z-0"
              alt="robot"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
