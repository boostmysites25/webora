import { memo, useMemo } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  getCaseStudyBySlug,
  getRelatedCaseStudies,
} from "../data/portfolioData";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const caseStudy = useMemo(() => getCaseStudyBySlug(slug), [slug]);

  const otherStudies = useMemo(() => getRelatedCaseStudies(slug), [slug]);

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Header />
      <div className="relative overflow-hidden pt-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f7f9fc] via-white to-[#eef2ff]"></div>
        <div className="absolute top-[-12rem] right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-primary/20 blur-[160px]"></div>
        <div className="absolute bottom-[-10rem] left-[-4rem] h-[22rem] w-[22rem] rounded-full bg-[#6A58F7]/20 blur-[150px]"></div>
        <div className="wrapper relative z-10 flex flex-col gap-10 pt-32 pb-16">
          <button
            onClick={() => navigate(-1)}
            className="self-start rounded-full border border-slate-200 px-5 py-2 text-sm uppercase tracking-[0.2em] text-slate-500 transition hover:border-primary/40 hover:text-primary"
          >
            Back
          </button>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
              <p className="gradient-text text-xs uppercase tracking-[0.5em]">
                Case Study
              </p>
              <h1 className="heading text-4xl leading-tight text-[#0f172a] md:text-5xl">
                {caseStudy.title}
              </h1>
              <p className="text-lg text-slate-600 md:text-xl">
                {caseStudy.subtitle}
              </p>
              <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-1">
                <InfoChip label="Industry" value={caseStudy.industry} />
                {caseStudy.services?.length > 0 && (
                  <InfoChip
                    label="Services"
                    value={caseStudy.services.join(" · ")}
                  />
                )}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_30px_80px_-25px_rgba(15,23,42,0.2)]">
              <img
                src={caseStudy.heroImage}
                alt={`${caseStudy.title} hero`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent"></div>
            </div>
          </div>
          {caseStudy.metrics?.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudy.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-transparent to-[#f6f9ff] p-6 text-center shadow-sm"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-[#0f172a] md:text-3xl">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <section className="wrapper flex flex-col gap-12 pb-16 pt-4 md:pt-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="space-y-6">
            <SectionTitle eyebrow="Overview" title="Project Snapshot" />
            <p className="text-lg leading-relaxed text-slate-600">
              {caseStudy.overview}
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-transparent to-[#f6f9ff] p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0f172a]">
              Engagement Scope
            </h3>
            {caseStudy.services?.length > 0 && (
              <ul className="mt-4 space-y-3 text-slate-600">
                {caseStudy.services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/70"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <NarrativeBlock title="The Challenge" copy={caseStudy.challenge} />
          <NarrativeBlock title="Our Approach" copy={caseStudy.approach} />
          <NarrativeBlock title="Impact" copy={caseStudy.outcome} />
        </div>
      </section>

      {otherStudies.length > 0 && (
        <section className="wrapper flex flex-col gap-10 pb-24">
          <SectionTitle
            eyebrow="Next Projects"
            title="Explore More Case Studies"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {otherStudies.map((study) => (
              <Link
                key={study.slug}
                to={`/case-study/${study.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-primary/60"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={study.heroImage}
                    alt={study.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent opacity-90"></div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="text-xs uppercase tracking-[0.4em] text-primary/70">
                    {study.industry}
                  </p>
                  <h3 className="text-xl font-semibold text-[#0f172a]">
                    {study.title}
                  </h3>
                  <p className="text-sm text-slate-600">{study.subtitle}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.4em] text-primary/80">
                    View Study
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25v-2.5a2 2 0 0 0-2-2h-6.5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.5a2 2 0 0 0 2-2v-2.5M14.25 12H21m0 0-2.25-2.25M21 12l-2.25 2.25"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

const InfoChip = ({ label, value }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm">
    <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{label}</p>
    <p className="mt-3 text-base font-medium text-[#0f172a]">{value}</p>
  </div>
);

const SectionTitle = ({ eyebrow, title }) => (
  <div className="space-y-3">
    <p className="text-xs uppercase tracking-[0.6em] text-primary/70">
      {eyebrow}
    </p>
    <h2 className="heading text-3xl text-[#0f172a] md:text-4xl">{title}</h2>
  </div>
);

const NarrativeBlock = ({ title, copy }) => {
  const paragraphs = Array.isArray(copy) ? copy : [copy];
  return (
    <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-transparent to-[#f6f9ff] p-8 shadow-sm">
      <h3 className="text-lg font-semibold text-[#0f172a]">{title}</h3>
      <div className="mt-4 space-y-3 text-slate-600">
        {paragraphs.map((paragraph, index) => (
          <p key={`${title}-${index}`} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default memo(CaseStudyDetail);
