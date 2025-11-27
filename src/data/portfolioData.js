const importAll = (r) => {
  const images = {};
  r.keys().forEach((key) => {
    const cleanedKey = key.replace("./", "");
    const value = r(key);
    images[cleanedKey] = value?.default ?? value;
  });
  return images;
};

const portfolioImages = importAll(
  require.context("../assets/portfolio", true, /\.(png|jpe?g|webp)$/)
);

const portfolioImage = (path) => portfolioImages[path];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^\w]+/g, "-")
    .replace(/^-+|-+$/g, "");

const defaultCaseStudy = (item, extras = {}) => {
  const slug = extras.slug ?? slugify(item.title);
  return {
    slug,
    title: item.title,
    subtitle: extras.subtitle ?? item.description,
    heroImage: extras.heroImage ?? item.image,
    industry: extras.industry ?? item.category,
    services:
      extras.services ??
      [
        item.category,
        ...(item.technologies ? ["Technology Enablement"] : []),
      ],
    overview:
      extras.overview ??
      `${item.description}. We partnered with ${item.title} to translate their vision into a polished digital experience. The project focused on delivering a modern interface, resilient architecture, and measurable business outcomes.`,
    metrics:
      extras.metrics ??
      [
        { label: "Launch Timeline", value: "8-12 weeks" },
        { label: "Engagement Lift", value: "↑ 120%" },
        { label: "Performance", value: "Optimized" },
      ],
    challenge:
      extras.challenge ??
      `The primary challenge for ${item.title} was to create a digital presence that accurately reflected their brand value while ensuring a seamless user experience for their target audience.`,
    approach:
      extras.approach ??
      [
        "Conducted in-depth market research to identify key user pain points.",
        "Developed a scalable and modular architecture to support future growth.",
        "Implemented best practices for SEO, accessibility, and performance optimization.",
      ],
    outcome:
      extras.outcome ??
      [
        "Successfully launched a robust platform that meets modern web standards.",
        "Improved user engagement and reduced bounce rates significantly.",
        "Established a strong digital foundation for future marketing initiatives.",
      ],
    testimonial: extras.testimonial ?? null,
    testimonialAuthor: extras.testimonialAuthor ?? null,
  };
};

const enrich = (item, extras = {}) => ({
  ...item,
  slug: extras.slug ?? slugify(item.title),
  caseStudy: defaultCaseStudy(item, extras.caseStudy ?? extras),
});

export const portfolioData = {
  webDevelopment: [
    enrich({
      id: 2,
      title: "ThinkRealty",
      description:
        "Premium property portal for the UAE market with advanced property filtering, project highlights, and multilingual support",
      image: portfolioImage("web-development/think-reality.webp"),
      link: "https://thinkrealty.ae",
      category: "Web Development",
      caseStudy: {
        overview:
          "ThinkRealty needed a sophisticated digital platform to showcase premium real estate in the competitive UAE market. We built a high-performance portal that simplifies property discovery through advanced filtering, interactive maps, and immersive project showcases.",
        challenge:
          "The UAE real estate market is flooded with listings. ThinkRealty needed to stand out with a user-centric design that handled complex data (amenities, location, pricing) without overwhelming the user, while also supporting both English and Arabic audiences seamlessly.",
        approach: [
          "Designed a clean, luxury-focused UI that emphasizes high-quality imagery.",
          "Implemented a robust search engine with multi-parameter filtering for precise results.",
          "Developed a custom CMS integration to allow agents to update listings in real-time.",
        ],
        outcome: [
          "30% increase in lead generation within the first 3 months of launch.",
          "Significantly reduced bounce rate due to intuitive navigation and fast load times.",
          "Seamless multilingual experience praised by international and local clients.",
        ],
        metrics: [
          { label: "Properties", value: "500+" },
          { label: "Lead Gen", value: "↑ 30%" },
          { label: "Load Time", value: "< 1.5s" },
        ],
        services: ["Web Development", "UI/UX Design", "CMS Integration"],
      },
    }),
    enrich({
      id: 3,
      title: "Akash Mega Mart",
      description:
        "E-commerce platform for retail products with seamless checkout and product filtering",
      image: portfolioImage("web-development/akash-mega-mart.webp"),
      link: "https://akashmegamart.com/",
      category: "Web Development",
      caseStudy: {
        overview:
          "Akash Mega Mart aims to bring the supermarket experience online. We developed a robust e-commerce platform capable of handling thousands of SKUs, ensuring a smooth shopping journey from product discovery to secure checkout.",
        challenge:
          "Managing a vast inventory with diverse categories while maintaining site speed and ease of navigation was critical. Additionally, the checkout process needed to be frictionless to minimize cart abandonment.",
        approach: [
          "Utilized a scalable e-commerce framework to handle large product catalogs efficiently.",
          "Implemented smart search and filtering to help users find products instantly.",
          "Optimized the mobile experience to capture the growing segment of mobile shoppers.",
        ],
        outcome: [
          "Streamlined inventory management for the backend team.",
          "25% reduction in cart abandonment rate due to optimized checkout flow.",
          "Positive customer feedback on the ease of finding and ordering daily essentials.",
        ],
        metrics: [
          { label: "SKUs", value: "10k+" },
          { label: "Uptime", value: "99.9%" },
          { label: "Mobile Users", value: "65%" },
        ],
        services: ["E-commerce Development", "Payment Integration", "Mobile Optimization"],
      },
    }),
    enrich({
      id: 4,
      title: "Midwam",
      description:
        "Creative technology and innovation company combining immersive visuals with clean interface for exhibitions, VR, AR, and live experiences",
      image: portfolioImage("web-development/midwam.webp"),
      link: "https://www.midwam.com/en/about",
      category: "Web Development",
      caseStudy: {
        overview:
          "Midwam is at the forefront of immersive technology. Their website needed to reflect this innovation. We created a visually stunning, motion-rich digital experience that serves as a canvas for their VR, AR, and exhibition work.",
        challenge:
          "Balancing heavy visual assets (videos, 3D elements) with website performance. The site needed to wow visitors without causing frustrating load delays.",
        approach: [
          "Employed advanced lazy loading and asset optimization techniques.",
          "Used WebGL and custom animations to create an interactive, 'alive' feel.",
          "Designed a dark-themed, cinematic UI to let the colorful portfolio content pop.",
        ],
        outcome: [
          "Award-winning digital presence that positions Midwam as a market leader.",
          "Increased engagement time as users explore the interactive elements.",
          "Successfully showcases complex tech capabilities in an accessible way.",
        ],
        metrics: [
          { label: "Visuals", value: "Immersive" },
          { label: "Awards", value: "Multiple" },
          { label: "Tech Stack", value: "WebGL/React" },
        ],
        services: ["Creative Development", "WebGL", "Interactive Design"],
      },
    }),
    enrich({
      id: 5,
      title: "5G High Speed Internet",
      description:
        "Promotional website for broadband service provider with plan comparisons, service availability checkers, and inquiry forms",
      image: portfolioImage("web-development/5ghomes.webp"),
      link: "#",
      category: "Web Development",
    }),
    enrich({
      id: 6,
      title: "Autopilot",
      description:
        "Marketing automation platform allowing businesses to automate customer journeys using visual flowcharts with modern animations",
      image: portfolioImage("web-development/Autopilot.png"),
      link: "https://autopilot.com",
      category: "Web Development",
      caseStudy: {
        overview:
          "Autopilot simplifies complex marketing automation. We helped build a frontend that makes designing customer journeys as easy as drawing on a whiteboard, using a drag-and-drop interface that is both powerful and intuitive.",
        challenge:
          "Translating complex logic (triggers, conditions, actions) into a simple, visual UI. The interface needed to be responsive and error-proof for non-technical marketers.",
        approach: [
          "Developed a custom canvas engine for the drag-and-drop journey builder.",
          "Implemented real-time validation to guide users as they build flows.",
          "Focused on micro-interactions to make the tool feel responsive and tactile.",
        ],
        outcome: [
          "Drastically reduced the learning curve for new users.",
          "Enabled marketers to launch campaigns 3x faster than traditional tools.",
          "High user retention rates due to the enjoyable product experience.",
        ],
        metrics: [
          { label: "Efficiency", value: "3x Faster" },
          { label: "User Base", value: "Global" },
          { label: "NPS Score", value: "70+" },
        ],
        services: ["SaaS Development", "Frontend Engineering", "UX Design"],
      },
    }),
    enrich({
      id: 7,
      title: "Gigzio",
      description:
        "Powerful job search engine for blue-collar and gig workers with location-based job discovery and mobile-optimized layout",
      image: portfolioImage("web-development/Gigzio.png"),
      link: "https://gigzio.com",
      category: "Web Development",
      caseStudy: {
        overview:
          "Gigzio connects gig workers with local opportunities. We built a location-first platform that allows users to find jobs nearby instantly, with a focus on speed and simplicity for mobile users on the go.",
        challenge:
          "Blue-collar job seekers often need immediate work and may rely on mobile data. The platform needed to be extremely lightweight, fast, and require minimal steps to apply.",
        approach: [
          "Adopted a mobile-first design philosophy with large, touch-friendly controls.",
          "Integrated geolocation services for one-tap 'jobs near me' functionality.",
          "Simplified the application process to a few clicks, removing resume barriers where possible.",
        ],
        outcome: [
          "Rapid adoption among the target demographic in pilot cities.",
          "High application completion rates due to the simplified flow.",
          "Empowered thousands of workers to find flexible income opportunities.",
        ],
        metrics: [
          { label: "Platform", value: "Mobile First" },
          { label: "Speed", value: "Instant" },
          { label: "Growth", value: "Viral" },
        ],
        services: ["Platform Development", "Geolocation", "Mobile UX"],
      },
    }),
    enrich({
      id: 8,
      title: "FE Group",
      description:
        "Global industrial solutions provider with multilingual support, animation-driven UI, and structured service flows",
      image: portfolioImage("web-development/FE Group.png"),
      link: "#",
      category: "Web Development",
    }),
    enrich({
      id: 9,
      title: "The Ladders",
      description:
        "Executive-level job opportunities platform balancing editorial content, career advice, and job listings",
      image: portfolioImage("web-development/The Ladders.png"),
      link: "https://theladders.com",
      category: "Web Development",
    }),
    enrich({
      id: 10,
      title: "Huge Inc",
      description:
        "Creative agency portfolio showcasing digital experiences with storytelling, micro-interactions, and parallax visuals",
      image: portfolioImage("web-development/Huge Inc.png"),
      link: "https://hugeinc.com",
      category: "Web Development",
    }),
    enrich({
      id: 11,
      title: "CodeHelp",
      description:
        "Learning platform offering coding tutorials, mentorship, and job prep with community focus and structured courses",
      image: portfolioImage("web-development/CodeHelp.png"),
      link: "https://codehelp.in",
      category: "Web Development",
    }),
    enrich({
      id: 12,
      title: "Spray (Bluestar)",
      description:
        "AI-powered spray product showcase with slick transitions, 3D mockups, and dark theme for maximum visual impact",
      image: portfolioImage("web-development/Spray (Bluestar).png"),
      link: "https://spray.com",
      category: "Web Development",
    }),
    enrich({
      id: 13,
      title: "Arcane Mirage",
      description:
        "Game studio and creative agency with atmospheric design elements, immersive animations, and character visuals",
      image: portfolioImage("web-development/Arcane Mirage.png"),
      link: "https://arcanemirage.com",
      category: "Web Development",
    }),
    enrich({
      id: 14,
      title: "MasterShala",
      description:
        "WordPress-based EdTech platform offering online courses, video lectures, and certification programs",
      image: portfolioImage("web-development/MasterShala.png"),
      link: "https://mastershala.com",
      category: "Web Development",
    }),
    enrich({
      id: 15,
      title: "Mantra Dhwani",
      description:
        "Cultural learning platform promoting Indian Vedic chants and spiritual mantras with guided audio and video content",
      image: portfolioImage("web-development/Mantra Dhwani.png"),
      link: "https://mantradhwani.com",
      category: "Web Development",
    }),
    enrich({
      id: 16,
      title: "Educateast",
      description:
        "Educational services platform providing structured programs and resources for regional educational development",
      image: portfolioImage("web-development/Educateast.png"),
      link: "#",
      category: "Web Development",
    }),
    enrich({
      id: 17,
      title: "Guyariv",
      description:
        "EdTech platform focused on self-improvement and career-building courses with interactive modules and clean UI",
      image: portfolioImage("web-development/Guyariv.png"),
      link: "https://guyariv.com",
      category: "Web Development",
    }),
    enrich({
      id: 18,
      title: "Backstage English RC",
      description:
        "English language training platform for IELTS, TOEFL, and spoken English courses with mobile-optimized learning",
      image: portfolioImage("web-development/Backstage English RC.png"),
      link: "#",
      category: "Web Development",
    }),
    enrich({
      id: 19,
      title: "Of Course TN",
      description:
        "Tamil Nadu-based online education platform for government schemes, competitive exams, and digital skilling",
      image: portfolioImage("web-development/Of Course TN.png"),
      link: "https://ofcoursetn.com",
      category: "Web Development",
    }),
    enrich({
      id: 20,
      title: "Messina's Catering",
      description:
        "New Orleans-based catering company website with online event booking, gallery sliders, and elegant menu sections",
      image: portfolioImage("web-development/Messina’s Catering.png"),
      link: "https://messinascatering.com",
      category: "Web Development",
    }),
    enrich({
      id: 21,
      title: "CoffeeLavka Express Track",
      description:
        "Real-Time Coffee Order Tracking Platform with location-based services and mobile-first layout",
      image: portfolioImage(
        "web-development/CoffeeLavka Express Track – Real-Time Coffee Order Tracking Platform.jpg"
      ),
      link: "#",
      category: "Web Development",
    }),
    enrich({
      id: 22,
      title: "Crave Kitchen",
      description:
        "Digital food hall platform with online food ordering, menu exploration, and delivery integration",
      image: portfolioImage(
        "web-development/Crave Kitchen – Digital Food Hall Platform.png"
      ),
      link: "https://cravekitchen.com",
      category: "Web Development",
    }),
    enrich({
      id: 23,
      title: "Fashion Journey Navigator",
      description:
        "Personalized style discovery platform with product galleries and lookbook-style pages",
      image: portfolioImage(
        "web-development/Fashion Journey Navigator – Personalized Style Discovery Platform.jpg"
      ),
      link: "#",
      category: "Web Development",
    }),
    enrich({
      id: 24,
      title: "Interview Pro",
      description:
        "Professional interview scheduling platform with structured booking flows and candidate preparation resources",
      image: portfolioImage(
        "web-development/Interview Pro – Professional Interview Scheduling & Management Platform.jpg"
      ),
      link: "#",
      category: "Web Development",
    }),
    enrich({
      id: 25,
      title: "Mediverse Connect AI",
      description:
        "AI-powered healthcare networking platform with telemedicine and digital health solutions",
      image: portfolioImage(
        "web-development/Mediverse Connect AI – AI-Powered Healthcare Networking Platform.jpg"
      ),
      link: "#",
      category: "Web Development",
    }),
    enrich({
      id: 26,
      title: "StreamVerse",
      description:
        "Smart rental management platform with virtual tours, smart contracts, and predictive analytics",
      image: portfolioImage(
        "web-development/StreamVerse – Smart Rental Management Platform.jpg"
      ),
      link: "#",
      category: "Web Development",
    }),
    enrich({
      id: 27,
      title: "UPSC Aids",
      description:
        "Personalized mentorship and UPSC preparation dashboard with structured learning programs",
      image: portfolioImage(
        "web-development/UPSC Aids – Personalized Mentorship & UPSC Preparation Dashboard.jpg"
      ),
      link: "#",
      category: "Web Development",
    }),
  ],
  ecommerceWebsites: [
    enrich({
      id: 1,
      title: "Alfa China",
      description:
        "B2B import/export platform focused on Chinese products with real-time product listings and supplier directories",
      image: portfolioImage("ecommerce-websites/Alfa China.png"),
      link: "#",
      category: "E-commerce Websites",
    }),
    enrich({
      id: 2,
      title: "Bhola Factory",
      description:
        "Premium Indian ethnic wear brand with full-scale WooCommerce backend and custom category pages",
      image: portfolioImage("ecommerce-websites/Bhola Factory.png"),
      link: "https://bholafactory.com",
      category: "E-commerce Websites",
    }),
    enrich({
      id: 3,
      title: "Davis Grill",
      description:
        "Restaurant e-commerce with online food ordering, menu exploration, and delivery integration",
      image: portfolioImage("ecommerce-websites/Davis Grill.png"),
      link: "#",
      category: "E-commerce Websites",
    }),
    enrich({
      id: 4,
      title: "Mucon Factory",
      description:
        "Industrial product catalog and inquiry platform for components and machinery with technical filtering",
      image: portfolioImage("ecommerce-websites/Mucon Factory.png"),
      link: "https://muconfactory.com",
      category: "E-commerce Websites",
    }),
    enrich({
      id: 5,
      title: "MyTe Fashion",
      description:
        "Youthful, vibrant shopping experience with product galleries and lookbook-style pages",
      image: portfolioImage("ecommerce-websites/MyTe Fashion.png"),
      link: "https://mytefashion.com",
      category: "E-commerce Websites",
    }),
    enrich({
      id: 6,
      title: "Banjaaran",
      description:
        "High-end footwear label blending traditional Indian craftsmanship with modern e-commerce",
      image: portfolioImage("ecommerce-websites/Banjaaran.png"),
      link: "#",
      category: "E-commerce Websites",
    }),
    enrich({
      id: 7,
      title: "GullyLabs",
      description:
        "Urban streetwear platform with bold designs, seasonal collections, and fast browsing",
      image: portfolioImage("ecommerce-websites/GullyLabs.png"),
      link: "https://gullylabs.com",
      category: "E-commerce Websites",
    }),
    enrich({
      id: 8,
      title: "Nickron India",
      description:
        "Sleek storefront for appliances and electrical products with product demos and warranty details",
      image: portfolioImage("ecommerce-websites/Nickron India.png"),
      link: "https://nickronindia.com",
      category: "E-commerce Websites",
    }),
    enrich({
      id: 9,
      title: "Official DAPP",
      description:
        "Edgy, design-forward e-commerce space for fashion-forward youth with limited edition releases",
      image: portfolioImage("ecommerce-websites/Official DAPP.png"),
      link: "https://officialdapp.com",
      category: "E-commerce Websites",
    }),
  ],
  appDevelopment: [
    enrich({
      id: 1,
      title: "Akash Mega Mart",
      description:
        "User-friendly mobile shopping platform for groceries, fashion items, electronics, and household products with smooth UI and secure checkout",
      image: portfolioImage("app-development/akash_mega_mart-app.webp"),
      link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
      category: "App Development",
      subcategory: "E-commerce",
    }),
    enrich({
      id: 2,
      title: "Vetlab",
      description:
        "Diagnostic and health service app for veterinary clinics and pet owners with digital reports and sample pickup scheduling",
      image: portfolioImage("app-development/Vetlab.png"),
      link: "https://vetlab.com",
      category: "App Development",
      subcategory: "Health / Veterinary",
    }),
    enrich({
      id: 3,
      title: "VetOnline",
      description:
        "Telemedicine app allowing pet owners to consult licensed veterinarians through chat or video calls with medical history tracking",
      image: portfolioImage("app-development/VetOnline.png"),
      link: "#",
      category: "App Development",
      subcategory: "Health / Veterinary / Telemedicine",
    }),
    enrich({
      id: 4,
      title: "Sample Collector",
      description:
        "App for diagnostic labs and field agents to coordinate sample collections with route management and real-time notifications",
      image: portfolioImage("app-development/Sample Collector.png"),
      link: "#",
      category: "App Development",
      subcategory: "Health / Diagnostics",
    }),
    enrich({
      id: 5,
      title: "Feelit",
      description:
        "Mood-based social media platform where users post thoughts, stories, and images based on emotions for mental wellness",
      image: portfolioImage("app-development/feelit_app.webp"),
      link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
      category: "App Development",
      subcategory: "Social Networking",
    }),
    enrich({
      id: 6,
      title: "Eva People App",
      description:
        "HR and wellness platform helping companies monitor employee satisfaction and performance with survey tools and analytics",
      image: portfolioImage("app-development/Eva People App.webp"),
      link: "https://evapeople.com",
      category: "App Development",
      subcategory: "Corporate / HR",
    }),
    enrich({
      id: 7,
      title: "Eva Internships",
      description:
        "App helping students explore, apply, and manage internships worldwide with listings and mentorship tools",
      image: portfolioImage("app-development/Eva Internships.webp"),
      link: "#",
      category: "App Development",
      subcategory: "Education / Career",
    }),
    enrich({
      id: 8,
      title: "Eva Training Certificates",
      description:
        "Digital certificate management app for companies and learners to issue, store, and validate training credentials",
      image: portfolioImage("app-development/Eva Training Certificates.webp"),
      link: "#",
      category: "App Development",
      subcategory: "Education / Certification",
    }),
    enrich({
      id: 9,
      title: "Hayaty (iOS & Android)",
      description:
        "Healthcare and lifestyle management app for patients and caregivers with medication reminders and health records",
      image: portfolioImage("app-development/Hayaty.webp"),
      link: "#",
      iosLink: "#",
      androidLink: "#",
      category: "App Development",
      subcategory: "Health / Wellness",
    }),
    enrich({
      id: 10,
      title: "Naseh (iOS & Android - ناصح)",
      description:
        "Islamic guidance and personal development app featuring daily motivational content and spiritual reminders",
      image: portfolioImage("app-development/Naseh (iOS - ناصح).webp"),
      link: "https://naseh.com",
      iosLink: "https://apps.apple.com/app/naseh",
      androidLink: "https://play.google.com/store/apps/details?id=com.naseh.app",
      category: "App Development",
      subcategory: "Religion / Lifestyle",
    }),
    enrich({
      id: 11,
      title: "Lafi (iOS - لافي)",
      description:
        "Premium Arabic-language shopping platform with hand-picked product categories and modern UI",
      image: portfolioImage("app-development/Lafi.webp"),
      link: "#",
      category: "App Development",
      subcategory: "E-commerce",
    }),
    enrich({
      id: 12,
      title: "Rentop",
      description:
        "Marketplace app allowing users to rent out or lease items with product listings, booking calendar, and payment gateway",
      image: portfolioImage("app-development/rentop.webp"),
      link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
      category: "App Development",
      subcategory: "Marketplace / Rentals",
    }),
    enrich({
      id: 13,
      title: "ICCB Prayer Times",
      description:
        "App for Muslim community providing accurate prayer times, Qibla direction, and mosque announcements",
      image: portfolioImage("app-development/ICCBrossard.webp"),
      link: "https://iccbrossard.com",
      category: "App Development",
      subcategory: "Religion / Utilities",
    }),
    enrich({
      id: 14,
      title: "Evans Francis Christian App",
      description:
        "Christian app featuring sermon videos, devotional messages, and Bible resources for spiritual growth",
      image: portfolioImage("app-development/Evans Francis Christian App.webp"),
      link: "https://evansfrancis.com",
      category: "App Development",
      subcategory: "Religion / Education",
    }),
    enrich({
      id: 15,
      title: "Zigna AutoSnap",
      description:
        "Real estate photography app helping agents capture professional property photos with guided photography and editing",
      image: portfolioImage("app-development/Zigna AutoSnap.webp"),
      link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
      category: "App Development",
      subcategory: "Real Estate / Photography",
    }),
    enrich({
      id: 16,
      title: "Klikomics",
      description:
        "Digital comic reading app with animated panels, original content, and smooth navigation for graphic novel enthusiasts",
      image: portfolioImage("app-development/klikomics.webp"),
      link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
      category: "App Development",
      subcategory: "Entertainment / Comics",
    }),
    enrich({
      id: 17,
      title: "Dubai Travel Guide by eTips",
      description:
        "Digital travel companion for Dubai tourists with offline maps, sightseeing highlights, and audio guides",
      image: portfolioImage("app-development/Dubai Travel Guide by eTips.webp"),
      link: "#",
      category: "App Development",
      subcategory: "Travel / Tourism",
    }),
    enrich({
      id: 18,
      title: "Planta",
      description:
        "Wellness-focused app helping users cultivate healthy lifestyle habits with reminders and progress tracking",
      image: portfolioImage("app-development/Planta - Plant & Garden Care.webp"),
      link: "https://planta.com",
      category: "App Development",
      subcategory: "Health / Wellness",
    }),
    enrich({
      id: 19,
      title: "Serviz",
      description:
        "Service aggregator platform connecting users with skilled professionals for home services with transparent pricing",
      image: portfolioImage("app-development/Serviz.webp"),
      link: "https://serviz.com",
      category: "App Development",
      subcategory: "On-Demand Services / Home Services",
    }),
    enrich({
      id: 20,
      title: "Kaamwali Bais",
      description:
        "App enabling households to find and hire reliable domestic helpers with detailed profiles and background checks",
      image: portfolioImage("app-development/Kaamwali Bais.webp"),
      link: "https://kaamwalibais.com",
      category: "App Development",
      subcategory: "On-Demand Services / Domestic Help",
    }),
    enrich({
      id: 21,
      title: "Satisfaction Farm",
      description:
        "Farm-to-home e-commerce platform offering fresh produce directly from farmers with real-time order placement",
      image: portfolioImage(
        "app-development/Satisfaction Farm - Psychotech.webp"
      ),
      link: "https://satisfactionfarm.com",
      category: "App Development",
      subcategory: "E-commerce / Agriculture",
    }),
    enrich({
      id: 22,
      title: "Fresh and Fresh",
      description:
        "Grocery delivery app connecting users to local stores for daily essentials with flexible delivery slots",
      image: portfolioImage("app-development/Fresh and Fresh.webp"),
      link: "#",
      category: "App Development",
      subcategory: "E-commerce / Grocery",
    }),
    enrich({
      id: 23,
      title: "Bharat Meds",
      description:
        "TrackNow medicine delivery & tracking app for pharmaceutical services",
      image: portfolioImage(
        "app-development/Bharat Meds – TrackNow Medicine Delivery & Tracking App.jpg"
      ),
      link: "https://bharatmeds.com",
      category: "App Development",
      subcategory: "Health / Pharmacy",
    }),
    enrich({
      id: 24,
      title: "Crimson Classified Hub",
      description:
        "Community-driven classifieds platform for local listings and community engagement",
      image: portfolioImage(
        "app-development/Crimson Classified Hub – Community-Driven Classifieds Platform.jpg"
      ),
      link: "#",
      category: "App Development",
      subcategory: "Classifieds / Community",
    }),
    enrich({
      id: 25,
      title: "Dubai Classifieds Pulse",
      description:
        "Hyperlocal classifieds listings platform for Dubai community",
      image: portfolioImage(
        "app-development/Dubai Classifieds Pulse – Hyperlocal Classified Listings Platform.jpg"
      ),
      link: "#",
      category: "App Development",
      subcategory: "Classifieds / Local",
    }),
    enrich({
      id: 26,
      title: "Ember",
      description:
        "AI-powered soulmate matching & conversation platform for relationship building",
      image: portfolioImage(
        "app-development/Ember – AI-Powered Soulmate Matching & Conversation Platform.jpg"
      ),
      link: "#",
      category: "App Development",
      subcategory: "Dating / AI",
    }),
    enrich({
      id: 27,
      title: "UrjaOne Nexus",
      description:
        "Mobile energy services marketplace connecting users with energy solutions",
      image: portfolioImage(
        "app-development/UrjaOne Nexus – Mobile Energy Services Marketplace.jpg"
      ),
      link: "https://urjaone.com",
      category: "App Development",
      subcategory: "Energy / Marketplace",
    }),
  ],
  ai: [
    enrich({
      id: 1,
      title: "Find My AI Tool",
      description:
        "Discovery platform offering curated listings, reviews, and rankings of AI tools across categories like design, automation, and productivity",
      image: portfolioImage("ai/Find My AI Tool.png"),
      link: "https://findmyaitool.com",
      category: "AI Projects",
      subcategory: "AI Directory / SaaS Review",
    }),
    enrich({
      id: 2,
      title: "AI Art Generator – Vyro AI",
      description:
        "App using machine learning and neural style transfer to convert photos into AI-generated artwork with multiple artistic styles",
      image: portfolioImage("ai/AI Art Generator – Vyro AI.webp"),
      link: "https://vyro.ai",
      category: "AI Projects",
      subcategory: "Art / Photo Editing",
    }),
    enrich({
      id: 3,
      title: "Musicly – AI Music Generator",
      description:
        "App transforming text prompts and moods into original AI-generated music with background tracks and theme-based soundscapes",
      image: portfolioImage("ai/Musicly – AI Music Generator.webp"),
      link: "https://musicly.ai",
      category: "AI Projects",
      subcategory: "AI Music / Audio Creation",
    }),
    enrich({
      id: 4,
      title: "Speaksify",
      description: "AI-powered public speaking coach",
      image: portfolioImage(
        "recent/Speaksify – AI-Powered Public Speaking Coach.jpg"
      ),
      link: "https://www.speaksify.eu/",
      category: "AI Projects",
      subcategory: "Communication / Coaching",
      type: "AI Calling Agency",
    }),
  ],
  blockchain: [
    enrich({
      id: 1,
      title: "Project Butterfly",
      description:
        "Eco-conscious blockchain initiative supporting carbon offsetting via NFT-backed environmental assets with real-world impact",
      image: portfolioImage("blockchain/Project Butterfly.png"),
      link: "https://projectbutterfly.com",
      category: "Blockchain",
      subcategory: "Sustainability / NFT Utility",
    }),
    enrich({
      id: 2,
      title: "Earlynctr",
      description:
        "Curated investment platform for early-stage crypto projects and blockchain startups with vetted listings and community voting",
      image: portfolioImage("blockchain/Earlynctr.png"),
      link: "#",
      category: "Blockchain",
      subcategory: "Crypto Investment / Startup Incubation",
    }),
    enrich({
      id: 3,
      title: "Solalgo",
      description:
        "Analytics engine built for the Solana ecosystem providing DApp performance metrics, smart contract tracking, and real-time data visualization",
      image: portfolioImage("blockchain/Solalgo.png"),
      link: "#",
      category: "Blockchain",
      subcategory: "Blockchain Analytics / Developer Tools",
    }),
  ],
  chatbot: [
    enrich({
      id: 1,
      title: "Chatly – AI Chatbot",
      description:
        "Highly engaging AI chatbot that mimics human-like conversations using advanced natural language processing for productivity and companionship",
      image: portfolioImage("chatbot/Chatly.webp"),
      link: "https://chatly.ai",
      category: "Chatbot Projects",
      subcategory: "Productivity / Companionship",
    }),
    enrich({
      id: 2,
      title: "Dawn AI Chatbot",
      description:
        "Intelligent virtual assistant integrating text-based conversation with art generation, creative ideation, and inspirational prompts",
      image: portfolioImage("chatbot/Dawn AI.webp"),
      link: "https://dawnai.com",
      category: "Chatbot Projects",
      subcategory: "AI Art & Creative Assistant",
    }),
    enrich({
      id: 3,
      title: "GENZ Art Chatbot",
      description:
        "Vibrant chatbot platform for Gen Z users to create and share AI-generated artworks through interactive chat-based prompts",
      image: portfolioImage("chatbot/GENZ Art.webp"),
      link: "https://genzart.com",
      category: "Chatbot Projects",
      subcategory: "Gen Z / Art & Expression",
    }),
  ],
  gameDevelopment: [
    enrich({
      id: 1,
      title: "Action Player Games",
      description:
        "Diverse collection of fast-paced arcade-style mini-games designed to keep users engaged with adrenaline-packed gameplay",
      image: portfolioImage("game development/2 3 4 Player Mini Games.webp"),
      link: "#",
      category: "Game Development",
      subcategory: "Action / Arcade Bundle",
    }),
    enrich({
      id: 2,
      title: "Worms Zone.io",
      description:
        "Addictive .io-style snake game where players control colorful worms competing to grow the biggest with real-time multiplayer",
      image: portfolioImage("game development/Worms Zone .io - Hungry Snake.webp"),
      link: "https://wormszone.io",
      category: "Game Development",
      subcategory: "Multiplayer / Casual Arcade",
    }),
    enrich({
      id: 3,
      title: "Sahi - Group Voice Room",
      description:
        "Interactive game world combining chatting with mini-games and metaverse-style social experience",
      image: portfolioImage("game development/Sahi - Group Voice Room.webp"),
      link: "https://sahi.com",
      category: "Game Development",
      subcategory: "Social / Simulation",
    }),
  ],
  saas: [
    enrich({
      id: 1,
      title: "Projectsy.ai",
      description: "AI-powered project & task management platform",
      image: portfolioImage(
        "recent/Projectsy.ai – AI-Powered Project & Task Management Platform.jpg"
      ),
      link: "https://projectsy.ai",
      category: "SaaS Projects",
      subcategory: "Operations / Productivity",
      type: "SaaS Project",
    }),
    enrich({
      id: 2,
      title: "VirtuTeams",
      description: "Team management & remote operations platform",
      image: portfolioImage(
        "recent/VirtuTeams – Team Management & Remote Operations Platform.jpg"
      ),
      link: "https://virtuteams.com",
      category: "SaaS Projects",
      subcategory: "Collaboration / Workforce",
      type: "SaaS Project",
    }),
  ],
};

export const portfolioCategories = [
  { id: "all", label: "All Projects" },
  { id: "web-development", label: "Web Development" },
  { id: "ecommerce-websites", label: "E-commerce Websites" },
  { id: "app-development", label: "App Development" },
  { id: "ai", label: "AI" },
  { id: "blockchain", label: "Blockchain" },
  { id: "chatbot", label: "Chatbot" },
  { id: "game-development", label: "Game Development" },
  { id: "saas", label: "SaaS" },
];

export const getAllPortfolioItems = () =>
  Object.values(portfolioData).flat();

const categoryLookup = {
  "web-development": "webDevelopment",
  "ecommerce-websites": "ecommerceWebsites",
  "app-development": "appDevelopment",
  ai: "ai",
  blockchain: "blockchain",
  chatbot: "chatbot",
  "game-development": "gameDevelopment",
  saas: "saas",
};

export const getPortfolioByCategory = (category) => {
  if (category === "all") {
    return getAllPortfolioItems();
  }
  const categoryKey = categoryLookup[category];
  if (!categoryKey) {
    return getAllPortfolioItems();
  }
  return portfolioData[categoryKey];
};

export const allCaseStudies = getAllPortfolioItems().map(
  (item) => item.caseStudy
);

export const getCaseStudyBySlug = (slug) =>
  allCaseStudies.find((caseStudy) => caseStudy.slug === slug);

export const getRelatedCaseStudies = (slug, limit = 3) =>
  allCaseStudies
    .filter((caseStudy) => caseStudy.slug !== slug)
    .slice(0, limit);

export default portfolioData;

