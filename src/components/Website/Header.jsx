import React from "react";
import { Link, useLocation } from "react-router-dom";
import { logo, websitePagesLinks } from "../../constants";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  return (
    <div className="fixed z-40 top-0 left-0 w-full backdrop-blur-md">
      <div className="backdrop-blur-sm bg-black/80">
        <div className="flex w-full justify-between items-center gap-5 py-5 wrapper">
          <Link to="/">
            <img
              fetchPriority="high"
              src={logo}
              alt="logo"
              width="150"
              height="100"
              className="h-[4rem] object-contain"
            />
          </Link>
          <div className="hidden lg:flex text-white items-center gap-10">
            {websitePagesLinks.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                className={`text-md cursor-pointer ${
                  pathname === link.link && "active-link"
                }`}
              >
                {link.title}
              </Link>
            ))}
            <div className="relative group text-md">
              <button className="text-md cursor-pointer">Company</button>
              <div className="absolute overflow-hidden bg-background flex flex-col top-[120%] -left-3/4 w-[15rem] translate-x-[100%] group-hover:translate-x-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link
                  to="/about-us"
                  className="hover:bg-primary/15 text-black px-5 py-3"
                >
                  About Us
                </Link>
                <Link
                  to="/blogs"
                  className="hover:bg-primary/15 text-black px-5 py-3"
                >
                  Blogs
                </Link>
              </div>
            </div>
            <Link to="/contact-us" className="primary-btn">
              Contact Us
            </Link>
          </div>
          <button
            title="Menu"
            className="block lg:hidden justify-self-end !text-white"
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
          {websitePagesLinks.map(({ id, link, title }) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={id}
              className="text-2xl font-medium duration-300 link"
              to={link}
            >
              {title}
            </Link>
          ))}
          <Link
            to="/about-us"
            className="text-2xl font-medium duration-300 link"
          >
            About Us
          </Link>
          <Link to="/blogs" className="text-2xl font-medium duration-300 link">
            Blogs
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/contact-us"
            className="text-2xl font-medium duration-300 link"
          >
            Contact Us
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
