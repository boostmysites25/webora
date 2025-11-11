import React, { useContext, useEffect, useRef, useState } from "react";
import { allServices, clientDetails } from "../constants";
import { BiCaretRight } from "react-icons/bi";
import { SpinnerContext } from "./SpinnerContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const GetInTouch = () => {
  return (
    <div id="contact" className="py-[3rem] relative">
      <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[2rem] right-3 -z-10"></div>
      <div className="red-g-shape bottom-[-2rem] left-[-2rem] -z-10 rotate-[-45deg]"></div>
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-stretch items-center gap-7">
        <div data-aos="fade-right" className="flex flex-col gap-5">
          <h1 className="heading text-center lg:text-start">
            Ready to Lead with Innovation and Drive Your Business Forward?
          </h1>
          <p className="description text-center lg:text-start">
            Reach out to discover how our tech solutions can propel your
            business forward.
          </p>
        </div>
        <InquiryForm />
      </div>
    </div>
  );
};

export default GetInTouch;

export const InquiryForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0].title);
  const dropdownRef = useRef(null);
  const { setSpinner } = useContext(SpinnerContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    // Handler for clicking outside of the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close the dropdown
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Service Needed: " + selectedService + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: clientDetails.email,
      subject: values.subject,
      body: emailBody,
      name: "Webora AI",
    };

    await fetch("https://send-mail-redirect-boostmysites.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Your message has been sent successfully!");
          reset();
          // navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div data-aos="fade-left" className="flex flex-col items-start gap-3 group">
      <p className="gradient-text uppercase">Let's connect</p>
      <div className="bg-gradient-to-b from-purple-600 to-purple-400 rounded-2xl w-fit p-7">
        <h2 className="text-3xl text-white font-medium">
          Connect With Our Team to Get Started!
        </h2>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="grid grid-cols-1 gap-3 mt-3"
        >
          <div className="grid lg:grid-cols-2 gap-3">
            <div className="">
              <label className="text-white">Name</label>
              <input
                type="text"
                className="w-full outline-none p-3 rounded-lg  "
                autoComplete="off"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Full name is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Full name is required";
                    }
                  },
                })}
              />
              <p className="">{errors.name?.message}</p>
            </div>
            <div className="">
              <label className="text-white">Email</label>
              <input
                type="email"
                className="w-full outline-none p-3 rounded-lg  "
                autoComplete="off"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Entered email is invalid",
                  },
                })}
              />
              <p className="">{errors.email?.message}</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-3">
            <div className="">
              <label className="text-white">Subject</label>
              <input
                type="text"
                className="w-full outline-none p-3 rounded-lg  "
                placeholder="Enter subject"
                {...register("subject", {
                  required: "Subject is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Subject is required";
                    }
                  },
                })}
              />
              <p className="">{errors.subject?.message}</p>
            </div>
            <div className="">
              <label className="text-white">Phone Number</label>
              <input
                type="tel"
                className="w-full outline-none p-3 rounded-lg  "
                autoComplete="off"
                placeholder="Enter your phone number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?[0-9]{10,15}$/,
                    message: "Entered phone number is invalid",
                  },
                })}
              />
              <p className="">{errors.phone?.message}</p>
            </div>
          </div>
          <div className="flex flex-col relative" ref={dropdownRef}>
            <label className="text-white">Service You Are Interested In</label>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="p-3 bg-background rounded-lg cursor-default flex justify-between items-center"
            >
              {selectedService}
              <BiCaretRight
                className={`${
                  dropdownOpen && "rotate-90"
                } transition-all duration-200 text-2xl text-primary`}
              />
            </div>
            {dropdownOpen && (
              <div
                name=""
                id=""
                className="outline-none rounded-lg overflow-hidden top-[5rem] absolute bg-gray-50 w-full"
              >
                {allServices.map((item) => (
                  <div
                    key={item.id}
                    className="hover:bg-primary/20 p-3 cursor-pointer"
                    value={item.title}
                    onClick={() => {
                      setSelectedService(item.title);
                      setDropdownOpen(false);
                    }}
                  >
                    <span className="">{item.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <label className="text-white">Message</label>
            <textarea
              type="text"
              rows="4"
              placeholder="Enter your message here"
              className="w-full outline-none p-3 rounded-lg  "
              autoComplete="off"
              {...register("message", {
                required: "Message is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Message is required";
                  }
                },
              })}
            />
            <p className="">{errors.message?.message}</p>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 bg-background border border-white text-primary px-5 py-3 rounded-full hover:bg-primary hover:text-white hover:-translate-y-1 duration-300 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
