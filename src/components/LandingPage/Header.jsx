import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { logo } from "../../constants";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="fixed z-40 top-0 left-0 w-full backdrop-blur-md">
      <div className="backdrop-blur-sm bg-black/40">
        <div className="flex w-full justify-between items-center gap-5 py-5 wrapper">
          <ScrollLink
            to="banner"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <img
              fetchPriority="high"
              src={logo}
              alt="logo"
              width="150"
              height="100"
              className="h-[4rem] object-contain"
            />
          </ScrollLink>
          <div
            data-aos="fade-down"
            className="hidden lg:flex items-center gap-10 text-white"
          >
            <Link
              to="/"
              className="text-md cursor-pointer"
              activeClass="active-link"
            >
              Home
            </Link>
            <Link to="/about-us" className="text-md cursor-pointer">
              About Us
            </Link>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              offset={-20}
              className="text-md cursor-pointer"
              activeClass="active-link"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-md cursor-pointer"
              activeClass="active-link"
            >
              Portfolio
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
              className="primary-btn"
            >
              Contact Us
            </ScrollLink>
          </div>
          <button
            title="Menu"
            className="block lg:hidden justify-self-end"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Hamburger
              color="#ffffff"
              size="26"
              toggled={isOpen}
              rounded
              toggle={setIsOpen}
            />
          </button>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="z-10 p-2"
      >
        <div className="mb-6 flex items-center justify-between pr-[.7rem] py-[.4rem]">
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            className="h-[3rem] object-contain"
          />
          <button
            title="Close"
            onClick={() => setIsOpen(false)}
            className="  text-[2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="py-4 px-7 flex flex-col gap-4">
          {/* {landingPageHeaderLinks.map(({ id, link, title }) => (
            <ScrollLink
              onClick={() => setIsOpen(false)}
              key={id}
              className="text-2xl font-medium duration-300 link"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              {title}
            </ScrollLink>
          ))} */}
          <ScrollLink
            to="banner"
            onClick={() => setIsOpen(false)}
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
            className="text-2xl font-medium link"
          >
            Home
          </ScrollLink>
          <Link to="/about-us" className="text-2xl font-medium link">
            About Us
          </Link>
          <ScrollLink
            to="services"
            onClick={() => setIsOpen(false)}
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
            className="text-2xl font-medium link"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            onClick={() => setIsOpen(false)}
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
            className="text-2xl font-medium link"
          >
            Contact Us
          </ScrollLink>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
