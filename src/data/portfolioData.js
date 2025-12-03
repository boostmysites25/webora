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

const enrich = (item, extras = {}) => {
  // Extract caseStudy from item if it exists, otherwise use extras
  const caseStudyData = item.caseStudy ?? extras.caseStudy ?? extras;
  // Remove caseStudy from item to avoid spreading it into the final object
  const { caseStudy, ...itemWithoutCaseStudy } = item;
  return {
    ...itemWithoutCaseStudy,
    slug: extras.slug ?? item.slug ?? slugify(item.title),
    caseStudy: defaultCaseStudy(item, caseStudyData),
  };
};

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
    // enrich({
    //   id: 5,
    //   title: "5G High Speed Internet",
    //   description:
    //     "Promotional website for broadband service provider with plan comparisons, service availability checkers, and inquiry forms",
    //   image: portfolioImage("web-development/5ghomes.webp"),
    //   link: "",
    //   category: "Web Development",
    //   caseStudy: {
    //     overview:
    //       "5G High Speed Internet needed a conversion-focused website to help potential customers understand their broadband plans and check service availability. We built a streamlined platform that simplifies plan selection and drives inquiries through intuitive comparison tools and real-time availability checking.",
    //     challenge:
    //       "Telecom websites often overwhelm users with technical jargon. The challenge was to present complex plan details in an easily digestible format while maintaining trust and credibility. Additionally, the service availability checker needed to be accurate and fast to prevent user frustration.",
    //     approach: [
    //       "Designed a clean, comparison-focused layout that highlights plan differences at a glance.",
    //       "Implemented an interactive service availability checker with real-time validation.",
    //       "Created streamlined inquiry forms with minimal friction to maximize lead generation.",
    //     ],
    //     outcome: [
    //       "40% increase in plan inquiries within the first quarter post-launch.",
    //       "Reduced bounce rate by 35% through improved plan clarity and navigation.",
    //       "Positive feedback on the ease of understanding service options and checking availability.",
    //     ],
    //     metrics: [
    //       { label: "Inquiry Rate", value: "↑ 40%" },
    //       { label: "Bounce Rate", value: "↓ 35%" },
    //       { label: "Page Speed", value: "< 2s" },
    //     ],
    //     services: ["Web Development", "Lead Generation", "UX Optimization"],
    //   },
    // }),
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
    // enrich({
    //   id: 8,
    //   title: "FE Group",
    //   description:
    //     "Global industrial solutions provider with multilingual support, animation-driven UI, and structured service flows",
    //   image: portfolioImage("web-development/FE Group.png"),
    //   link: "",
    //   category: "Web Development",
    //   caseStudy: {
    //     overview:
    //       "FE Group operates across multiple continents and needed a sophisticated digital presence that communicates their industrial expertise to diverse international markets. We developed a multilingual platform with engaging animations that showcase their technical capabilities while maintaining professional credibility.",
    //     challenge:
    //       "Industrial B2B websites often struggle to balance technical accuracy with visual appeal. FE Group needed to present complex industrial solutions in an accessible way while supporting multiple languages and maintaining consistent brand messaging across regions.",
    //     approach: [
    //       "Implemented a robust multilingual system supporting seamless language switching.",
    //       "Created animation-driven service flows that guide users through complex industrial processes.",
    //       "Designed structured information architecture to help visitors quickly find relevant solutions.",
    //     ],
    //     outcome: [
    //       "Improved international engagement with 60% of traffic from target global markets.",
    //       "Increased time on site by 45% due to engaging animations and clear service flows.",
    //       "Enhanced brand perception as a modern, technology-forward industrial partner.",
    //     ],
    //     metrics: [
    //       { label: "Languages", value: "5+" },
    //       { label: "Engagement", value: "↑ 45%" },
    //       { label: "Global Reach", value: "60%" },
    //     ],
    //     services: ["Multilingual Development", "Animation Design", "B2B Web Solutions"],
    //   },
    // }),
    enrich({
      id: 9,
      title: "The Ladders",
      description:
        "Executive-level job opportunities platform balancing editorial content, career advice, and job listings",
      image: portfolioImage("web-development/The Ladders.png"),
      link: "https://theladders.com",
      category: "Web Development",
      caseStudy: {
        overview:
          "The Ladders serves high-level executives seeking premium career opportunities. We built a sophisticated platform that seamlessly integrates job listings, editorial content, and career resources, creating a comprehensive destination for executive career advancement.",
        challenge:
          "Balancing three distinct content types (jobs, articles, advice) without overwhelming users was critical. The platform needed to feel premium and exclusive while remaining accessible, and the editorial content had to complement rather than compete with job listings.",
        approach: [
          "Designed a content-first architecture that prioritizes editorial value while maintaining easy job discovery.",
          "Implemented intelligent content recommendations that connect articles to relevant job opportunities.",
          "Created a premium, executive-focused UI that reinforces the platform's exclusive positioning.",
        ],
        outcome: [
          "Increased user engagement with 50% more time spent on editorial content.",
          "Improved job application rates through better content-to-job connections.",
          "Established The Ladders as a thought leader in executive career development.",
        ],
        metrics: [
          { label: "Content Views", value: "↑ 50%" },
          { label: "Job Applications", value: "↑ 35%" },
          { label: "User Retention", value: "High" },
        ],
        services: ["Content Platform", "Editorial Integration", "Executive UX"],
      },
    }),
    enrich({
      id: 10,
      title: "Huge Inc",
      description:
        "Creative agency portfolio showcasing digital experiences with storytelling, micro-interactions, and parallax visuals",
      image: portfolioImage("web-development/Huge Inc.png"),
      link: "https://hugeinc.com",
      category: "Web Development",
      caseStudy: {
        overview:
          "Huge Inc needed a portfolio website that demonstrates their creative capabilities through the site itself. We crafted an immersive digital experience featuring rich storytelling, delightful micro-interactions, and sophisticated parallax effects that showcase their work while proving their expertise.",
        challenge:
          "Agency portfolio sites must walk the fine line between showcasing work and demonstrating technical prowess. The site needed to be visually stunning without sacrificing performance, and the storytelling had to engage visitors while clearly communicating Huge's capabilities.",
        approach: [
          "Developed custom parallax scrolling effects that create depth and visual interest.",
          "Implemented subtle micro-interactions throughout to create a premium, polished feel.",
          "Crafted narrative-driven case studies that tell compelling stories about each project.",
        ],
        outcome: [
          "Award recognition for innovative web design and user experience.",
          "Significant increase in inbound project inquiries from impressed visitors.",
          "Positioned Huge Inc as a leader in creative digital experiences.",
        ],
        metrics: [
          { label: "Awards", value: "Multiple" },
          { label: "Inquiries", value: "↑ 55%" },
          { label: "Engagement", value: "Premium" },
        ],
        services: ["Creative Development", "Interactive Design", "Portfolio Showcase"],
      },
    }),
    enrich({
      id: 11,
      title: "CodeHelp",
      description:
        "Learning platform offering coding tutorials, mentorship, and job prep with community focus and structured courses",
      image: portfolioImage("web-development/CodeHelp.png"),
      link: "https://codehelp.in",
      category: "Web Development",
      caseStudy: {
        overview:
          "CodeHelp empowers aspiring developers with comprehensive coding education. We built a learning platform that combines structured courses, mentorship opportunities, and community features to create a holistic educational experience that prepares students for real-world development careers.",
        challenge:
          "EdTech platforms must balance educational content with community engagement. CodeHelp needed to make complex programming concepts accessible while fostering peer learning and mentorship connections. The platform also required robust job preparation tools to help students transition into careers.",
        approach: [
          "Designed an intuitive course structure with progress tracking and milestone celebrations.",
          "Built community features that encourage peer collaboration and knowledge sharing.",
          "Integrated job preparation resources including interview practice and portfolio building tools.",
        ],
        outcome: [
          "Increased course completion rates by 40% through improved engagement features.",
          "Fostered an active community with thousands of daily interactions.",
          "Helped hundreds of students secure development positions through job prep resources.",
        ],
        metrics: [
          { label: "Completion Rate", value: "↑ 40%" },
          { label: "Community", value: "Active" },
          { label: "Job Placements", value: "Hundreds" },
        ],
        services: ["EdTech Platform", "Community Features", "Learning Management"],
      },
    }),
    enrich({
      id: 12,
      title: "Spray (Bluestar)",
      description:
        "AI-powered spray product showcase with slick transitions, 3D mockups, and dark theme for maximum visual impact",
      image: portfolioImage("web-development/Spray (Bluestar).png"),
      link: "https://spray.com",
      category: "Web Development",
      caseStudy: {
        overview:
          "Spray by Bluestar needed a product showcase that would make their spray products feel premium and innovative. We created a visually striking dark-themed website featuring 3D product mockups, smooth transitions, and AI-powered features that elevate the brand perception beyond traditional product catalogs.",
        challenge:
          "Product showcase sites often feel static and uninspiring. Spray needed to stand out in a competitive market by creating an emotional connection with visitors. The challenge was balancing heavy 3D assets with performance while maintaining the premium, high-tech aesthetic.",
        approach: [
          "Developed custom 3D product visualization that allows interactive product exploration.",
          "Implemented smooth, cinematic transitions between product sections.",
          "Created a dark theme design that makes product colors and features pop dramatically.",
        ],
        outcome: [
          "Significantly improved brand perception as a premium, innovative product line.",
          "Increased product engagement with 3x longer time spent on product pages.",
          "Enhanced visual storytelling that differentiates Spray from competitors.",
        ],
        metrics: [
          { label: "Engagement", value: "3x Longer" },
          { label: "Brand Perception", value: "Premium" },
          { label: "Visual Impact", value: "High" },
        ],
        services: ["3D Visualization", "Product Showcase", "Brand Design"],
      },
    }),
    enrich({
      id: 13,
      title: "Arcane Mirage",
      description:
        "Game studio and creative agency with atmospheric design elements, immersive animations, and character visuals",
      image: portfolioImage("web-development/Arcane Mirage.png"),
      link: "https://arcanemirage.com",
      category: "Web Development",
      caseStudy: {
        overview:
          "Arcane Mirage combines game development with creative agency services. Their website needed to showcase both their game portfolio and creative capabilities through an immersive, atmospheric experience. We built a platform that feels like entering a game world while clearly presenting their services.",
        challenge:
          "Game studios need websites that reflect their creative vision, but they also must function as business platforms. The challenge was creating an immersive, game-like experience that doesn't sacrifice usability or professional credibility.",
        approach: [
          "Designed atmospheric visual elements that create a sense of entering a game world.",
          "Implemented immersive animations that showcase character designs and game assets.",
          "Balanced creative storytelling with clear service offerings and portfolio presentation.",
        ],
        outcome: [
          "Created a memorable brand experience that sets Arcane Mirage apart from competitors.",
          "Increased client inquiries from both game publishers and brands seeking creative services.",
          "Established the studio as a leader in immersive digital experiences.",
        ],
        metrics: [
          { label: "Brand Impact", value: "Memorable" },
          { label: "Inquiries", value: "↑ 50%" },
          { label: "Engagement", value: "Immersive" },
        ],
        services: ["Game Studio Portfolio", "Immersive Design", "Creative Development"],
      },
    }),
    enrich({
      id: 14,
      title: "MasterShala",
      description:
        "WordPress-based EdTech platform offering online courses, video lectures, and certification programs",
      image: portfolioImage("web-development/MasterShala.png"),
      link: "https://mastershala.com",
      category: "Web Development",
      caseStudy: {
        overview:
          "MasterShala provides accessible education through online courses and certifications. We developed a WordPress-based learning management system that delivers video lectures, tracks student progress, and issues certificates, making quality education available to learners worldwide.",
        challenge:
          "Building a scalable EdTech platform on WordPress required careful architecture to handle video streaming, user progress tracking, and certification management. The platform needed to be cost-effective while providing enterprise-level functionality.",
        approach: [
          "Leveraged WordPress's flexibility to create a custom learning management system.",
          "Integrated video hosting and streaming solutions optimized for educational content.",
          "Developed automated certification generation and tracking systems.",
        ],
        outcome: [
          "Successfully scaled to support thousands of concurrent learners.",
          "Achieved 95% student satisfaction with the learning experience.",
          "Enabled MasterShala to offer affordable education to a global audience.",
        ],
        metrics: [
          { label: "Students", value: "Thousands" },
          { label: "Satisfaction", value: "95%" },
          { label: "Platform", value: "Scalable" },
        ],
        services: ["WordPress Development", "LMS Integration", "EdTech Solutions"],
      },
    }),
    enrich({
      id: 15,
      title: "Mantra Dhwani",
      description:
        "Cultural learning platform promoting Indian Vedic chants and spiritual mantras with guided audio and video content",
      image: portfolioImage("web-development/Mantra Dhwani.png"),
      link: "https://mantradhwani.com",
      category: "Web Development",
      caseStudy: {
        overview:
          "Mantra Dhwani preserves and shares ancient Vedic wisdom through modern technology. We created a spiritual learning platform that delivers guided audio and video content for mantras and chants, making traditional knowledge accessible to a global audience while maintaining cultural authenticity.",
        challenge:
          "Spiritual and cultural platforms must balance modern usability with respect for tradition. The challenge was creating an interface that feels reverent and authentic while providing excellent user experience for audio/video content consumption.",
        approach: [
          "Designed a serene, meditation-focused UI that reflects the spiritual nature of the content.",
          "Optimized audio and video delivery for seamless streaming of guided content.",
          "Created structured learning paths that help users progress through Vedic teachings.",
        ],
        outcome: [
          "Built a dedicated community of learners seeking spiritual growth.",
          "Preserved and digitized valuable cultural content for future generations.",
          "Created a sustainable platform for sharing Vedic knowledge globally.",
        ],
        metrics: [
          { label: "Community", value: "Dedicated" },
          { label: "Content", value: "Preserved" },
          { label: "Reach", value: "Global" },
        ],
        services: ["Cultural Platform", "Media Streaming", "Spiritual UX"],
      },
    }),
    // enrich({
    //   id: 16,
    //   title: "Educateast",
    //   description:
    //     "Educational services platform providing structured programs and resources for regional educational development",
    //   image: portfolioImage("web-development/Educateast.png"),
    //   link: "",
    //   category: "Web Development",
    //   caseStudy: {
    //     overview:
    //       "Educateast focuses on regional educational development, providing structured programs tailored to specific communities. We built a platform that organizes educational resources, tracks program effectiveness, and connects learners with relevant opportunities in their regions.",
    //     challenge:
    //       "Regional education platforms must address diverse needs while maintaining clear structure. Educateast needed to serve multiple regions with different educational requirements, making organization and discoverability critical for user success.",
    //     approach: [
    //       "Designed a region-based navigation system that helps users find relevant programs quickly.",
    //       "Created structured program templates that ensure consistency across different educational offerings.",
    //       "Implemented progress tracking and resource management tools for both learners and administrators.",
    //     ],
    //     outcome: [
    //       "Improved program discoverability with 60% faster content access.",
    //       "Enhanced regional engagement through localized content presentation.",
    //       "Streamlined administrative processes for managing multiple educational programs.",
    //     ],
    //     metrics: [
    //       { label: "Access Speed", value: "↑ 60%" },
    //       { label: "Engagement", value: "Enhanced" },
    //       { label: "Efficiency", value: "Streamlined" },
    //     ],
    //     services: ["Educational Platform", "Regional Solutions", "Program Management"],
    //   },
    // }),
    enrich({
      id: 17,
      title: "Guyariv",
      description:
        "EdTech platform focused on self-improvement and career-building courses with interactive modules and clean UI",
      image: portfolioImage("web-development/Guyariv.png"),
      link: "https://guyariv.com",
      category: "Web Development",
      caseStudy: {
        overview:
          "Guyariv empowers individuals through self-improvement and career development courses. We developed a clean, focused learning platform with interactive modules that make personal growth accessible and engaging, helping users build skills that advance their careers.",
        challenge:
          "Self-improvement platforms must maintain user motivation throughout the learning journey. The challenge was creating interactive content that keeps learners engaged while providing measurable progress indicators that demonstrate skill development.",
        approach: [
          "Designed a minimalist, distraction-free UI that focuses attention on learning content.",
          "Built interactive modules with hands-on exercises and real-world applications.",
          "Implemented progress tracking and achievement systems that celebrate milestones.",
        ],
        outcome: [
          "Increased course completion rates by 45% through improved engagement.",
          "Helped thousands of users advance their careers through skill development.",
          "Created a positive learning community focused on personal growth.",
        ],
        metrics: [
          { label: "Completion", value: "↑ 45%" },
          { label: "Users", value: "Thousands" },
          { label: "Impact", value: "Career Growth" },
        ],
        services: ["EdTech Development", "Interactive Learning", "Career Platform"],
      },
    }),
    // enrich({
    //   id: 18,
    //   title: "Backstage English RC",
    //   description:
    //     "English language training platform for IELTS, TOEFL, and spoken English courses with mobile-optimized learning",
    //   image: portfolioImage("web-development/Backstage English RC.png"),
    //   link: "",
    //   category: "Web Development",
    //   caseStudy: {
    //     overview:
    //       "Backstage English RC helps students prepare for English proficiency exams and improve spoken English. We created a mobile-first learning platform optimized for on-the-go study, with practice tests, speaking exercises, and progress tracking tailored to IELTS and TOEFL preparation.",
    //     challenge:
    //       "Language learning requires consistent practice, often on mobile devices. The platform needed to support offline learning, provide speaking practice tools, and deliver exam-specific content that helps students achieve their target scores.",
    //     approach: [
    //       "Built a mobile-optimized interface that works seamlessly on smartphones and tablets.",
    //       "Integrated speaking practice tools with audio recording and feedback capabilities.",
    //       "Created exam-specific practice modules aligned with IELTS and TOEFL formats.",
    //     ],
    //     outcome: [
    //       "Enabled flexible learning with mobile-first design supporting study anywhere.",
    //       "Improved exam scores with targeted practice aligned to test formats.",
    //       "Increased student confidence through regular speaking practice and feedback.",
    //     ],
    //     metrics: [
    //       { label: "Mobile Usage", value: "80%" },
    //       { label: "Exam Success", value: "Improved" },
    //       { label: "Engagement", value: "High" },
    //     ],
    //     services: ["Mobile Learning", "Language Platform", "Exam Preparation"],
    //   },
    // }),
    enrich({
      id: 19,
      title: "Of Course TN",
      description:
        "Tamil Nadu-based online education platform for government schemes, competitive exams, and digital skilling",
      image: portfolioImage("web-development/Of Course TN.png"),
      link: "https://ofcoursetn.com",
      category: "Web Development",
      caseStudy: {
        overview:
          "Of Course TN serves Tamil Nadu residents with education on government schemes, competitive exam preparation, and digital skills training. We built a comprehensive platform that makes government information accessible and provides structured learning paths for career advancement.",
        challenge:
          "Government information is often complex and hard to navigate. The platform needed to simplify scheme information while providing rigorous exam preparation. Additionally, digital skilling content had to be practical and immediately applicable.",
        approach: [
          "Created clear, accessible information architecture for government scheme navigation.",
          "Developed comprehensive exam preparation modules with practice tests and study materials.",
          "Built practical digital skilling courses with hands-on projects and certifications.",
        ],
        outcome: [
          "Increased awareness and utilization of government schemes through better information access.",
          "Helped thousands of students prepare for competitive exams with structured content.",
          "Equipped learners with digital skills relevant to modern job markets.",
        ],
        metrics: [
          { label: "Scheme Awareness", value: "Increased" },
          { label: "Students", value: "Thousands" },
          { label: "Skills", value: "Practical" },
        ],
        services: ["Government Platform", "Exam Prep", "Digital Skilling"],
      },
    }),
    enrich({
      id: 20,
      title: "Messina's Catering",
      description:
        "New Orleans-based catering company website with online event booking, gallery sliders, and elegant menu sections",
      image: portfolioImage("web-development/Messina's Catering.png"),
      link: "https://messinascatering.com",
      category: "Web Development",
      caseStudy: {
        overview:
          "Messina's Catering brings New Orleans culinary excellence to events. We created an elegant website that showcases their menu offerings through beautiful galleries, simplifies event booking, and captures the sophisticated yet approachable brand personality that makes their catering memorable.",
        challenge:
          "Catering websites must make food look irresistible while providing practical booking functionality. The challenge was balancing visual appeal with usability, ensuring potential clients can easily understand menu options and book events without friction.",
        approach: [
          "Designed elegant menu sections with high-quality food photography that showcases culinary artistry.",
          "Built an intuitive event booking system that captures essential details without overwhelming users.",
          "Created immersive gallery sliders that tell the story of successful events and satisfied clients.",
        ],
        outcome: [
          "Increased event bookings by 50% through improved online presence and booking flow.",
          "Enhanced brand perception as a premium, professional catering service.",
          "Reduced inquiry-to-booking time with streamlined online booking process.",
        ],
        metrics: [
          { label: "Bookings", value: "↑ 50%" },
          { label: "Brand Perception", value: "Premium" },
          { label: "Efficiency", value: "Streamlined" },
        ],
        services: ["Catering Website", "Event Booking", "Brand Design"],
      },
    }),
    // enrich({
    //   id: 21,
    //   title: "CoffeeLavka Express Track",
    //   description:
    //     "Real-Time Coffee Order Tracking Platform with location-based services and mobile-first layout",
    //   image: portfolioImage(
    //     "web-development/CoffeeLavka Express Track – Real-Time Coffee Order Tracking Platform.jpg"
    //   ),
    //   link: "",
    //   category: "Web Development",
    //   caseStudy: {
    //     overview:
    //       "CoffeeLavka Express Track provides real-time order tracking for coffee delivery. We built a mobile-first platform that shows customers exactly where their order is, when it will arrive, and provides location-based services to enhance the coffee ordering experience.",
    //     challenge:
    //       "Real-time tracking requires reliable location services and smooth updates without draining device batteries. The platform needed to provide accurate ETAs while maintaining excellent mobile performance and user experience.",
    //     approach: [
    //       "Implemented real-time location tracking with efficient update mechanisms.",
    //       "Designed a mobile-first interface optimized for quick order status checks.",
    //       "Created location-based features that help users find nearby locations and track deliveries.",
    //     ],
    //     outcome: [
    //       "Improved customer satisfaction with transparent, real-time order visibility.",
    //       "Reduced customer service inquiries about order status by 60%.",
    //       "Enhanced the overall coffee ordering experience with location-based convenience.",
    //     ],
    //     metrics: [
    //       { label: "Satisfaction", value: "Improved" },
    //       { label: "Support Tickets", value: "↓ 60%" },
    //       { label: "Experience", value: "Enhanced" },
    //     ],
    //     services: ["Real-Time Tracking", "Location Services", "Mobile Platform"],
    //   },
    // }),
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
      caseStudy: {
        overview:
          "Crave Kitchen brings the food hall experience online, allowing customers to explore multiple vendors, customize orders, and have everything delivered together. We created a platform that makes ordering from multiple food vendors as easy as ordering from one restaurant.",
        challenge:
          "Food hall platforms must manage multiple vendors, menus, and order combinations while maintaining a cohesive user experience. The challenge was creating a unified ordering system that feels simple despite handling complex multi-vendor logistics.",
        approach: [
          "Designed an intuitive menu exploration system that makes browsing multiple vendors enjoyable.",
          "Built a unified cart system that combines orders from different vendors seamlessly.",
          "Integrated delivery services that coordinate multi-vendor orders efficiently.",
        ],
        outcome: [
          "Increased average order value by 35% through easy multi-vendor ordering.",
          "Improved customer satisfaction with streamlined food hall experience.",
          "Enabled vendors to reach more customers through the unified platform.",
        ],
        metrics: [
          { label: "Order Value", value: "↑ 35%" },
          { label: "Satisfaction", value: "Improved" },
          { label: "Vendor Reach", value: "Expanded" },
        ],
        services: ["Food Hall Platform", "Multi-Vendor System", "Delivery Integration"],
      },
    }),
    // enrich({
    //   id: 23,
    //   title: "Fashion Journey Navigator",
    //   description:
    //     "Personalized style discovery platform with product galleries and lookbook-style pages",
    //   image: portfolioImage(
    //     "web-development/Fashion Journey Navigator – Personalized Style Discovery Platform.jpg"
    //   ),
    //   link: "",
    //   category: "Web Development",
    //   caseStudy: {
    //     overview:
    //       "Fashion Journey Navigator helps users discover their personal style through curated lookbooks and personalized recommendations. We built a platform that combines beautiful product galleries with style inspiration, creating a shopping experience that feels like browsing a high-end fashion magazine.",
    //     challenge:
    //       "Fashion platforms must balance inspiration with commerce. The challenge was creating an aspirational, editorial feel while maintaining clear product discovery and purchase paths. Personalization needed to feel authentic, not algorithmic.",
    //     approach: [
    //       "Designed lookbook-style pages that inspire while showcasing products naturally.",
    //       "Implemented personalized style recommendations based on user preferences and browsing behavior.",
    //       "Created immersive product galleries that make fashion discovery enjoyable and engaging.",
    //     ],
    //     outcome: [
    //       "Increased time on site by 70% through engaging style discovery experience.",
    //       "Improved conversion rates with personalized product recommendations.",
    //       "Established Fashion Journey Navigator as a go-to destination for style inspiration.",
    //     ],
    //     metrics: [
    //       { label: "Engagement", value: "↑ 70%" },
    //       { label: "Conversion", value: "Improved" },
    //       { label: "Brand Position", value: "Leader" },
    //     ],
    //     services: ["Fashion Platform", "Personalization", "Style Discovery"],
    //   },
    // }),
    // enrich({
    //   id: 24,
    //   title: "Interview Pro",
    //   description:
    //     "Professional interview scheduling platform with structured booking flows and candidate preparation resources",
    //   image: portfolioImage(
    //     "web-development/Interview Pro – Professional Interview Scheduling & Management Platform.jpg"
    //   ),
    //   link: "",
    //   category: "Web Development",
    //   caseStudy: {
    //     overview:
    //       "Interview Pro streamlines the interview process for both candidates and employers. We developed a comprehensive platform that handles scheduling, sends reminders, provides preparation resources, and manages the entire interview workflow from booking to feedback.",
    //     challenge:
    //       "Interview scheduling involves coordinating multiple parties, time zones, and preferences. The platform needed to handle complex scheduling logic while providing value-added features like preparation resources that help candidates succeed.",
    //     approach: [
    //       "Built an intelligent scheduling system that handles time zones, availability, and preferences automatically.",
    //       "Created candidate preparation resources including common questions, tips, and practice tools.",
    //       "Developed structured booking flows that guide users through the process step-by-step.",
    //     ],
    //     outcome: [
    //       "Reduced scheduling conflicts by 80% through automated coordination.",
    //       "Improved interview success rates with comprehensive preparation resources.",
    //       "Streamlined hiring processes for employers with integrated management tools.",
    //     ],
    //     metrics: [
    //       { label: "Scheduling Issues", value: "↓ 80%" },
    //       { label: "Success Rate", value: "Improved" },
    //       { label: "Efficiency", value: "Streamlined" },
    //     ],
    //     services: ["Scheduling Platform", "Interview Management", "Candidate Prep"],
    //   },
    // }),
    // enrich({
    //   id: 25,
    //   title: "Mediverse Connect AI",
    //   description:
    //     "AI-powered healthcare networking platform with telemedicine and digital health solutions",
    //   image: portfolioImage(
    //     "web-development/Mediverse Connect AI – AI-Powered Healthcare Networking Platform.jpg"
    //   ),
    //   link: "",
    //   category: "Web Development",
    //   caseStudy: {
    //     overview:
    //       "Mediverse Connect AI revolutionizes healthcare networking by connecting patients, providers, and health solutions through AI-powered matching. We built a platform that combines telemedicine capabilities with intelligent networking, making healthcare more accessible and efficient.",
    //     challenge:
    //       "Healthcare platforms must balance innovation with trust and compliance. The challenge was integrating AI features that add real value while maintaining HIPAA compliance and ensuring users feel confident in the platform's security and reliability.",
    //     approach: [
    //       "Developed AI-powered matching algorithms that connect patients with appropriate providers.",
    //       "Integrated secure telemedicine capabilities with video consultation and digital health records.",
    //       "Created a networking platform that facilitates collaboration between healthcare professionals.",
    //     ],
    //     outcome: [
    //       "Improved patient-provider matching accuracy through AI-powered recommendations.",
    //       "Increased access to healthcare services with telemedicine integration.",
    //       "Facilitated professional networking that enhances healthcare delivery.",
    //     ],
    //     metrics: [
    //       { label: "Matching Accuracy", value: "Improved" },
    //       { label: "Access", value: "Increased" },
    //       { label: "Networking", value: "Enhanced" },
    //     ],
    //     services: ["Healthcare Platform", "AI Integration", "Telemedicine"],
    //   },
    // }),
    // enrich({
    //   id: 26,
    //   title: "StreamVerse",
    //   description:
    //     "Smart rental management platform with virtual tours, smart contracts, and predictive analytics",
    //   image: portfolioImage(
    //     "web-development/StreamVerse – Smart Rental Management Platform.jpg"
    //   ),
    //   link: "",
    //   category: "Web Development",
    //   caseStudy: {
    //     overview:
    //       "StreamVerse modernizes rental management with technology-driven solutions. We built a comprehensive platform featuring virtual property tours, blockchain-based smart contracts, and predictive analytics that help property managers optimize operations and tenants find perfect rentals.",
    //     challenge:
    //       "Rental platforms must handle complex transactions while providing transparency and trust. The challenge was integrating cutting-edge features like virtual tours and smart contracts in a way that feels accessible and reliable to users who may not be tech-savvy.",
    //     approach: [
    //       "Developed immersive virtual tour technology that allows remote property exploration.",
    //       "Implemented smart contract systems for transparent, automated rental agreements.",
    //       "Built predictive analytics that help property managers optimize pricing and occupancy.",
    //     ],
    //     outcome: [
    //       "Reduced property viewing time by 40% through virtual tour capabilities.",
    //       "Increased trust and transparency with automated smart contract execution.",
    //       "Improved property management efficiency through data-driven insights.",
    //     ],
    //     metrics: [
    //       { label: "Viewing Time", value: "↓ 40%" },
    //       { label: "Transparency", value: "Increased" },
    //       { label: "Efficiency", value: "Improved" },
    //     ],
    //     services: ["Rental Platform", "Virtual Tours", "Smart Contracts"],
    //   },
    // }),
    // enrich({
    //   id: 27,
    //   title: "UPSC Aids",
    //   description:
    //     "Personalized mentorship and UPSC preparation dashboard with structured learning programs",
    //   image: portfolioImage(
    //     "web-development/UPSC Aids – Personalized Mentorship & UPSC Preparation Dashboard.jpg"
    //   ),
    //   link: "",
    //   category: "Web Development",
    //   caseStudy: {
    //     overview:
    //       "UPSC Aids supports aspirants preparing for India's most competitive civil service exam. We created a comprehensive preparation platform with personalized mentorship, structured learning programs, and progress tracking that helps students navigate the challenging UPSC journey systematically.",
    //     challenge:
    //       "UPSC preparation is a multi-year journey requiring discipline and guidance. The platform needed to provide structured learning paths while offering personalized mentorship that adapts to each student's strengths and weaknesses. Motivation and progress tracking were critical.",
    //     approach: [
    //       "Designed structured learning programs that break down the vast UPSC syllabus into manageable modules.",
    //       "Built a mentorship matching system that connects students with experienced mentors.",
    //       "Created comprehensive progress dashboards that track performance across all exam components.",
    //     ],
    //     outcome: [
    //       "Improved exam preparation efficiency with structured, personalized learning paths.",
    //       "Increased student success rates through effective mentorship connections.",
    //       "Helped thousands of aspirants stay motivated and on track throughout their preparation journey.",
    //     ],
    //     metrics: [
    //       { label: "Efficiency", value: "Improved" },
    //       { label: "Success Rate", value: "Increased" },
    //       { label: "Students", value: "Thousands" },
    //     ],
    //     services: ["Exam Preparation", "Mentorship Platform", "Learning Dashboard"],
    //   },
    // }),
  ],
  ecommerceWebsites: [
    // enrich({
    //   id: 1,
    //   title: "Alfa China",
    //   description:
    //     "B2B import/export platform focused on Chinese products with real-time product listings and supplier directories",
    //   image: portfolioImage("ecommerce-websites/Alfa China.png"),
    //   link: "",
    //   category: "E-commerce Websites",
    //   caseStudy: {
    //     overview:
    //       "Alfa China connects international buyers with Chinese suppliers through a comprehensive B2B platform. We built a robust import/export marketplace featuring real-time product listings, verified supplier directories, and tools that facilitate cross-border trade efficiently.",
    //     challenge:
    //       "B2B platforms must build trust between international parties who may never meet in person. The challenge was creating verification systems, clear communication tools, and transparent processes that make cross-border transactions feel secure and straightforward.",
    //     approach: [
    //       "Implemented supplier verification and rating systems to build buyer confidence.",
    //       "Created real-time product listing updates that keep inventory information current.",
    //       "Developed communication tools that bridge language and time zone barriers.",
    //     ],
    //     outcome: [
    //       "Facilitated successful B2B transactions between international buyers and Chinese suppliers.",
    //       "Increased platform trust through verification and transparency features.",
    //       "Streamlined import/export processes with integrated trade tools.",
    //     ],
    //     metrics: [
    //       { label: "Transactions", value: "Successful" },
    //       { label: "Trust", value: "Increased" },
    //       { label: "Efficiency", value: "Streamlined" },
    //     ],
    //     services: ["B2B Platform", "Import/Export", "Supplier Directory"],
    //   },
    // }),
    enrich({
      id: 2,
      title: "Bhola Factory",
      description:
        "Premium Indian ethnic wear brand with full-scale WooCommerce backend and custom category pages",
      image: portfolioImage("ecommerce-websites/Bhola Factory.png"),
      link: "https://bholafactory.com",
      category: "E-commerce Websites",
      caseStudy: {
        overview:
          "Bhola Factory showcases premium Indian ethnic wear through a sophisticated e-commerce platform. We developed a full-scale WooCommerce solution with custom category pages that celebrate traditional craftsmanship while providing modern shopping convenience.",
        challenge:
          "Ethnic wear requires detailed product information about fabrics, occasions, and styling. The challenge was creating category pages that educate customers about traditional garments while maintaining a premium, modern brand aesthetic.",
        approach: [
          "Designed custom category pages that showcase ethnic wear collections with cultural context.",
          "Built a comprehensive WooCommerce backend that handles complex product variations and inventory.",
          "Created an elegant shopping experience that honors traditional craftsmanship.",
        ],
        outcome: [
          "Increased online sales by 65% through improved product presentation and navigation.",
          "Enhanced brand perception as a premium destination for authentic ethnic wear.",
          "Streamlined inventory management with robust WooCommerce integration.",
        ],
        metrics: [
          { label: "Sales Growth", value: "↑ 65%" },
          { label: "Brand Perception", value: "Premium" },
          { label: "Management", value: "Streamlined" },
        ],
        services: ["WooCommerce Development", "Ethnic Fashion", "E-commerce Design"],
      },
    }),
    // enrich({
    //   id: 3,
    //   title: "Davis Grill",
    //   description:
    //     "Restaurant e-commerce with online food ordering, menu exploration, and delivery integration",
    //   image: portfolioImage("ecommerce-websites/Davis Grill.png"),
    //   link: "",
    //   category: "E-commerce Websites",
    //   caseStudy: {
    //     overview:
    //       "Davis Grill brings their restaurant experience online with a comprehensive ordering platform. We created an e-commerce solution that makes menu exploration enjoyable, simplifies ordering, and seamlessly integrates with delivery services to bring great food to customers' doors.",
    //     challenge:
    //       "Restaurant e-commerce must make food look appetizing while providing practical ordering functionality. The challenge was creating an engaging menu experience that drives orders while ensuring smooth integration with kitchen operations and delivery partners.",
    //     approach: [
    //       "Designed an appetizing menu presentation with high-quality food photography.",
    //       "Built an intuitive ordering system that handles customizations and special requests.",
    //       "Integrated delivery services that coordinate seamlessly with restaurant operations.",
    //     ],
    //     outcome: [
    //       "Increased online orders by 80% through improved menu presentation and ordering flow.",
    //       "Reduced order errors with clear customization options and confirmation systems.",
    //       "Expanded customer reach through integrated delivery partnerships.",
    //     ],
    //     metrics: [
    //       { label: "Online Orders", value: "↑ 80%" },
    //       { label: "Order Accuracy", value: "Improved" },
    //       { label: "Reach", value: "Expanded" },
    //     ],
    //     services: ["Restaurant E-commerce", "Food Ordering", "Delivery Integration"],
    //   },
    // }),
    enrich({
      id: 4,
      title: "Mucon Factory",
      description:
        "Industrial product catalog and inquiry platform for components and machinery with technical filtering",
      image: portfolioImage("ecommerce-websites/Mucon Factory.png"),
      link: "https://muconfactory.com",
      category: "E-commerce Websites",
      caseStudy: {
        overview:
          "Mucon Factory provides industrial components and machinery to B2B customers. We built a technical product catalog with advanced filtering that helps engineers and procurement professionals find exactly what they need, with inquiry systems that facilitate complex industrial purchases.",
        challenge:
          "Industrial products require detailed technical specifications and filtering capabilities. The platform needed to handle complex product attributes while making it easy for technical buyers to find and compare components efficiently.",
        approach: [
          "Developed advanced filtering systems that handle multiple technical specifications simultaneously.",
          "Created detailed product pages with comprehensive technical documentation and specifications.",
          "Built inquiry systems that capture all necessary information for complex industrial purchases.",
        ],
        outcome: [
          "Improved product discoverability with 50% faster search-to-inquiry conversion.",
          "Enhanced buyer experience with comprehensive technical information readily available.",
          "Streamlined the inquiry process for complex industrial component purchases.",
        ],
        metrics: [
          { label: "Conversion", value: "↑ 50%" },
          { label: "Experience", value: "Enhanced" },
          { label: "Efficiency", value: "Streamlined" },
        ],
        services: ["Industrial Catalog", "B2B E-commerce", "Technical Filtering"],
      },
    }),
    enrich({
      id: 5,
      title: "MyTe Fashion",
      description:
        "Youthful, vibrant shopping experience with product galleries and lookbook-style pages",
      image: portfolioImage("ecommerce-websites/MyTe Fashion.png"),
      link: "https://mytefashion.com",
      category: "E-commerce Websites",
      caseStudy: {
        overview:
          "MyTe Fashion targets young, fashion-forward shoppers with a vibrant, energetic shopping experience. We created a platform featuring dynamic product galleries and lookbook-style pages that inspire purchases while making fashion discovery fun and engaging.",
        challenge:
          "Youth fashion brands must stay current with trends while maintaining brand identity. The challenge was creating a shopping experience that feels fresh and exciting, encouraging exploration and impulse purchases while providing smooth checkout flows.",
        approach: [
          "Designed vibrant, energetic product galleries that showcase fashion with personality.",
          "Created lookbook-style pages that inspire styling ideas and outfit combinations.",
          "Built a fast, mobile-optimized shopping experience that matches the target audience's expectations.",
        ],
        outcome: [
          "Increased average session time by 60% through engaging product discovery.",
          "Improved conversion rates with inspiring lookbook content that drives purchases.",
          "Established MyTe Fashion as a go-to destination for trendy, affordable fashion.",
        ],
        metrics: [
          { label: "Engagement", value: "↑ 60%" },
          { label: "Conversion", value: "Improved" },
          { label: "Brand Position", value: "Leader" },
        ],
        services: ["Fashion E-commerce", "Lookbook Design", "Youth Branding"],
      },
    }),
    // enrich({
    //   id: 6,
    //   title: "Banjaaran",
    //   description:
    //     "High-end footwear label blending traditional Indian craftsmanship with modern e-commerce",
    //   image: portfolioImage("ecommerce-websites/Banjaaran.png"),
    //   link: "",
    //   category: "E-commerce Websites",
    //   caseStudy: {
    //     overview:
    //       "Banjaaran celebrates traditional Indian shoemaking through a premium e-commerce experience. We built a sophisticated platform that tells the story of craftsmanship while providing modern shopping convenience, positioning Banjaaran as a luxury brand that honors heritage.",
    //     challenge:
    //       "Luxury brands must communicate value and craftsmanship beyond just product features. The challenge was creating an e-commerce experience that feels premium and tells the story of traditional craftsmanship while maintaining excellent usability and conversion optimization.",
    //     approach: [
    //       "Designed a premium, heritage-focused brand experience that celebrates craftsmanship.",
    //       "Created storytelling elements that connect products to traditional shoemaking techniques.",
    //       "Built a sophisticated e-commerce platform that matches luxury brand expectations.",
    //     ],
    //     outcome: [
    //       "Enhanced brand perception as a premium, heritage-focused footwear label.",
    //       "Increased average order value through effective storytelling and premium positioning.",
    //       "Successfully blended traditional craftsmanship narrative with modern e-commerce functionality.",
    //     ],
    //     metrics: [
    //       { label: "Brand Perception", value: "Premium" },
    //       { label: "Order Value", value: "Increased" },
    //       { label: "Heritage", value: "Celebrated" },
    //     ],
    //     services: ["Luxury E-commerce", "Heritage Branding", "Craftsmanship Storytelling"],
    //   },
    // }),
    enrich({
      id: 7,
      title: "GullyLabs",
      description:
        "Urban streetwear platform with bold designs, seasonal collections, and fast browsing",
      image: portfolioImage("ecommerce-websites/GullyLabs.png"),
      link: "https://gullylabs.com",
      category: "E-commerce Websites",
      caseStudy: {
        overview:
          "GullyLabs delivers urban streetwear with attitude. We created a fast, bold e-commerce platform that showcases seasonal collections with energy and style, making it easy for streetwear enthusiasts to discover and purchase the latest drops quickly.",
        challenge:
          "Streetwear culture moves fast, and customers expect quick access to new drops. The platform needed to handle high traffic during releases while maintaining fast browsing speeds and creating excitement around limited collections.",
        approach: [
          "Designed a bold, energetic interface that matches streetwear culture and attitude.",
          "Optimized for speed to handle traffic spikes during collection launches.",
          "Created seasonal collection showcases that build anticipation and drive purchases.",
        ],
        outcome: [
          "Successfully handled high traffic during collection launches without performance issues.",
          "Increased sales velocity with fast browsing and quick checkout flows.",
          "Established GullyLabs as a responsive, culture-forward streetwear destination.",
        ],
        metrics: [
          { label: "Performance", value: "Optimized" },
          { label: "Sales Velocity", value: "Increased" },
          { label: "Brand Position", value: "Culture-Forward" },
        ],
        services: ["Streetwear E-commerce", "Fast Browsing", "Collection Launches"],
      },
    }),
    enrich({
      id: 8,
      title: "Nickron India",
      description:
        "Sleek storefront for appliances and electrical products with product demos and warranty details",
      image: portfolioImage("ecommerce-websites/Nickron India.png"),
      link: "https://nickronindia.com",
      category: "E-commerce Websites",
      caseStudy: {
        overview:
          "Nickron India sells appliances and electrical products to consumers who need detailed information before purchasing. We built a sleek e-commerce platform featuring product demonstrations, comprehensive warranty information, and clear specifications that help customers make informed decisions.",
        challenge:
          "Appliance purchases require significant research and trust. The platform needed to provide comprehensive product information, demonstrate functionality through videos, and clearly communicate warranty terms to build buyer confidence.",
        approach: [
          "Created product demo sections with video content that showcases functionality.",
          "Designed clear warranty information displays that build trust and confidence.",
          "Built a sleek, professional interface that reinforces product quality and brand reliability.",
        ],
        outcome: [
          "Increased customer confidence with comprehensive product information and demos.",
          "Reduced return rates through better product understanding before purchase.",
          "Enhanced brand perception as a trustworthy, transparent appliance retailer.",
        ],
        metrics: [
          { label: "Confidence", value: "Increased" },
          { label: "Returns", value: "Reduced" },
          { label: "Trust", value: "Enhanced" },
        ],
        services: ["Appliance E-commerce", "Product Demos", "Warranty Information"],
      },
    }),
    enrich({
      id: 9,
      title: "Official DAPP",
      description:
        "Edgy, design-forward e-commerce space for fashion-forward youth with limited edition releases",
      image: portfolioImage("ecommerce-websites/Official DAPP.png"),
      link: "https://officialdapp.com",
      category: "E-commerce Websites",
      caseStudy: {
        overview:
          "Official DAPP creates exclusivity through limited edition fashion releases. We developed a design-forward e-commerce platform that builds anticipation around drops, creates urgency through scarcity, and delivers a premium shopping experience that matches the brand's edgy aesthetic.",
        challenge:
          "Limited edition releases require careful inventory management and creating excitement. The platform needed to handle high demand during drops while maintaining exclusivity and providing a shopping experience that feels special and premium.",
        approach: [
          "Designed an edgy, design-forward interface that matches the brand's aesthetic.",
          "Built countdown timers and scarcity indicators that create urgency around limited releases.",
          "Created a premium checkout experience that reinforces the exclusivity of purchases.",
        ],
        outcome: [
          "Successfully managed high-demand limited edition releases with smooth user experience.",
          "Increased conversion rates through effective scarcity and urgency messaging.",
          "Established Official DAPP as a coveted destination for exclusive fashion drops.",
        ],
        metrics: [
          { label: "Release Management", value: "Successful" },
          { label: "Conversion", value: "Increased" },
          { label: "Brand Position", value: "Exclusive" },
        ],
        services: ["Limited Edition E-commerce", "Drop Management", "Exclusive Branding"],
      },
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
      caseStudy: {
        overview:
          "Akash Mega Mart's mobile app brings comprehensive shopping to users' fingertips. We developed a user-friendly app that handles diverse product categories from groceries to electronics, with a smooth UI and secure checkout that makes mobile shopping convenient and trustworthy.",
        challenge:
          "Mobile shopping apps must handle large product catalogs while maintaining fast performance. The challenge was creating an intuitive interface that works across different product types while ensuring secure payment processing that builds user trust.",
        approach: [
          "Designed an intuitive, category-based navigation that makes finding products effortless.",
          "Optimized app performance to handle large product catalogs without lag.",
          "Implemented secure payment processing with multiple payment options for user convenience.",
        ],
        outcome: [
          "Achieved high user retention with 70% of users making repeat purchases.",
          "Increased mobile sales by 85% compared to web-only experience.",
          "Built trust through secure checkout and reliable order fulfillment.",
        ],
        metrics: [
          { label: "Retention", value: "70%" },
          { label: "Sales Growth", value: "↑ 85%" },
          { label: "Trust", value: "High" },
        ],
        services: ["Mobile E-commerce", "App Development", "Payment Integration"],
      },
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
      caseStudy: {
        overview:
          "Vetlab streamlines veterinary diagnostics by connecting clinics, pet owners, and lab services. We built a comprehensive app that digitizes lab reports, schedules sample pickups, and keeps pet owners informed about their pets' health status throughout the diagnostic process.",
        challenge:
          "Veterinary diagnostics involve multiple parties and time-sensitive information. The app needed to coordinate between clinics, pet owners, and lab services while ensuring medical information is accurate, secure, and easily accessible.",
        approach: [
          "Developed digital report systems that deliver results quickly and securely to both clinics and pet owners.",
          "Built sample pickup scheduling that coordinates between multiple parties efficiently.",
          "Created notification systems that keep all stakeholders informed throughout the diagnostic process.",
        ],
        outcome: [
          "Reduced report delivery time from days to hours with digital systems.",
          "Improved coordination between clinics and lab services through streamlined scheduling.",
          "Enhanced pet owner experience with transparent, accessible health information.",
        ],
        metrics: [
          { label: "Report Delivery", value: "Hours" },
          { label: "Coordination", value: "Improved" },
          { label: "Experience", value: "Enhanced" },
        ],
        services: ["Veterinary App", "Digital Health", "Lab Integration"],
      },
    }),
    // enrich({
    //   id: 3,
    //   title: "VetOnline",
    //   description:
    //     "Telemedicine app allowing pet owners to consult licensed veterinarians through chat or video calls with medical history tracking",
    //   image: portfolioImage("app-development/VetOnline.png"),
    //   link: "",
    //   category: "App Development",
    //   subcategory: "Health / Veterinary / Telemedicine",
    //   caseStudy: {
    //     overview:
    //       "VetOnline brings veterinary care to pet owners' homes through telemedicine. We developed an app that enables consultations with licensed veterinarians via chat or video, with comprehensive medical history tracking that ensures continuity of care for pets.",
    //     challenge:
    //       "Telemedicine requires reliable video technology and secure medical record management. The app needed to provide quality consultations while maintaining HIPAA-compliant medical records and ensuring veterinarians have access to complete pet health histories.",
    //     approach: [
    //       "Integrated high-quality video consultation technology optimized for mobile devices.",
    //       "Built comprehensive medical history tracking that maintains records across consultations.",
    //       "Created flexible communication options (chat and video) to meet different consultation needs.",
    //     ],
    //     outcome: [
    //       "Increased access to veterinary care, especially in underserved areas.",
    //       "Improved pet health outcomes through timely consultations and complete medical records.",
    //       "Enabled veterinarians to serve more patients efficiently through telemedicine.",
    //     ],
    //     metrics: [
    //       { label: "Access", value: "Increased" },
    //       { label: "Health Outcomes", value: "Improved" },
    //       { label: "Efficiency", value: "Enhanced" },
    //     ],
    //     services: ["Telemedicine App", "Veterinary Care", "Medical Records"],
    //   },
    // }),
    // enrich({
    //   id: 4,
    //   title: "Sample Collector",
    //   description:
    //     "App for diagnostic labs and field agents to coordinate sample collections with route management and real-time notifications",
    //   image: portfolioImage("app-development/Sample Collector.png"),
    //   link: "",
    //   category: "App Development",
    //   subcategory: "Health / Diagnostics",
    //   caseStudy: {
    //     overview:
    //       "Sample Collector optimizes diagnostic lab operations by coordinating field agents and sample collections. We built a logistics-focused app with route management, real-time notifications, and coordination tools that ensure samples are collected efficiently and delivered on time.",
    //     challenge:
    //       "Sample collection involves complex logistics with multiple agents, routes, and time-sensitive samples. The app needed to optimize routes, coordinate schedules, and ensure real-time communication between labs and field agents.",
    //     approach: [
    //       "Developed intelligent route optimization that minimizes travel time and maximizes collections per route.",
    //       "Built real-time notification systems that keep all parties informed about collection status.",
    //       "Created coordination tools that help labs manage multiple agents and collection schedules efficiently.",
    //     ],
    //     outcome: [
    //       "Reduced collection time by 35% through optimized routing.",
    //       "Improved sample delivery reliability with real-time tracking and notifications.",
    //       "Increased agent efficiency with better route planning and coordination tools.",
    //     ],
    //     metrics: [
    //       { label: "Collection Time", value: "↓ 35%" },
    //       { label: "Reliability", value: "Improved" },
    //       { label: "Efficiency", value: "Increased" },
    //     ],
    //     services: ["Logistics App", "Route Optimization", "Field Coordination"],
    //   },
    // }),
    enrich({
      id: 5,
      title: "Feelit",
      description:
        "Mood-based social media platform where users post thoughts, stories, and images based on emotions for mental wellness",
      image: portfolioImage("app-development/feelit_app.webp"),
      link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
      category: "App Development",
      subcategory: "Social Networking",
      caseStudy: {
        overview:
          "Feelit creates a safe space for emotional expression and mental wellness. We developed a mood-based social platform where users share thoughts, stories, and images tied to their emotions, fostering a supportive community focused on mental health and authentic connection.",
        challenge:
          "Mental wellness platforms must create safe, supportive environments while encouraging authentic expression. The challenge was building features that help users process emotions while maintaining community guidelines that protect vulnerable users.",
        approach: [
          "Designed mood-based content organization that helps users find relatable emotional experiences.",
          "Built privacy controls and community moderation tools that maintain a safe environment.",
          "Created features that encourage positive mental health practices and emotional awareness.",
        ],
        outcome: [
          "Built a supportive community of users sharing authentic emotional experiences.",
          "Increased user engagement through meaningful, emotion-driven content connections.",
          "Provided a valuable platform for mental wellness and emotional expression.",
        ],
        metrics: [
          { label: "Community", value: "Supportive" },
          { label: "Engagement", value: "High" },
          { label: "Impact", value: "Positive" },
        ],
        services: ["Social Platform", "Mental Wellness", "Emotional Expression"],
      },
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
      caseStudy: {
        overview:
          "Eva People App empowers HR teams with employee insights and wellness tracking. We built a comprehensive platform featuring survey tools, analytics dashboards, and wellness monitoring that helps companies understand and improve employee satisfaction and performance.",
        challenge:
          "HR platforms must balance data collection with employee privacy and trust. The app needed to provide valuable insights to companies while ensuring employees feel their feedback is valued and their privacy is protected.",
        approach: [
          "Developed flexible survey tools that capture employee sentiment across multiple dimensions.",
          "Built analytics dashboards that translate data into actionable insights for HR teams.",
          "Created wellness tracking features that help companies support employee health and satisfaction.",
        ],
        outcome: [
          "Helped companies identify and address employee satisfaction issues proactively.",
          "Improved HR decision-making with data-driven insights into workforce trends.",
          "Enhanced employee engagement through transparent feedback and wellness initiatives.",
        ],
        metrics: [
          { label: "Insights", value: "Actionable" },
          { label: "Decision-Making", value: "Data-Driven" },
          { label: "Engagement", value: "Enhanced" },
        ],
        services: ["HR Platform", "Employee Analytics", "Wellness Tracking"],
      },
    }),
    // enrich({
    //   id: 7,
    //   title: "Eva Internships",
    //   description:
    //     "App helping students explore, apply, and manage internships worldwide with listings and mentorship tools",
    //   image: portfolioImage("app-development/Eva Internships.webp"),
    //   link: "",
    //   category: "App Development",
    //   subcategory: "Education / Career",
    //   caseStudy: {
    //     overview:
    //       "Eva Internships connects students with global internship opportunities. We developed a platform that helps students discover, apply to, and manage internships worldwide, with integrated mentorship tools that guide career development throughout the internship journey.",
    //     challenge:
    //       "Internship platforms must help students navigate complex application processes while connecting them with relevant opportunities. The challenge was creating tools that simplify discovery and application while providing mentorship support that enhances the internship experience.",
    //     approach: [
    //       "Built comprehensive internship listings with filtering and search that help students find relevant opportunities.",
    //       "Created application management tools that track progress across multiple applications.",
    //       "Integrated mentorship features that connect students with experienced professionals for guidance.",
    //     ],
    //     outcome: [
    //       "Helped thousands of students secure meaningful internship opportunities globally.",
    //       "Improved application success rates through better preparation and mentorship support.",
    //       "Created a comprehensive platform that supports students throughout their internship journey.",
    //     ],
    //     metrics: [
    //       { label: "Students Helped", value: "Thousands" },
    //       { label: "Success Rate", value: "Improved" },
    //       { label: "Support", value: "Comprehensive" },
    //     ],
    //     services: ["Internship Platform", "Career Development", "Mentorship Tools"],
    //   },
    // }),
    // enrich({
    //   id: 8,
    //   title: "Eva Training Certificates",
    //   description:
    //     "Digital certificate management app for companies and learners to issue, store, and validate training credentials",
    //   image: portfolioImage("app-development/Eva Training Certificates.webp"),
    //   link: "",
    //   category: "App Development",
    //   subcategory: "Education / Certification",
    //   caseStudy: {
    //     overview:
    //       "Eva Training Certificates digitizes credential management for training programs. We built a comprehensive app that enables companies to issue certificates, allows learners to store credentials securely, and provides validation tools that verify certificate authenticity.",
    //     challenge:
    //       "Certificate management requires security, authenticity verification, and easy access. The app needed to prevent fraud while making it simple for learners to access and share their credentials, and for employers to verify them.",
    //     approach: [
    //       "Developed secure certificate issuance systems with blockchain-based verification.",
    //       "Built digital wallet features that let learners store and organize all credentials.",
    //       "Created validation tools that allow instant verification of certificate authenticity.",
    //     ],
    //     outcome: [
    //       "Eliminated certificate fraud through secure, verifiable digital credentials.",
    //       "Simplified credential management for both issuers and learners.",
    //       "Enabled instant verification that speeds up hiring and credential checks.",
    //     ],
    //     metrics: [
    //       { label: "Security", value: "Enhanced" },
    //       { label: "Management", value: "Simplified" },
    //       { label: "Verification", value: "Instant" },
    //     ],
    //     services: ["Certificate Management", "Digital Credentials", "Verification System"],
    //   },
    // }),
    // enrich({
    //   id: 9,
    //   title: "Hayaty (iOS & Android)",
    //   description:
    //     "Healthcare and lifestyle management app for patients and caregivers with medication reminders and health records",
    //   image: portfolioImage("app-development/Hayaty.webp"),
    //   link: "",
    //   iosLink: "",
    //   androidLink: "",
    //   category: "App Development",
    //   subcategory: "Health / Wellness",
    //   caseStudy: {
    //     overview:
    //       "Hayaty supports patients and caregivers in managing health and wellness. We developed a cross-platform app for iOS and Android that provides medication reminders, health record management, and lifestyle tracking tools that help users maintain better health outcomes.",
    //     challenge:
    //       "Healthcare apps must be reliable, secure, and easy to use for users of all technical abilities. The challenge was creating medication reminder systems that are effective, health record management that's comprehensive yet simple, and features that support both patients and caregivers.",
    //     approach: [
    //       "Built intelligent medication reminder systems with customizable schedules and notifications.",
    //       "Developed secure health record management that organizes medical information clearly.",
    //       "Created caregiver features that allow family members to support patient health management.",
    //     ],
    //     outcome: [
    //       "Improved medication adherence through effective reminder systems.",
    //       "Enhanced health management with organized, accessible health records.",
    //       "Empowered caregivers to support patient wellness more effectively.",
    //     ],
    //     metrics: [
    //       { label: "Adherence", value: "Improved" },
    //       { label: "Management", value: "Enhanced" },
    //       { label: "Support", value: "Empowered" },
    //     ],
    //     services: ["Healthcare App", "Medication Management", "Health Records"],
    //   },
    // }),
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
      caseStudy: {
        overview:
          "Naseh provides daily Islamic guidance and spiritual development for Arabic-speaking Muslims. We developed a bilingual app (Arabic and English) that delivers motivational content, spiritual reminders, and personal development resources that support users' faith journey.",
        challenge:
          "Religious apps must balance authenticity with modern usability. The challenge was creating content delivery that feels reverent and meaningful while providing features that encourage daily engagement and spiritual growth.",
        approach: [
          "Designed a serene, respectful interface that reflects Islamic values and aesthetics.",
          "Built daily content delivery systems that provide fresh guidance and reminders.",
          "Created personal development features that help users track spiritual growth and goals.",
        ],
        outcome: [
          "Built a dedicated community of users seeking daily spiritual guidance.",
          "Increased daily engagement through meaningful, relevant content delivery.",
          "Supported users' personal development and spiritual growth journeys.",
        ],
        metrics: [
          { label: "Community", value: "Dedicated" },
          { label: "Engagement", value: "Daily" },
          { label: "Impact", value: "Spiritual Growth" },
        ],
        services: ["Religious App", "Spiritual Development", "Bilingual Platform"],
      },
    }),
    // enrich({
    //   id: 11,
    //   title: "Lafi (iOS - لافي)",
    //   description:
    //     "Premium Arabic-language shopping platform with hand-picked product categories and modern UI",
    //   image: portfolioImage("app-development/Lafi.webp"),
    //   link: "",
    //   category: "App Development",
    //   subcategory: "E-commerce",
    //   caseStudy: {
    //     overview:
    //       "Lafi brings premium shopping to Arabic-speaking customers with a curated, hand-picked product selection. We developed an iOS app with a modern, elegant UI that showcases quality products while providing a seamless shopping experience tailored to Arabic language and cultural preferences.",
    //     challenge:
    //       "Arabic e-commerce requires RTL (right-to-left) support and cultural considerations. The challenge was creating a premium shopping experience that feels native to Arabic speakers while maintaining modern design standards and excellent performance.",
    //     approach: [
    //       "Designed a modern, elegant UI with full RTL support for Arabic language.",
    //       "Built curated product categories with hand-picked selections that emphasize quality.",
    //       "Created a premium shopping experience that matches high-end retail expectations.",
    //     ],
    //     outcome: [
    //       "Established Lafi as a premium shopping destination for Arabic-speaking customers.",
    //       "Increased customer satisfaction with culturally appropriate design and language support.",
    //       "Built trust through curated product selection and premium user experience.",
    //     ],
    //     metrics: [
    //       { label: "Brand Position", value: "Premium" },
    //       { label: "Satisfaction", value: "High" },
    //       { label: "Trust", value: "Built" },
    //     ],
    //     services: ["Arabic E-commerce", "iOS Development", "RTL Support"],
    //   },
    // }),
    enrich({
      id: 12,
      title: "Rentop",
      description:
        "Marketplace app allowing users to rent out or lease items with product listings, booking calendar, and payment gateway",
      image: portfolioImage("app-development/rentop.webp"),
      link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
      category: "App Development",
      subcategory: "Marketplace / Rentals",
      caseStudy: {
        overview:
          "Rentop creates a sharing economy marketplace for item rentals. We built a comprehensive app that enables users to list items for rent, browse available rentals, manage bookings through integrated calendars, and process secure payments, making item sharing convenient and trustworthy.",
        challenge:
          "Rental marketplaces must coordinate bookings, handle payments securely, and build trust between renters and owners. The app needed to manage availability calendars, prevent double bookings, and provide dispute resolution mechanisms.",
        approach: [
          "Developed intelligent booking calendar systems that prevent conflicts and manage availability.",
          "Built secure payment processing with escrow features that protect both parties.",
          "Created rating and verification systems that build trust in the rental community.",
        ],
        outcome: [
          "Facilitated thousands of successful rentals through the platform.",
          "Increased trust in peer-to-peer rentals with verification and payment protection.",
          "Created a sustainable marketplace that benefits both renters and item owners.",
        ],
        metrics: [
          { label: "Rentals", value: "Thousands" },
          { label: "Trust", value: "Increased" },
          { label: "Marketplace", value: "Sustainable" },
        ],
        services: ["Rental Marketplace", "Booking System", "Payment Gateway"],
      },
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
      caseStudy: {
        overview:
          "ICCB Prayer Times serves the Muslim community with essential religious utilities. We developed an app that provides accurate prayer times based on location, Qibla direction using device compass, and mosque announcements, helping users maintain their daily religious observances.",
        challenge:
          "Prayer time apps must be accurate, location-aware, and respectful of religious requirements. The challenge was calculating precise prayer times based on location and providing reliable Qibla direction that works across different devices and locations.",
        approach: [
          "Integrated accurate prayer time calculations based on location and Islamic calendar methods.",
          "Developed Qibla direction features using device compass and GPS for precise orientation.",
          "Built notification systems for prayer times and mosque announcements.",
        ],
        outcome: [
          "Helped thousands of Muslims maintain daily prayer schedules with accurate reminders.",
          "Provided reliable Qibla direction that works globally across different locations.",
          "Created a trusted community resource for religious observances.",
        ],
        metrics: [
          { label: "Users", value: "Thousands" },
          { label: "Accuracy", value: "Reliable" },
          { label: "Trust", value: "Community" },
        ],
        services: ["Religious App", "Prayer Times", "Qibla Direction"],
      },
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
      caseStudy: {
        overview:
          "Evans Francis Christian App provides spiritual resources for Christian believers. We developed a comprehensive app featuring sermon videos, daily devotional messages, and Bible study resources that support users' spiritual growth and faith journey.",
        challenge:
          "Religious content apps must balance media delivery with meaningful engagement. The challenge was creating a platform that delivers video content efficiently while providing daily devotional content that encourages consistent spiritual practice.",
        approach: [
          "Built video streaming optimized for sermon content with offline download capabilities.",
          "Created daily devotional delivery systems that provide fresh spiritual content.",
          "Developed Bible study tools with search, bookmarks, and note-taking features.",
        ],
        outcome: [
          "Built a dedicated community of users engaging with spiritual content daily.",
          "Increased spiritual engagement through accessible, high-quality content delivery.",
          "Supported users' faith journeys with comprehensive spiritual resources.",
        ],
        metrics: [
          { label: "Community", value: "Dedicated" },
          { label: "Engagement", value: "Daily" },
          { label: "Impact", value: "Spiritual Growth" },
        ],
        services: ["Religious App", "Video Streaming", "Spiritual Resources"],
      },
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
      caseStudy: {
        overview:
          "Zigna AutoSnap empowers real estate agents to capture professional property photos using their smartphones. We developed an app with guided photography features, automatic editing, and professional tips that help agents create listing photos that sell properties faster.",
        challenge:
          "Real estate photography requires specific techniques and consistency. The app needed to guide non-professional photographers through proper angles, lighting, and composition while providing editing tools that enhance photos without over-processing.",
        approach: [
          "Built guided photography features with on-screen tips and angle suggestions.",
          "Developed automatic editing algorithms that enhance photos while maintaining realism.",
          "Created photo organization and sharing tools that streamline the listing process.",
        ],
        outcome: [
          "Helped agents create professional-quality photos without hiring photographers.",
          "Improved listing quality with consistent, appealing property photography.",
          "Reduced time and cost for real estate agents preparing property listings.",
        ],
        metrics: [
          { label: "Photo Quality", value: "Professional" },
          { label: "Listing Quality", value: "Improved" },
          { label: "Cost Savings", value: "Significant" },
        ],
        services: ["Photography App", "Real Estate Tools", "Photo Editing"],
      },
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
      caseStudy: {
        overview:
          "Klikomics revolutionizes digital comic reading with animated panels and original content. We developed an immersive reading app that brings comics to life through subtle animations, smooth navigation, and a curated library of original graphic novels that engage readers in new ways.",
        challenge:
          "Digital comics must balance innovation with readability. The challenge was creating animated panels that enhance the reading experience without distracting from the story, while providing smooth navigation that feels natural for comic reading.",
        approach: [
          "Developed animated panel technology that adds life to static comic pages.",
          "Built smooth navigation optimized for panel-by-panel comic reading.",
          "Created a curated content library featuring original graphic novels and series.",
        ],
        outcome: [
          "Created an engaging reading experience that attracts comic enthusiasts.",
          "Increased reading time through immersive animated content.",
          "Established Klikomics as an innovative platform for digital comics.",
        ],
        metrics: [
          { label: "Experience", value: "Engaging" },
          { label: "Reading Time", value: "Increased" },
          { label: "Innovation", value: "Recognized" },
        ],
        services: ["Comic Reading App", "Animation Technology", "Content Platform"],
      },
    }),
    // enrich({
    //   id: 17,
    //   title: "Dubai Travel Guide by eTips",
    //   description:
    //     "Digital travel companion for Dubai tourists with offline maps, sightseeing highlights, and audio guides",
    //   image: portfolioImage("app-development/Dubai Travel Guide by eTips.webp"),
    //   link: "",
    //   category: "App Development",
    //   subcategory: "Travel / Tourism",
    //   caseStudy: {
    //     overview:
    //       "Dubai Travel Guide by eTips serves as a comprehensive digital companion for tourists. We developed a travel app featuring offline maps, curated sightseeing highlights, and audio guides that help visitors explore Dubai even without internet connectivity.",
    //     challenge:
    //       "Travel apps must work reliably in areas with poor connectivity. The challenge was creating offline functionality for maps and content while providing rich, engaging information about attractions that enhances the travel experience.",
    //     approach: [
    //       "Built offline map functionality that works without internet connectivity.",
    //       "Created curated sightseeing content with detailed information about attractions.",
    //       "Developed audio guide features that provide immersive tour experiences.",
    //     ],
    //     outcome: [
    //       "Helped thousands of tourists navigate Dubai confidently with offline maps.",
    //       "Enhanced travel experiences with comprehensive attraction information and audio guides.",
    //       "Created a reliable travel companion that works anywhere in Dubai.",
    //     ],
    //     metrics: [
    //       { label: "Tourists Helped", value: "Thousands" },
    //       { label: "Experience", value: "Enhanced" },
    //       { label: "Reliability", value: "Offline" },
    //     ],
    //     services: ["Travel App", "Offline Maps", "Audio Guides"],
    //   },
    // }),
    enrich({
      id: 18,
      title: "Planta",
      description:
        "Wellness-focused app helping users cultivate healthy lifestyle habits with reminders and progress tracking",
      image: portfolioImage("app-development/Planta - Plant & Garden Care.webp"),
      link: "https://planta.com",
      category: "App Development",
      subcategory: "Health / Wellness",
      caseStudy: {
        overview:
          "Planta helps users develop healthy lifestyle habits through plant care and wellness tracking. We developed an app that combines plant care reminders with progress tracking, creating a unique approach to habit formation that connects users with nature while building consistent routines.",
        challenge:
          "Habit formation apps must maintain long-term engagement. The challenge was creating a system that keeps users motivated through plant care while tracking wellness habits, making the app both functional and emotionally rewarding.",
        approach: [
          "Built intelligent reminder systems that adapt to users' schedules and preferences.",
          "Developed progress tracking that visualizes habit formation and plant growth.",
          "Created gamification elements that reward consistent care and habit maintenance.",
        ],
        outcome: [
          "Helped users build consistent wellness habits through engaging plant care mechanics.",
          "Increased long-term app engagement through rewarding, nature-connected experiences.",
          "Created a unique approach to habit formation that combines wellness with plant care.",
        ],
        metrics: [
          { label: "Habit Formation", value: "Improved" },
          { label: "Engagement", value: "Long-term" },
          { label: "Approach", value: "Unique" },
        ],
        services: ["Wellness App", "Habit Tracking", "Plant Care"],
      },
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
      caseStudy: {
        overview:
          "Serviz connects homeowners with skilled service professionals through a transparent, user-friendly platform. We developed a service aggregator app that matches users with qualified professionals, provides transparent pricing, and facilitates seamless booking and payment for home services.",
        challenge:
          "Service marketplaces must build trust between users and service providers. The challenge was creating verification systems, transparent pricing models, and rating mechanisms that ensure quality service delivery while protecting both parties.",
        approach: [
          "Built professional verification and background check systems that ensure service quality.",
          "Developed transparent pricing tools that show costs upfront without hidden fees.",
          "Created rating and review systems that help users make informed decisions.",
        ],
        outcome: [
          "Facilitated thousands of successful service bookings through the platform.",
          "Increased trust in on-demand services with verification and transparent pricing.",
          "Created a reliable marketplace that benefits both homeowners and service professionals.",
        ],
        metrics: [
          { label: "Bookings", value: "Thousands" },
          { label: "Trust", value: "Increased" },
          { label: "Marketplace", value: "Reliable" },
        ],
        services: ["Service Marketplace", "On-Demand Services", "Professional Matching"],
      },
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
      caseStudy: {
        overview:
          "Kaamwali Bais connects households with reliable domestic help through a trusted platform. We developed an app that provides detailed helper profiles, comprehensive background checks, and secure hiring processes that give families confidence in their domestic help choices.",
        challenge:
          "Domestic help platforms require extensive trust-building measures. The challenge was creating verification systems, detailed profiles, and background checks that provide families with the information they need to make safe hiring decisions.",
        approach: [
          "Developed comprehensive background check and verification systems.",
          "Built detailed profile systems that showcase skills, experience, and references.",
          "Created secure hiring and payment processes that protect both families and helpers.",
        ],
        outcome: [
          "Helped thousands of families find reliable domestic help through verified profiles.",
          "Increased trust in domestic help hiring with comprehensive verification systems.",
          "Created a safe, transparent platform that benefits both families and domestic workers.",
        ],
        metrics: [
          { label: "Families Helped", value: "Thousands" },
          { label: "Trust", value: "Increased" },
          { label: "Safety", value: "Enhanced" },
        ],
        services: ["Domestic Help Platform", "Background Checks", "Secure Hiring"],
      },
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
      caseStudy: {
        overview:
          "Satisfaction Farm connects consumers directly with farmers through a farm-to-home e-commerce platform. We developed an app that enables real-time order placement for fresh produce, creating a direct supply chain that benefits both farmers and consumers while ensuring freshness.",
        challenge:
          "Farm-to-consumer platforms must handle perishable inventory and coordinate logistics. The challenge was creating real-time inventory management, efficient delivery coordination, and systems that ensure produce freshness from farm to home.",
        approach: [
          "Built real-time inventory systems that show available produce directly from farms.",
          "Developed efficient order processing that minimizes time between harvest and delivery.",
          "Created logistics coordination that ensures fresh produce reaches consumers quickly.",
        ],
        outcome: [
          "Connected farmers directly with consumers, eliminating middlemen and reducing costs.",
          "Ensured fresher produce delivery through optimized logistics and real-time ordering.",
          "Supported local agriculture while providing consumers with high-quality, fresh produce.",
        ],
        metrics: [
          { label: "Supply Chain", value: "Direct" },
          { label: "Freshness", value: "Optimized" },
          { label: "Support", value: "Local Agriculture" },
        ],
        services: ["Farm-to-Home E-commerce", "Real-Time Orders", "Fresh Produce"],
      },
    }),
    // enrich({
    //   id: 22,
    //   title: "Fresh and Fresh",
    //   description:
    //     "Grocery delivery app connecting users to local stores for daily essentials with flexible delivery slots",
    //   image: portfolioImage("app-development/Fresh and Fresh.webp"),
    //   link: "",
    //   category: "App Development",
    //   subcategory: "E-commerce / Grocery",
    //   caseStudy: {
    //     overview:
    //       "Fresh and Fresh makes grocery shopping convenient by connecting users with local stores. We developed a grocery delivery app that offers flexible delivery slots, real-time inventory from local stores, and seamless ordering that brings daily essentials to customers' doors.",
    //     challenge:
    //       "Grocery delivery requires coordination with multiple local stores and flexible scheduling. The app needed to show real-time inventory, manage delivery slots efficiently, and coordinate between customers, stores, and delivery personnel.",
    //     approach: [
    //       "Built flexible delivery slot management that accommodates customer preferences.",
    //       "Developed real-time inventory integration with local stores.",
    //       "Created efficient order coordination that ensures timely delivery of fresh groceries.",
    //     ],
    //     outcome: [
    //       "Increased convenience for customers with flexible delivery options.",
    //       "Supported local stores by connecting them with more customers.",
    //       "Created a reliable grocery delivery service that serves daily shopping needs.",
    //     ],
    //     metrics: [
    //       { label: "Convenience", value: "Increased" },
    //       { label: "Store Support", value: "Local" },
    //       { label: "Service", value: "Reliable" },
    //     ],
    //     services: ["Grocery Delivery", "Local Store Integration", "Flexible Scheduling"],
    //   },
    // }),
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
      caseStudy: {
        overview:
          "Bharat Meds provides reliable medicine delivery with real-time tracking. We developed a pharmaceutical delivery app that enables users to order prescription and over-the-counter medications, track deliveries in real-time, and receive medications safely and on time.",
        challenge:
          "Medicine delivery requires accuracy, security, and timely delivery. The app needed to handle prescription verification, ensure medication safety, and provide reliable tracking that gives users confidence in their orders.",
        approach: [
          "Built secure prescription handling and verification systems.",
          "Developed real-time tracking that shows delivery progress from pharmacy to door.",
          "Created safety features that ensure correct medications and proper handling.",
        ],
        outcome: [
          "Improved access to medications, especially for those with mobility challenges.",
          "Increased medication adherence through convenient delivery and reminders.",
          "Created a trusted platform for safe, reliable medicine delivery.",
        ],
        metrics: [
          { label: "Access", value: "Improved" },
          { label: "Adherence", value: "Increased" },
          { label: "Trust", value: "Built" },
        ],
        services: ["Medicine Delivery", "Pharmacy Integration", "Real-Time Tracking"],
      },
    }),
    // enrich({
    //   id: 24,
    //   title: "Crimson Classified Hub",
    //   description:
    //     "Community-driven classifieds platform for local listings and community engagement",
    //   image: portfolioImage(
    //     "app-development/Crimson Classified Hub – Community-Driven Classifieds Platform.jpg"
    //   ),
    //   link: "",
    //   category: "App Development",
    //   subcategory: "Classifieds / Community",
    //   caseStudy: {
    //     overview:
    //       "Crimson Classified Hub creates a community-focused marketplace for local listings. We developed a classifieds app that emphasizes community engagement, local connections, and user-driven content moderation, creating a trusted platform for local buying and selling.",
    //     challenge:
    //       "Classifieds platforms must balance openness with safety and community standards. The challenge was creating moderation tools, building trust between users, and fostering community engagement while maintaining a user-friendly listing experience.",
    //     approach: [
    //       "Built community-driven moderation features that empower users to maintain quality.",
    //       "Developed local focus features that connect neighbors and community members.",
    //       "Created engagement tools that encourage community interaction beyond transactions.",
    //     ],
    //     outcome: [
    //       "Built a strong community of local users engaging in classified transactions.",
    //       "Increased trust in local classifieds through community-driven moderation.",
    //       "Created a platform that strengthens local community connections.",
    //     ],
    //     metrics: [
    //       { label: "Community", value: "Strong" },
    //       { label: "Trust", value: "Increased" },
    //       { label: "Connections", value: "Local" },
    //     ],
    //     services: ["Classifieds Platform", "Community Engagement", "Local Marketplace"],
    //   },
    // }),
    // enrich({
    //   id: 25,
    //   title: "Dubai Classifieds Pulse",
    //   description:
    //     "Hyperlocal classifieds listings platform for Dubai community",
    //   image: portfolioImage(
    //     "app-development/Dubai Classifieds Pulse – Hyperlocal Classified Listings Platform.jpg"
    //   ),
    //   link: "",
    //   category: "App Development",
    //   subcategory: "Classifieds / Local",
    //   caseStudy: {
    //     overview:
    //       "Dubai Classifieds Pulse serves the Dubai community with hyperlocal classified listings. We developed a location-focused app that connects Dubai residents for buying, selling, and services, with features tailored to the unique needs of the Dubai market.",
    //     challenge:
    //       "Hyperlocal platforms must provide relevant, location-specific content. The challenge was creating location-based filtering, understanding Dubai's unique market needs, and building trust in a diverse, international community.",
    //     approach: [
    //       "Built hyperlocal filtering that shows listings relevant to specific Dubai neighborhoods.",
    //       "Developed features tailored to Dubai's diverse, international community.",
    //       "Created trust-building features that work across different cultural backgrounds.",
    //     ],
    //     outcome: [
    //       "Created a trusted platform for Dubai residents to buy, sell, and connect locally.",
    //       "Increased local engagement through hyperlocal features and neighborhood focus.",
    //       "Built a marketplace that serves Dubai's unique, diverse community needs.",
    //     ],
    //     metrics: [
    //       { label: "Trust", value: "Built" },
    //       { label: "Engagement", value: "Local" },
    //       { label: "Relevance", value: "Hyperlocal" },
    //     ],
    //     services: ["Hyperlocal Classifieds", "Dubai Marketplace", "Community Platform"],
    //   },
    // }),
    // enrich({
    //   id: 26,
    //   title: "Ember",
    //   description:
    //     "AI-powered soulmate matching & conversation platform for relationship building",
    //   image: portfolioImage(
    //     "app-development/Ember – AI-Powered Soulmate Matching & Conversation Platform.jpg"
    //   ),
    //   link: "",
    //   category: "App Development",
    //   subcategory: "Dating / AI",
    //   caseStudy: {
    //     overview:
    //       "Ember uses AI to create meaningful connections through intelligent matching and conversation assistance. We developed a dating app that goes beyond surface-level matching, using AI to facilitate deeper conversations and help users build genuine relationships.",
    //     challenge:
    //       "Dating apps must balance AI assistance with authentic human connection. The challenge was creating matching algorithms that understand compatibility while providing conversation tools that enhance rather than replace genuine interaction.",
    //     approach: [
    //       "Developed AI-powered matching algorithms that analyze compatibility beyond basic preferences.",
    //       "Built conversation assistance features that help users start meaningful discussions.",
    //       "Created relationship-building tools that support connections beyond initial matching.",
    //     ],
    //     outcome: [
    //       "Increased meaningful connections through intelligent, compatibility-focused matching.",
    //       "Improved conversation quality with AI-assisted conversation starters and guidance.",
    //       "Created a platform that prioritizes genuine relationship building over casual connections.",
    //     ],
    //     metrics: [
    //       { label: "Connections", value: "Meaningful" },
    //       { label: "Conversation", value: "Improved" },
    //       { label: "Focus", value: "Relationships" },
    //     ],
    //     services: ["AI Dating App", "Soulmate Matching", "Conversation Platform"],
    //   },
    // }),
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
      caseStudy: {
        overview:
          "UrjaOne Nexus creates a marketplace for energy services and solutions. We developed a mobile platform that connects consumers with energy providers, renewable energy solutions, and energy management services, making energy choices more accessible and transparent.",
        challenge:
          "Energy marketplaces must simplify complex energy decisions. The challenge was creating a platform that helps users understand energy options, compare providers, and make informed choices about energy services and renewable solutions.",
        approach: [
          "Built comparison tools that help users understand and compare energy options.",
          "Developed provider matching that connects users with appropriate energy solutions.",
          "Created educational content that helps users make informed energy decisions.",
        ],
        outcome: [
          "Increased access to energy solutions through simplified marketplace discovery.",
          "Helped users make informed energy choices with comparison and educational tools.",
          "Created a platform that supports both traditional and renewable energy adoption.",
        ],
        metrics: [
          { label: "Access", value: "Increased" },
          { label: "Informed Choices", value: "Enabled" },
          { label: "Support", value: "Comprehensive" },
        ],
        services: ["Energy Marketplace", "Provider Matching", "Energy Solutions"],
      },
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
      caseStudy: {
        overview:
          "Find My AI Tool helps users discover the right AI tools for their needs. We built a comprehensive discovery platform featuring curated listings, detailed reviews, and intelligent rankings that help users navigate the rapidly growing AI tool ecosystem across design, automation, and productivity categories.",
        challenge:
          "The AI tool landscape is vast and constantly evolving. The challenge was creating a platform that stays current with new tools, provides meaningful comparisons, and helps users make informed decisions about which AI tools best fit their specific needs.",
        approach: [
          "Developed intelligent categorization and filtering that helps users find relevant tools quickly.",
          "Built comprehensive review and rating systems that provide authentic user insights.",
          "Created ranking algorithms that surface the best tools based on multiple criteria.",
        ],
        outcome: [
          "Helped thousands of users discover and adopt AI tools that improve their workflows.",
          "Established Find My AI Tool as a trusted resource in the AI tool ecosystem.",
          "Created a platform that simplifies AI tool discovery and decision-making.",
        ],
        metrics: [
          { label: "Users Helped", value: "Thousands" },
          { label: "Trust", value: "Established" },
          { label: "Discovery", value: "Simplified" },
        ],
        services: ["AI Directory", "Tool Discovery", "SaaS Reviews"],
      },
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
      caseStudy: {
        overview:
          "Vyro AI transforms ordinary photos into stunning artwork using advanced machine learning and neural style transfer. We developed an app that applies multiple artistic styles to user photos, making professional-quality art generation accessible to everyone through AI technology.",
        challenge:
          "AI art generation requires balancing quality with processing speed. The challenge was implementing neural style transfer algorithms that produce high-quality results quickly enough for mobile use while offering diverse artistic styles that appeal to different tastes.",
        approach: [
          "Implemented optimized neural style transfer algorithms for mobile performance.",
          "Developed multiple artistic style options ranging from classic to contemporary.",
          "Created an intuitive interface that makes AI art generation accessible to non-technical users.",
        ],
        outcome: [
          "Enabled users to create professional-quality artwork from personal photos.",
          "Increased engagement through fast, high-quality art generation.",
          "Democratized art creation by making AI-powered artistic tools accessible to everyone.",
        ],
        metrics: [
          { label: "Quality", value: "Professional" },
          { label: "Engagement", value: "High" },
          { label: "Accessibility", value: "Democratized" },
        ],
        services: ["AI Art Generation", "Neural Style Transfer", "Photo Editing"],
      },
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
      caseStudy: {
        overview:
          "Musicly revolutionizes music creation by generating original compositions from text prompts and moods. We developed an AI music generator that creates background tracks and theme-based soundscapes, making music production accessible to creators who may not have musical training.",
        challenge:
          "AI music generation must produce coherent, enjoyable compositions that match user intent. The challenge was creating algorithms that understand text prompts and moods while generating music that sounds natural and professionally produced.",
        approach: [
          "Developed AI models that interpret text prompts and translate them into musical compositions.",
          "Built mood-based generation that creates soundscapes matching emotional contexts.",
          "Created diverse style options for background tracks and theme-based music.",
        ],
        outcome: [
          "Enabled creators to generate original music without musical expertise.",
          "Increased content creation possibilities with AI-powered music generation.",
          "Democratized music production by making professional-quality composition accessible.",
        ],
        metrics: [
          { label: "Accessibility", value: "Democratized" },
          { label: "Possibilities", value: "Expanded" },
          { label: "Quality", value: "Professional" },
        ],
        services: ["AI Music Generation", "Audio Creation", "Text-to-Music"],
      },
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
      caseStudy: {
        overview:
          "Speaksify provides personalized public speaking coaching through AI technology. We developed an AI-powered platform that analyzes speech patterns, provides real-time feedback, and offers personalized coaching to help users improve their communication and presentation skills.",
        challenge:
          "Public speaking coaching requires nuanced understanding of speech patterns, pacing, and delivery. The challenge was creating AI that provides meaningful, actionable feedback that helps users improve their speaking skills in a supportive, constructive way.",
        approach: [
          "Developed AI speech analysis that evaluates pacing, tone, clarity, and engagement.",
          "Built real-time feedback systems that provide immediate coaching during practice sessions.",
          "Created personalized improvement plans that adapt to each user's specific needs and goals.",
        ],
        outcome: [
          "Helped users improve public speaking confidence and skills through AI coaching.",
          "Increased accessibility to public speaking training with affordable AI-powered solutions.",
          "Created a supportive learning environment that builds communication skills effectively.",
        ],
        metrics: [
          { label: "Improvement", value: "Measurable" },
          { label: "Accessibility", value: "Increased" },
          { label: "Support", value: "Effective" },
        ],
        services: ["AI Coaching", "Public Speaking", "Communication Training"],
      },
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
      caseStudy: {
        overview:
          "Project Butterfly combines blockchain technology with environmental action through NFT-backed carbon offsetting. We developed a platform that creates verifiable environmental assets as NFTs, ensuring that each purchase directly supports real-world carbon offsetting initiatives with transparent, blockchain-verified impact.",
        challenge:
          "Environmental blockchain projects must prove real-world impact. The challenge was creating NFT systems that represent verifiable carbon offsets while maintaining transparency and ensuring that blockchain transactions translate to actual environmental benefits.",
        approach: [
          "Developed NFT systems that represent verified carbon offset assets.",
          "Built transparent tracking that shows real-world environmental impact of each NFT.",
          "Created verification mechanisms that ensure carbon offsets are legitimate and measurable.",
        ],
        outcome: [
          "Connected blockchain technology with tangible environmental action.",
          "Increased transparency in carbon offsetting through blockchain verification.",
          "Created a model for NFT utility that generates real-world positive impact.",
        ],
        metrics: [
          { label: "Impact", value: "Real-World" },
          { label: "Transparency", value: "Blockchain-Verified" },
          { label: "Model", value: "Innovative" },
        ],
        services: ["Blockchain Platform", "Carbon Offsetting", "NFT Utility"],
      },
    }),
    // enrich({
    //   id: 2,
    //   title: "Earlynctr",
    //   description:
    //     "Curated investment platform for early-stage crypto projects and blockchain startups with vetted listings and community voting",
    //   image: portfolioImage("blockchain/Earlynctr.png"),
    //   link: "",
    //   category: "Blockchain",
    //   subcategory: "Crypto Investment / Startup Incubation",
    //   caseStudy: {
    //     overview:
    //       "Earlynctr creates a trusted platform for discovering and investing in early-stage crypto projects. We developed a curated investment platform featuring vetted project listings, community voting mechanisms, and comprehensive due diligence tools that help investors make informed decisions in the blockchain space.",
    //     challenge:
    //       "Crypto investment platforms must balance accessibility with security and due diligence. The challenge was creating vetting processes that filter quality projects while providing community-driven insights that help investors evaluate opportunities effectively.",
    //     approach: [
    //       "Built comprehensive vetting systems that evaluate projects across multiple criteria.",
    //       "Developed community voting mechanisms that surface promising projects through collective intelligence.",
    //       "Created due diligence tools that provide investors with essential project information.",
    //     ],
    //     outcome: [
    //       "Helped investors discover quality early-stage crypto projects through curated listings.",
    //       "Increased investment confidence with comprehensive vetting and community insights.",
    //       "Created a platform that supports blockchain startup ecosystem growth.",
    //     ],
    //     metrics: [
    //       { label: "Discovery", value: "Quality Projects" },
    //       { label: "Confidence", value: "Increased" },
    //       { label: "Support", value: "Ecosystem Growth" },
    //     ],
    //     services: ["Crypto Investment Platform", "Project Vetting", "Community Voting"],
    //   },
    // }),
    // enrich({
    //   id: 3,
    //   title: "Solalgo",
    //   description:
    //     "Analytics engine built for the Solana ecosystem providing DApp performance metrics, smart contract tracking, and real-time data visualization",
    //   image: portfolioImage("blockchain/Solalgo.png"),
    //   link: "",
    //   category: "Blockchain",
    //   subcategory: "Blockchain Analytics / Developer Tools",
    //   caseStudy: {
    //     overview:
    //       "Solalgo provides comprehensive analytics for the Solana blockchain ecosystem. We developed an analytics engine that tracks DApp performance, monitors smart contract activity, and provides real-time data visualization, giving developers and investors essential insights into Solana-based projects.",
    //     challenge:
    //       "Blockchain analytics must process vast amounts of on-chain data in real-time. The challenge was creating systems that aggregate, analyze, and visualize Solana blockchain data efficiently while providing actionable insights for developers and investors.",
    //     approach: [
    //       "Built real-time data processing systems that track Solana blockchain activity continuously.",
    //       "Developed DApp performance metrics that help developers optimize their applications.",
    //       "Created intuitive data visualization that makes complex blockchain data accessible.",
    //     ],
    //     outcome: [
    //       "Provided essential analytics tools for Solana ecosystem developers and investors.",
    //       "Increased transparency in DApp performance through comprehensive metrics.",
    //       "Created a valuable resource for understanding Solana blockchain activity and trends.",
    //     ],
    //     metrics: [
    //       { label: "Tools", value: "Essential" },
    //       { label: "Transparency", value: "Increased" },
    //       { label: "Resource", value: "Valuable" },
    //     ],
    //     services: ["Blockchain Analytics", "Solana Tools", "Data Visualization"],
    //   },
    // }),
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
      caseStudy: {
        overview:
          "Chatly creates natural, engaging conversations through advanced AI. We developed a chatbot that uses sophisticated natural language processing to provide both productivity assistance and companionship, creating interactions that feel genuinely human while delivering practical value.",
        challenge:
          "Creating human-like chatbot conversations requires balancing natural language understanding with contextual awareness. The challenge was developing AI that maintains conversation coherence, understands context, and provides both functional productivity support and engaging companionship.",
        approach: [
          "Implemented advanced NLP models that understand context and maintain conversation flow.",
          "Developed personality systems that create engaging, consistent conversational experiences.",
          "Built productivity features that help users accomplish tasks while maintaining natural interaction.",
        ],
        outcome: [
          "Created engaging chatbot experiences that users enjoy interacting with regularly.",
          "Increased productivity through AI assistance that feels natural and helpful.",
          "Established Chatly as a leader in human-like conversational AI.",
        ],
        metrics: [
          { label: "Engagement", value: "High" },
          { label: "Productivity", value: "Increased" },
          { label: "Leadership", value: "AI Conversations" },
        ],
        services: ["AI Chatbot", "NLP Development", "Conversational AI"],
      },
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
      caseStudy: {
        overview:
          "Dawn AI combines conversational AI with creative capabilities. We developed an intelligent assistant that integrates text-based conversation with art generation, helping users with creative ideation and providing inspirational prompts that spark imagination and artistic expression.",
        challenge:
          "Combining conversational AI with creative generation requires seamless integration. The challenge was creating a chatbot that can engage in creative conversations while generating art on demand, maintaining context between conversation and visual creation.",
        approach: [
          "Integrated art generation capabilities directly into conversational flow.",
          "Developed creative ideation features that help users explore artistic concepts.",
          "Built inspirational prompt systems that spark creativity and guide artistic exploration.",
        ],
        outcome: [
          "Created a unique creative assistant that combines conversation with art generation.",
          "Increased creative productivity by making art generation accessible through natural conversation.",
          "Established Dawn AI as an innovative platform for AI-powered creative assistance.",
        ],
        metrics: [
          { label: "Innovation", value: "Unique" },
          { label: "Productivity", value: "Creative" },
          { label: "Platform", value: "Innovative" },
        ],
        services: ["Creative AI Chatbot", "Art Generation", "Creative Ideation"],
      },
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
      caseStudy: {
        overview:
          "GENZ Art creates a vibrant platform for Gen Z users to express themselves through AI art. We developed a chatbot that makes art creation accessible through interactive chat-based prompts, enabling users to generate and share AI artworks that reflect their unique style and personality.",
        challenge:
          "Gen Z platforms must feel authentic, engaging, and shareable. The challenge was creating a chatbot interface that appeals to Gen Z aesthetics and communication styles while making AI art generation fun, easy, and social.",
        approach: [
          "Designed a vibrant, Gen Z-focused interface that feels modern and engaging.",
          "Built interactive chat prompts that make art creation conversational and fun.",
          "Created sharing features that enable social expression and community engagement.",
        ],
        outcome: [
          "Built a dedicated Gen Z community creating and sharing AI-generated art.",
          "Increased creative expression through accessible, chat-based art generation.",
          "Established GENZ Art as a go-to platform for Gen Z artistic expression.",
        ],
        metrics: [
          { label: "Community", value: "Dedicated" },
          { label: "Expression", value: "Creative" },
          { label: "Platform", value: "Go-To" },
        ],
        services: ["Gen Z Platform", "AI Art Chatbot", "Social Expression"],
      },
    }),
  ],
  gameDevelopment: [
    // enrich({
    //   id: 1,
    //   title: "Action Player Games",
    //   description:
    //     "Diverse collection of fast-paced arcade-style mini-games designed to keep users engaged with adrenaline-packed gameplay",
    //   image: portfolioImage("game development/2 3 4 Player Mini Games.webp"),
    //   link: "",
    //   category: "Game Development",
    //   subcategory: "Action / Arcade Bundle",
    //   caseStudy: {
    //     overview:
    //       "Action Player Games delivers adrenaline-packed entertainment through a diverse collection of arcade mini-games. We developed a game bundle featuring fast-paced action games designed for 2-4 players, creating engaging multiplayer experiences that keep players coming back for more.",
    //     challenge:
    //       "Multiplayer arcade games must balance simplicity with engagement. The challenge was creating diverse mini-games that are easy to learn but challenging to master, with smooth multiplayer functionality that works reliably across different devices.",
    //     approach: [
    //       "Developed multiple arcade-style mini-games with varied gameplay mechanics.",
    //       "Built robust multiplayer systems that support 2-4 players seamlessly.",
    //       "Created engaging progression systems that maintain long-term player interest.",
    //     ],
    //     outcome: [
    //       "Created an entertaining game collection that appeals to casual and competitive players.",
    //       "Increased player engagement through diverse gameplay and multiplayer features.",
    //       "Established Action Player Games as a go-to destination for quick, fun gaming sessions.",
    //     ],
    //     metrics: [
    //       { label: "Entertainment", value: "High" },
    //       { label: "Engagement", value: "Increased" },
    //       { label: "Position", value: "Go-To" },
    //     ],
    //     services: ["Game Development", "Multiplayer Games", "Arcade Bundle"],
    //   },
    // }),
    enrich({
      id: 2,
      title: "Worms Zone.io",
      description:
        "Addictive .io-style snake game where players control colorful worms competing to grow the biggest with real-time multiplayer",
      image: portfolioImage("game development/Worms Zone .io - Hungry Snake.webp"),
      link: "https://wormszone.io",
      category: "Game Development",
      subcategory: "Multiplayer / Casual Arcade",
      caseStudy: {
        overview:
          "Worms Zone.io brings the classic snake game into the modern .io multiplayer arena. We developed an addictive game where players control colorful worms competing in real-time to grow the biggest, creating competitive multiplayer experiences that are easy to learn but endlessly engaging.",
        challenge:
          ".io games require real-time multiplayer synchronization and balanced gameplay. The challenge was creating smooth real-time multiplayer mechanics, ensuring fair competition, and maintaining server performance with potentially thousands of concurrent players.",
        approach: [
          "Developed real-time multiplayer systems that handle large numbers of concurrent players.",
          "Built balanced gameplay mechanics that reward skill while remaining accessible.",
          "Created engaging progression systems that keep players competing to grow their worms.",
        ],
        outcome: [
          "Created an addictive multiplayer experience that attracts players globally.",
          "Increased player retention through competitive, skill-based gameplay.",
          "Established Worms Zone.io as a popular .io game in the competitive multiplayer space.",
        ],
        metrics: [
          { label: "Experience", value: "Addictive" },
          { label: "Retention", value: "High" },
          { label: "Position", value: "Popular" },
        ],
        services: [".io Game Development", "Real-Time Multiplayer", "Competitive Gaming"],
      },
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
      caseStudy: {
        overview:
          "Sahi creates a metaverse-style social gaming experience combining voice chat with interactive mini-games. We developed an immersive game world where players can chat, play games together, and build social connections in a virtual environment that feels like a modern digital hangout.",
        challenge:
          "Social gaming platforms must balance gameplay with social interaction. The challenge was creating voice chat systems, integrating mini-games seamlessly, and building a metaverse-style environment that encourages social connection while providing engaging gameplay.",
        approach: [
          "Developed high-quality voice chat systems that enable natural social interaction.",
          "Built diverse mini-games that can be played together in social contexts.",
          "Created metaverse-style environments that encourage exploration and social connection.",
        ],
        outcome: [
          "Created a unique social gaming platform that combines entertainment with connection.",
          "Increased user engagement through social gameplay and voice interaction.",
          "Established Sahi as an innovative platform in the social gaming and metaverse space.",
        ],
        metrics: [
          { label: "Platform", value: "Unique" },
          { label: "Engagement", value: "Social" },
          { label: "Innovation", value: "Metaverse" },
        ],
        services: ["Social Gaming", "Voice Chat", "Metaverse Development"],
      },
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
      caseStudy: {
        overview:
          "Projectsy.ai revolutionizes project management with AI-powered task organization. We developed a SaaS platform that uses artificial intelligence to help teams manage projects more efficiently, automatically organizing tasks, predicting bottlenecks, and providing intelligent insights that improve productivity.",
        challenge:
          "AI-powered project management must provide real value without overwhelming users. The challenge was creating AI features that genuinely improve project outcomes while maintaining intuitive interfaces that teams can adopt without extensive training.",
        approach: [
          "Developed AI algorithms that analyze project patterns and provide actionable insights.",
          "Built intelligent task organization that automatically prioritizes and categorizes work.",
          "Created predictive features that help teams anticipate and prevent project issues.",
        ],
        outcome: [
          "Improved team productivity through AI-powered project organization and insights.",
          "Increased project success rates with predictive analytics and intelligent recommendations.",
          "Established Projectsy.ai as a leader in AI-enhanced project management.",
        ],
        metrics: [
          { label: "Productivity", value: "Improved" },
          { label: "Success Rate", value: "Increased" },
          { label: "Leadership", value: "AI-Enhanced" },
        ],
        services: ["SaaS Development", "AI Project Management", "Productivity Platform"],
      },
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
      caseStudy: {
        overview:
          "VirtuTeams enables effective remote team management and operations. We developed a comprehensive SaaS platform that helps distributed teams collaborate, track work, and maintain productivity regardless of location, providing essential tools for modern remote workforce management.",
        challenge:
          "Remote team management requires tools that bridge distance and time zones. The challenge was creating features that facilitate collaboration, maintain team cohesion, and provide visibility into remote operations while respecting work-life boundaries.",
        approach: [
          "Built collaboration tools that enable seamless communication across time zones.",
          "Developed work tracking and visibility features that help managers understand remote operations.",
          "Created team management tools that maintain connection and productivity in distributed teams.",
        ],
        outcome: [
          "Enabled effective remote team management for distributed organizations.",
          "Increased collaboration and productivity in remote work environments.",
          "Established VirtuTeams as a comprehensive solution for remote operations management.",
        ],
        metrics: [
          { label: "Management", value: "Effective" },
          { label: "Productivity", value: "Increased" },
          { label: "Solution", value: "Comprehensive" },
        ],
        services: ["SaaS Platform", "Remote Team Management", "Collaboration Tools"],
      },
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

