import React from "react";
import { workingProcess } from "../constants";

const WorkingProcess = () => {
  return (
    <section className="bg-[#f0effc] py-[3rem] relative">
      <div className="wrapper">
        <h1 data-aos="fade-up" className="heading text-center mb-5 md:mb-10">
          Our Working Process
        </h1>
        <div className="grid md:grid-cols-4 gap-5 md:gap-2">
          {workingProcess.map((process) => (
            <div
              data-aos="fade-up"
              className={`flex items-center flex-col text-center gap-2 ${
                process.id % 2 === 0 && "md:flex-col-reverse"
              }`}
              key={process.id}
            >
              <img
                loading="lazy"
                src={process.img}
                alt={process.title}
                className="h-[9rem] object-contain"
              />
              {process.id % 2 === 0 && (
                <p className="md:block hidden text-lg  ">
                  {process.description}
                </p>
              )}
              <h6 className="font-semibold text-xl">{process.title}</h6>
              {process.id % 2 !== 0 && (
                <p className="md:block hidden text-lg  ">
                  {process.description}
                </p>
              )}
              <p className="md:hidden text-lg  ">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
