import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllPortfolioItems,
  getPortfolioByCategory,
  portfolioCategories,
} from "../data/portfolioData";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = useMemo(
    () => getPortfolioByCategory(activeCategory),
    [activeCategory]
  );

  const heroProjects = useMemo(() => getAllPortfolioItems().slice(0, 6), []);

  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Header />
      <section className="relative overflow-hidden pt-14">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f7f9fc] via-white to-[#eef2ff]"></div>
        <div className="absolute left-[-10%] top-[-20%] h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[180px]"></div>
        <div className="absolute right-[-15%] bottom-[-30%] h-[30rem] w-[30rem] rounded-full bg-[#6A58F7]/20 blur-[200px]"></div>
        <div className="wrapper relative z-10 flex flex-col gap-12 py-28">
          <div className="flex flex-col gap-6 text-center md:gap-8">
            <p className="gradient-text uppercase tracking-[0.45em]">
              Our Portfolio
            </p>
            <h1 className="heading mx-auto max-w-3xl text-4xl text-[#0f172a] md:text-5xl">
              High-impact digital experiences built for ambitious teams
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg">
              Explore the platforms, products, and immersive experiences we have
              delivered across industries. Every project combines strategy,
              design, engineering, and data to accelerate outcomes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {heroProjects.map((project) => (
              <article
                key={`hero-${project.slug}`}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-[1px] shadow-sm transition duration-500 hover:border-primary/60"
              >
                <div className="rounded-[1.6rem] border border-slate-100 bg-white p-6">
                  <div className="mb-8 h-40 overflow-hidden rounded-2xl border border-slate-100 bg-white">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs uppercase tracking-[0.45em] text-primary/70">
                    {project.category}
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-[#0f172a]">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
                    <span>Case Study</span>
                    <span>
                      {project.caseStudy?.slug
                        ? project.caseStudy.slug.replace(/-/g, " ")
                        : "Live Demo"}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrapper flex flex-col gap-10 py-16 md:py-20">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {portfolioCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full border px-6 py-2 text-xs font-medium uppercase tracking-[0.35em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                activeCategory === category.id
                  ? "border-primary bg-primary text-white shadow-lg shadow-primary/30"
                  : "border-slate-200 bg-white text-slate-500 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

const PortfolioCard = ({ project }) => {
  const caseStudySlug = project.caseStudy?.slug ?? project.slug;
  const cardContent = (
    <div className="flex flex-1 flex-col rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="relative h-48 overflow-hidden rounded-2xl border border-slate-100 bg-white">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent opacity-90"></div>
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-primary/80">
          {project.category}
        </span>
      </div>
      <div className="mt-6 flex flex-1 flex-col gap-3">
        <h3 className="text-xl font-semibold text-[#0f172a]">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-primary/70">
        <span className="inline-flex items-center gap-2">
          Case Study
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.4}
            stroke="currentColor"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25v-2.5a2 2 0 0 0-2-2h-6.5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.5a2 2 0 0 0 2-2v-2.5M14.25 12H21m0 0-2.25-2.25M21 12l-2.25 2.25"
            />
          </svg>
        </span>
      </div>
    </div>
  );

  if (caseStudySlug) {
    return (
      <Link
        to={`/case-study/${caseStudySlug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-[1px] transition duration-500 hover:-translate-y-2 hover:border-primary/60"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-[1px] transition duration-500 hover:-translate-y-2 hover:border-primary/60"
    >
      {cardContent}
    </a>
  );
};

export default PortfolioPage;
