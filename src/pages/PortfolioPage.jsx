import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllPortfolioItems,
  getPortfolioByCategory,
} from "../data/portfolioData";
import {
  FiMonitor,
  FiSmartphone,
  FiShoppingBag,
  FiCpu,
  FiActivity,
  FiHexagon,
  FiMessageSquare,
  FiGrid,
} from "react-icons/fi";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";

const highlightedCategories = [
  {
    id: "web-development",
    label: "Web Development",
    tagline: "Conversion-led marketing sites & robust platforms",
    accent: "from-[#6848FF] to-[#A855F7]",
  },
  {
    id: "app-development",
    label: "App Development",
    tagline: "Native & cross-platform apps engineered for scale",
    accent: "from-[#06B6D4] to-[#3B82F6]",
  },
  {
    id: "ecommerce-websites",
    label: "E-commerce",
    tagline: "High-performing storefronts with seamless checkout",
    accent: "from-[#F97316] to-[#F43F5E]",
  },
  {
    id: "blockchain",
    label: "Blockchain",
    tagline: "Web3 products, NFT utilities & DeFi dashboards",
    accent: "from-[#22D3EE] to-[#818CF8]",
  },
  {
    id: "ai",
    label: "Artificial Intelligence",
    tagline: "Applied AI tools, copilots & automation suites",
    accent: "from-[#0EA5E9] to-[#6366F1]",
  },
  {
    id: "game-development",
    label: "Game Development",
    tagline: "Immersive multiplayer, casual & metaverse builds",
    accent: "from-[#FACC15] to-[#FB7185]",
  },
  {
    id: "chatbot",
    label: "Chatbots",
    tagline: "Conversational AI agents for support & growth",
    accent: "from-[#34D399] to-[#10B981]",
  },
];

const categoryBackgrounds = {
  "web-development":
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
  "app-development":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  "ecommerce-websites":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  blockchain:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  ai: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
  "game-development":
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
  chatbot:
    "https://images.unsplash.com/photo-1526378722484-cc5c7100c84f?auto=format&fit=crop&w=900&q=80",
};

const categoryIcons = {
  "web-development": FiMonitor,
  "app-development": FiSmartphone,
  "ecommerce-websites": FiShoppingBag,
  blockchain: FiCpu,
  ai: FiActivity,
  "game-development": FiHexagon,
  chatbot: FiMessageSquare,
};

const getLiveProjectLink = (project) => {
  if (project.category === "App Development") {
    return project.androidLink || project.iosLink || project.link;
  }
  return project.link;
};

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const detailSectionRef = useRef(null);

  const heroProjects = useMemo(() => getAllPortfolioItems().slice(0, 6), []);

  const serviceCategories = useMemo(
    () =>
      highlightedCategories.map((category) => {
        const projects = getPortfolioByCategory(category.id) ?? [];
        return {
          ...category,
          projects,
          cover: projects[0]?.image ?? categoryBackgrounds[category.id] ?? null,
        };
      }),
    []
  );

  const activeCategoryData = serviceCategories.find(
    (category) => category.id === activeCategory
  );

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    requestAnimationFrame(() => {
      detailSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Header />
      {/* <section className="relative overflow-hidden pt-14">
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
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-[1px] shadow-sm transition duration-500 hover:-translate-y-1 hover:border-primary/60"
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
                  <div className="mt-6 flex flex-wrap gap-3">
                    {getLiveProjectLink(project) &&
                      getLiveProjectLink(project) !== "#" && (
                        <a
                          href={getLiveProjectLink(project)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-full bg-[#0f172a] px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-primary"
                        >
                          View Project
                        </a>
                      )}
                    {project.caseStudy?.slug && (
                      <Link
                        to={`/case-study/${project.caseStudy.slug}`}
                        className="inline-flex items-center justify-center rounded-full border border-primary/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary transition hover:border-primary hover:bg-primary/5"
                      >
                        Case Study
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="wrapper flex flex-col gap-10 py-16 md:py-20">
        <div className="flex flex-col gap-6 text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-primary">
            Services & Expertise
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Choose a capability to explore the work behind it
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-500 md:text-lg">
            Each category highlights production-ready solutions crafted by our
            in-house team. Click to reveal live launches, product demos, and
            companion case studies.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-left transition duration-500 hover:-translate-y-2 hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                activeCategory === category.id
                  ? "ring-1 ring-primary/50"
                  : "ring-0"
              }`}
            >
             
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 opacity-90 group-hover:opacity-0"></div>
              <div className="relative flex flex-1 flex-col gap-4">
                <span
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} text-white shadow-lg shadow-primary/30 transition duration-500 group-hover:scale-110`}
                >
                  {(() => {
                    const Icon =
                      categoryIcons[category.id] ??
                      FiGrid;
                    return <Icon className="h-7 w-7" />;
                  })()}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold">{category.label}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {category.tagline}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  <span>{category.projects.length} Projects</span>
                  <span className="inline-flex items-center gap-2 text-primary">
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.6}
                      stroke="currentColor"
                      className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
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
            </button>
          ))}
        </div>
      </section>

      <section
        ref={detailSectionRef}
        className="bg-slate-50 py-20 text-[#0f172a]"
      >
        <div className="wrapper flex flex-col gap-10">
          {activeCategoryData ? (
            <>
              <div className="flex flex-col gap-4 text-center">
                <p className="text-xs uppercase tracking-[0.45em] text-primary">
                  {activeCategoryData.label}
                </p>
                <h3 className="text-3xl font-semibold md:text-4xl">
                  Projects we&apos;ve launched under this capability
                </h3>
                <p className="mx-auto max-w-3xl text-base text-slate-500 md:text-lg">
                  Tap into live builds, shipped apps, and production-grade
                  experiences. Each card includes a direct project link alongside
                  an in-depth case study for stakeholders who need the story.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {activeCategoryData.projects.map((project) => (
                  <PortfolioCard key={project.slug} project={project} />
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 text-center">
              <h3 className="text-2xl font-semibold">
                Choose a service to view related launches
              </h3>
              <p className="max-w-2xl text-base text-slate-500">
                Pick any capability above to instantly reveal the projects,
                store listings, and case studies that prove our execution.
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

const PortfolioCard = ({ project }) => {
  const caseStudySlug = project.caseStudy?.slug ?? project.slug;
  const liveLink = getLiveProjectLink(project);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-[1px] transition duration-500 hover:-translate-y-2 hover:border-primary/60">
      <div className="flex flex-1 flex-col rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="relative h-48 overflow-hidden rounded-2xl border border-slate-100 bg-white">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 via-transparent to-transparent opacity-90"></div>
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
        <div className="mt-6 flex flex-col gap-3">
          {liveLink && liveLink !== "#" && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-white transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              View Project
            </a>
          )}
          {caseStudySlug && (
            <Link
              to={`/case-study/${caseStudySlug}`}
              className="inline-flex flex-1 items-center justify-center rounded-full border border-primary/30 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-primary transition hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5"
            >
              Case Study
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
