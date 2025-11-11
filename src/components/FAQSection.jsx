import React, { useState } from "react";

const faqItems = [
  {
    question: "What services does Webora AI specialize in?",
    answer:
      "We design and build full-cycle digital solutions across web and mobile, supported by AI, blockchain, RPA, UI/UX, data science, cloud and more. Every engagement pairs strategic consulting with hands-on engineering so you can scale confidently.",
  },
  {
    question: "How do you approach new projects and product strategy?",
    answer:
      "Every engagement starts with discovery workshops to align on business goals, user journeys, and success metrics. From there, we craft a modular roadmap—covering design systems, architecture, implementation, and optimization—for transparent delivery.",
  },
  {
    question: "Can Webora AI support enterprise-scale transformations?",
    answer:
      "Yes. Our team has delivered 80+ AI and technology solutions for 120+ partners worldwide, including large-scale, multi-team implementations. We blend product strategy with DevOps, analytics, and change management to ensure enterprise readiness.",
  },
  {
    question: "What industries do you have experience in?",
    answer:
      "We have deep experience across fintech, healthcare, retail, logistics, hospitality, gaming, education, and mobility—adapting platforms for each industry's compliance, performance, and customer expectations.",
  },
  {
    question: "How do you ensure ongoing success after launch?",
    answer:
      "Our partnership extends beyond launch with growth analytics, A/B testing, performance tuning, and product iteration. We provide maintenance retainer options, dedicated squads, and knowledge handoffs tailored to your internal team.",
  },
  {
    question: "How can we start working together?",
    answer:
      "Book a consultation through our contact form or schedule a call. We will review your goals, explore solution possibilities, outline timelines, and propose a tailored engagement model ranging from discovery sprints to full product teams.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="wrapper py-16 md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 text-center">
        <p className="gradient-text uppercase tracking-[0.45em]">
          Frequently Asked Questions
        </p>
        <h2 className="heading text-3xl md:text-4xl">
          Answers to help you plan your next project with confidence
        </h2>
        <p className="mx-auto max-w-3xl text-base text-slate-500 md:text-lg">
          We’ve collected the most common topics clients ask while planning
          digital products and transformation initiatives. Need more specifics?
          Reach out and we’ll tailor guidance to your roadmap.
        </p>
      </div>
      <div className="mt-10 grid gap-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <article
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white px-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_25px_70px_-35px_rgba(15,23,42,0.35)]"
            >
              <button
                className="flex w-full items-center gap-4 py-5 text-left"
                type="button"
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
              >
                <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-lg font-semibold text-[#0f172a]">
                  {item.question}
                </span>
                <span
                  className={`inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  isOpen ? "max-h-64 pb-5" : "max-h-0"
                }`}
              >
                <p className="pl-14 pr-4 text-base leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;

