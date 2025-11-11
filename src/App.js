import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { lazy, memo, Suspense, useEffect } from "react";
import NormalizeSlash from "./components/NormalizeSlash";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { LoadingSpinner } from "./components/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home"));
const OurServices = lazy(() => import("./pages/OurServices"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const ServicePageLayout = lazy(() =>
  import("./components/Website/ServicePageLayout")
);
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const Industries = lazy(() => import("./pages/Industries"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogsDetail = lazy(() => import("./pages/BlogsDetail"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));

Aos.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
    <BrowserRouter>
      <SpinnerContextProvider>
        <LoadingSpinnerContext />
        <Suspense fallback={<LoadingSpinner />}>
          <ScrollToTop />
          <Toaster position="top-center" />
          <NormalizeSlash>
            <WhatsAppIcon />
            <Routes>
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="/" element={<Home />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<OurServices />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog-detail/:id" element={<BlogsDetail />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/case-study/:slug" element={<CaseStudyDetail />} />

              {/* Services Detail Routes with Layout */}
              <Route path="/services" element={<ServicePageLayout />}>
                <Route path=":serviceName" element={<ServiceDetails />} />
              </Route>

              {/* Generic Routes */}
              <Route
                path="/web-development"
                element={<LandingPage page={"web-development"} />}
              />
              <Route
                path="/app-development"
                element={<LandingPage page={"app-development"} />}
              />
            </Routes>
          </NormalizeSlash>
        </Suspense>
      </SpinnerContextProvider>
    </BrowserRouter>
  );
}

export default memo(App);

// scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
