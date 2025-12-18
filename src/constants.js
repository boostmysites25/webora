// work process
import process1 from "./assets/working-process-1.png";
import process2 from "./assets/working-process-2.png";
import process3 from "./assets/working-process-3.png";
import process4 from "./assets/working-process-4.png";

// web development services icons
import ecomWebIcon from "./assets/icons/online-shopping.png";
import socialWebIcon from "./assets/icons/socialmedia.png";
import landingWebIcon from "./assets/icons/landing-page.png";
import customWebIcon from "./assets/icons/software-development.png";

// app development services icons
import iosAppIcon from "./assets/icons/ios-development.png";
import androidAppIcon from "./assets/icons/android-development.png";
import flutterAppIcon from "./assets/icons/flutter-development.png";
import hybridAppIcon from "./assets/icons/hybrid-app-development.png";

// clients
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";

// logo
import logo from "./assets/logo/logo.png";

export { logo };

// client details
export const clientDetails = {
  phone: "+911234567890",
  
  phoneDisplay: "+91 93414-36784",
  email: "info@weboraai.com",
  address: "Shree Dutta Township Kattigenahalli, Yelahanka, Bangalore, 560064",
  mapLink:
    "https://www.google.com/maps?q=Shree+Dutta+Township+Kattigenahalli,+Yelahanka,+Bangalore+560064",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Shree%20Dutta%20Township%20Kattigenahalli,%20Yelahanka,%20Bangalore%20560064&output=embed",
  whatsappLink:
    "https://api.whatsapp.com/send/?phone=919341436784&text&type=phone_number&app_absent=0",
  linkedin:
    "https://www.linkedin.com/search/results/all/?keywords=weboraai&origin=TYPEAHEAD_HISTORY&searchId=81a8b2c9-282e-426a-bb73-c3d227b6e2c7&sid=n*T&spellCorrectionEnabled=true",
  instagram: "https://www.instagram.com/webora_ai?igsh=Mmo1ZWUzNXIxdTly",
  facebook: "https://www.facebook.com/share/1BUnUi2uJP/",
};

// landing page header links
export const landingPageHeaderLinks = [
  {
    id: 1,
    title: "Home",
    link: "banner",
  },
  {
    id: 2,
    title: "About Us",
    link: "about-us",
  },
  {
    id: 3,
    title: "Services",
    link: "services",
  },
  // {
  //   id: 4,
  //   title: "Contact Us",
  //   link: "contact",
  // },
];

// website pages
export const websitePagesLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  // {
  //   id: 2,
  //   title: "Industries",
  //   link: "/industries",
  // },
  {
    id: 3,
    title: "Our Services",
    link: "/services",
  },
  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio",
  },
];

// working process
export const workingProcess = [
  {
    id: 1,
    title: "Consultation & Strategy",
    description:
      "We begin with a comprehensive consultation to understand your goals and outline a strategic plan for success.",
    img: process1,
  },
  {
    id: 2,
    title: "Design & Development",
    description:
      "Transform ideas into reality through visually engaging design and robust development.",
    img: process2,
  },
  {
    id: 3,
    title: "Testing & Optimization",
    description:
      "Ensure flawless performance through rigorous testing and continuous optimization.",
    img: process3,
  },
  {
    id: 4,
    title: "Launch & Support",
    description:
      "Deploy the solution and provide ongoing support to maintain peak performance.",
    img: process4,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: ecomWebIcon,
    img: require("./assets/landingpage-services-imgs/ecommerce.webp"),
    description:
      "We create powerful e-commerce websites that enhance customer engagement, streamline business operations, and drive sustainable revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: socialWebIcon,
    img: require("./assets/landingpage-services-imgs/socialmedia.webp"),
    description:
      "Developing dynamic and engaging social media websites designed to foster community interaction, boost brand awareness, and encourage user loyalty.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: landingWebIcon,
    img: require("./assets/landingpage-services-imgs/landing.webp"),
    description:
      "Crafting high-conversion landing pages that grab attention and drive meaningful action, tailored to showcase your brand and optimize results.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: customWebIcon,
    img: require("./assets/landingpage-services-imgs/customweb.webp"),
    description:
      "Building bespoke websites designed specifically for your business, combining innovative design and seamless functionality for a remarkable online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: iosAppIcon,
    img: require("./assets/landingpage-services-imgs/ios.webp"),
    description:
      "We create exceptional iOS apps using Swift and Objective-C, delivering seamless performance, modern design, and enhanced user engagement.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: androidAppIcon,
    img: require("./assets/landingpage-services-imgs/android.webp"),
    description:
      "Our Android apps, crafted with Java and Kotlin, are tailored to your business vision, offering robust features and outstanding user experiences.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: flutterAppIcon,
    img: require("./assets/landingpage-services-imgs/flutter.webp"),
    description:
      "Leverage Flutter’s single codebase to build responsive apps for iOS and Android, ensuring efficiency without compromising on quality.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: hybridAppIcon,
    img: require("./assets/landingpage-services-imgs/hybrid.webp"),
    description:
      "Our hybrid apps deliver seamless functionality across platforms, combining native performance with versatile design for an enhanced user experience.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img1: require("./assets/services-details/blockchain-1.webp"),
    img2: require("./assets/services-details/blockchain-2.webp"),
    title: "Blockchain Development",
    smallPara:
      "Blockchain technology is revolutionizing industries by enabling secure, transparent, and decentralized solutions. From decentralized applications to smart contracts, our blockchain development services ensure trust and scalability for your operations.\n\nOur expertise lies in crafting custom blockchain solutions tailored to your business needs, ensuring secure integrations and future-ready platforms.",
    keyBenefits: [
      "Custom blockchain solutions (public & private).",
      "Smart contract development.",
      "Crypto wallets & token creation.",
      "NFT marketplace platforms.",
      "Secure blockchain integrations.",
    ],
    detailsPageContent: {
      firstPara: `Blockchain development is at the forefront of creating secure and transparent digital ecosystems. Whether you're building decentralized applications (dApps) or smart contracts, our solutions are designed to deliver trust, scalability, and efficiency.
          \n
          We specialize in developing both public and private blockchain solutions, ensuring your platform is secure, scalable, and aligned with your business objectives. Our team leverages cutting-edge technologies to create robust blockchain ecosystems.`,
      servicesSection: `Our blockchain development services cover the full spectrum, from ideation to deployment. We build custom blockchain solutions, smart contracts, crypto wallets, and NFT marketplaces, ensuring seamless integration with existing systems.
          \n
          Using platforms like Ethereum, Hyperledger, and Binance Smart Chain, we deliver secure and scalable solutions. Our services include blockchain consulting, architecture design, and post-launch support, empowering your business with innovative and future-ready technology.`,
    },
  },
  {
    id: 2,
    img1: require("./assets/services-details/game-1.webp"),
    img2: require("./assets/services-details/game-2.webp"),
    title: "Game Development",
    smallPara:
      "Game development combines creativity and technical expertise to craft immersive and engaging experiences. From mobile to console games, we bring your ideas to life with stunning visuals and seamless gameplay.\n\nOur multidisciplinary approach ensures every game is optimized for performance and player engagement across platforms.",
    keyBenefits: [
      "Mobile, PC & console game development.",
      "AR/VR-enabled experiences.",
      "Unity and Unreal Engine builds.",
      "End-to-end design & deployment.",
      "Performance optimization & monetization.",
    ],
    detailsPageContent: {
      firstPara: `Game development is a dynamic process that blends creativity, technology, and storytelling to create captivating experiences. Whether for entertainment, education, or storytelling, we deliver games that engage and inspire players across platforms.
          \n
          Our game development services cover the entire lifecycle, from concept and design to development and deployment. We focus on creating immersive gameplay mechanics, stunning visuals, and optimized performance.`,
      servicesSection: `We provide end-to-end game development solutions, including concept art, 3D modeling, animation, programming, and audio design. Our team leverages industry-standard tools like Unity and Unreal Engine to build high-quality games for mobile, PC, and consoles.
          \n
          Our services include AR/VR development, performance optimization, and monetization strategies, ensuring your game delivers a seamless and engaging experience. Whether it's a casual mobile game or a complex AAA title, we bring your vision to life.`,
    },
  },
  {
    id: 3,
    img1: require("./assets/services-details/app-1.webp"),
    img2: require("./assets/services-details/app-2.webp"),
    title: "App Development",
    smallPara:
      "Mobile applications are essential for delivering seamless, user-centric experiences. We build smart, scalable, and high-performance apps tailored to your business goals.\n\nOur expertise spans iOS, Android, and cross-platform development, ensuring your app reaches a wide audience with flawless functionality.",
    keyBenefits: [
      "iOS, Android & cross-platform apps.",
      "Business, lifestyle, and on-demand apps.",
      "App prototyping & MVPs.",
      "Backend systems & API integrations.",
      "Full lifecycle support & ASO.",
    ],
    detailsPageContent: {
      firstPara: `Mobile apps are transforming how businesses engage with users, offering seamless access to services and information. Our app development services focus on creating intuitive, high-performance applications that drive user satisfaction and business growth.
          \n
          We specialize in building native and cross-platform apps for iOS and Android, ensuring smooth navigation, robust functionality, and scalability to meet your evolving needs.`,
      servicesSection: `Our app development services cover the entire lifecycle, from concept and prototyping to deployment and maintenance. We use technologies like Swift, Kotlin, React Native, and Flutter to build apps for various industries, including business, lifestyle, and on-demand services.
          \n
          Our services include backend development, API integrations, and app store optimization (ASO), ensuring your app performs flawlessly and reaches your target audience effectively.`,
    },
  },
  {
    id: 4,
    img1: require("./assets/services-details/rpa-1.webp"),
    img2: require("./assets/services-details/rpa-2.webp"),
    title: "Robotic Process Automation",
    smallPara:
      "Robotic Process Automation (RPA) streamlines repetitive tasks, boosting efficiency and reducing operational costs. Our RPA solutions automate business processes, allowing you to focus on innovation.\n\nWe design and deploy custom RPA bots tailored to your workflows, ensuring seamless integration with existing systems.",
    keyBenefits: [
      "Business process automation.",
      "RPA bot development & deployment.",
      "Invoice, billing & HR automation.",
      "Integration with existing tools.",
      "Custom automation workflows.",
    ],
    detailsPageContent: {
      firstPara: `Robotic Process Automation (RPA) empowers businesses to automate repetitive tasks, enhance productivity, and reduce manual errors. Our RPA solutions are designed to streamline operations and deliver efficiency at scale.
          \n
          We create custom RPA bots that integrate seamlessly with your existing tools, automating processes like invoicing, billing, and HR tasks to save time and resources.`,
      servicesSection: `Our RPA services include strategy development, bot design, and deployment, ensuring tailored automation solutions that align with your business goals. We use leading platforms like UiPath, Automation Anywhere, and Blue Prism to build robust and scalable bots.
          \n
          Our services also cover integration with existing systems, workflow optimization, and ongoing support, helping you achieve operational excellence through automation.`,
    },
  },
  {
    id: 5,
    img1: require("./assets/services-details/ai-1.webp"),
    img2: require("./assets/services-details/ai-2.webp"),
    title: "Artificial Intelligence Development",
    smallPara:
      "Artificial Intelligence (AI) is transforming businesses by enabling smarter decision-making and enhanced user experiences. Our AI solutions power automation, personalization, and innovation.\n\nWe build custom AI models and systems tailored to your specific needs, driving efficiency and growth.",
    keyBenefits: [
      "Custom AI models & systems.",
      "AI chatbots & virtual agents.",
      "Computer vision & facial recognition.",
      "Recommendation engines.",
      "AI-driven business automation.",
    ],
    detailsPageContent: {
      firstPara: `Artificial Intelligence (AI) is revolutionizing how businesses operate, offering intelligent solutions that automate processes, enhance customer interactions, and drive innovation. Our AI development services deliver tailored solutions to meet your unique challenges.
          \n
          We specialize in building custom AI models, chatbots, and computer vision systems that empower businesses to make data-driven decisions and improve operational efficiency.`,
      servicesSection: `Our AI development services include designing and deploying custom AI models, AI chatbots, virtual agents, and recommendation engines. We leverage frameworks like TensorFlow, PyTorch, and OpenCV to create scalable and high-performance AI solutions.
          \n
          Our services also cover AI-driven automation, computer vision, and facial recognition, ensuring your business stays ahead in the competitive landscape with intelligent technology.`,
    },
  },
  {
    id: 6,
    img1: require("./assets/services-details/ml-1.webp"),
    img2: require("./assets/services-details/ml-2.webp"),
    title: "Machine Learning Services",
    smallPara:
      "Machine Learning (ML) unlocks the power of data to predict trends, personalize experiences, and optimize operations. Our ML services deliver intelligent systems that learn and adapt.\n\nWe design custom ML algorithms and models to provide actionable insights and drive business success.",
    keyBenefits: [
      "Predictive modeling & analytics.",
      "Machine learning algorithm design.",
      "Real-time data processing.",
      "Pattern recognition & personalization.",
      "Model training & performance tuning.",
    ],
    detailsPageContent: {
      firstPara: `Machine Learning (ML) enables businesses to harness data for predictive analytics, personalization, and operational efficiency. Our ML services deliver intelligent systems that learn from data to provide actionable insights and drive growth.
          \n
          We specialize in designing custom ML algorithms and models that address your specific business needs, from trend prediction to customer behavior analysis.`,
      servicesSection: `Our machine learning services include predictive modeling, real-time data processing, and pattern recognition. We use advanced tools like TensorFlow, Scikit-learn, and Apache Spark to build scalable and accurate ML solutions.
          \n
          Our services also cover model training, performance tuning, and integration with existing systems, ensuring your business leverages the full potential of machine learning for strategic advantage.`,
    },
  },
  {
    id: 7,
    img1: require("./assets/services-details/cloud-1.webp"),
    img2: require("./assets/services-details/cloud-2.webp"),
    title: "Cloud Computing Services",
    smallPara:
      "Cloud computing offers scalable and secure solutions for businesses to manage data and applications. Our cloud services unlock the potential of AWS, Azure, and GCP platforms.\n\nWe provide cloud-native development and infrastructure management to ensure flexibility and efficiency.",
    keyBenefits: [
      "Cloud architecture & consulting.",
      "DevOps & automation pipelines.",
      "Serverless application builds.",
      "Performance optimization.",
      "Security, backup & disaster recovery.",
    ],
    detailsPageContent: {
      firstPara: `Cloud computing is transforming how businesses operate, offering scalable, secure, and cost-effective solutions for data and application management. Our cloud services help you leverage platforms like AWS, Azure, and GCP to drive innovation.
          \n
          We specialize in cloud-native app development, infrastructure management, and DevOps, ensuring your business achieves maximum efficiency and agility in the cloud.`,
      servicesSection: `Our cloud computing services include cloud architecture design, DevOps automation, and serverless application development. We provide end-to-end solutions, from consulting and strategy to implementation and optimization.
          \n
          Our services also cover security, backup, and disaster recovery, ensuring your cloud infrastructure is robust, scalable, and aligned with your business objectives.`,
    },
  },
  {
    id: 8,
    img1: require("./assets/services-details/web-1.webp"),
    img2: require("./assets/services-details/web-2.webp"),
    title: "Web Development",
    smallPara:
      "High-performance websites are critical for business success. We craft responsive, SEO-friendly, and conversion-focused websites that drive growth.\n\nOur full-stack development ensures stunning visuals, seamless functionality, and scalability.",
    keyBenefits: [
      "Responsive, SEO-friendly websites.",
      "Web app development (PWA & SPA).",
      "CMS platforms like WordPress & Webflow.",
      "Full-stack development.",
      "Conversion-focused landing pages.",
    ],
    detailsPageContent: {
      firstPara: `Web development is essential for creating a strong online presence. Our services deliver high-performance, responsive, and SEO-friendly websites that engage users and drive conversions.
          \n
          We specialize in full-stack development, building web apps, PWAs, and SPAs that combine stunning visuals with robust functionality to meet your business goals.`,
      servicesSection: `Our web development services cover everything from responsive website design to complex web app development. We use technologies like React, Angular, Node.js, and CMS platforms like WordPress and Webflow to deliver tailored solutions.
          \n
          Our services include SEO optimization, conversion-focused landing pages, and ongoing maintenance, ensuring your website performs flawlessly and supports your growth objectives.`,
    },
  },
  {
    id: 9,
    img1: require("./assets/services-details/uiux-1.webp"),
    img2: require("./assets/services-details/uiux-2.webp"),
    title: "UI-UX Design",
    smallPara:
      "Great design drives engagement. Our UI/UX services create intuitive, user-centric interfaces that enhance usability and delight users.\n\nWe focus on accessibility, interactivity, and seamless user experiences across devices.",
    keyBenefits: [
      "UX research & strategy.",
      "Wireframes & interactive prototypes.",
      "UI kits & design systems.",
      "Mobile-first design.",
      "Accessibility & usability optimization.",
    ],
    detailsPageContent: {
      firstPara: `UI/UX design is the cornerstone of creating engaging and intuitive digital experiences. Our design services focus on crafting user-centric interfaces that drive engagement and ensure ease of use across devices.
          \n
          We combine UX research, wireframing, and interactive prototyping to deliver designs that are both visually stunning and highly functional, tailored to your users' needs.`,
      servicesSection: `Our UI/UX design services include UX research, strategy, wireframing, and interactive prototyping. We create UI kits, design systems, and mobile-first designs that prioritize accessibility and usability.
          \n
          Using tools like Figma, Sketch, and Adobe XD, we deliver designs that enhance user satisfaction and drive conversions, ensuring your digital products stand out in the market.`,
    },
  },
  {
    id: 10,
    img1: require("./assets/services-details/data-1.webp"),
    img2: require("./assets/services-details/data-2.webp"),
    title: "Data Science Services",
    smallPara:
      "Data science transforms raw data into actionable insights. Our services deliver custom analytics, predictive models, and dashboards to drive informed decisions.\n\nWe leverage big data and machine learning to unlock your data’s potential.",
    keyBenefits: [
      "Data visualization & dashboarding.",
      "Big data processing & analytics.",
      "Business Intelligence (BI) setup.",
      "Data cleaning & transformation.",
      "Forecasting & trend analysis.",
    ],
    detailsPageContent: {
      firstPara: `Data science empowers businesses to make informed decisions by turning raw data into actionable insights. Our data science services deliver custom analytics, predictive models, and dashboards tailored to your goals.
          \n
          We specialize in big data processing, business intelligence, and machine learning, helping you uncover trends, optimize operations, and drive growth.`,
      servicesSection: `Our data science services include data visualization, big data analytics, and business intelligence (BI) setup. We use tools like Tableau, Power BI, and Python to create custom dashboards and predictive models.
          \n
          Our services also cover data  data cleaning, transformation, and forecasting, ensuring you have the insights needed to stay ahead of the competition.`,
    },
  },
  {
    id: 11,
    img1: require("./assets/services-details/nlp-1.webp"),
    img2: require("./assets/services-details/nlp-2.webp"),
    title: "Natural Language Processing",
    smallPara:
      "Natural Language Processing (NLP) bridges the gap between human language and technology. Our NLP solutions enable smarter communication and deeper user understanding.\n\nWe build AI chatbots, sentiment analysis tools, and voice-enabled applications to enhance user experiences.",
    keyBenefits: [
      "AI chatbots & virtual assistants.",
      "Sentiment & intent analysis.",
      "Text classification & summarization.",
      "Voice-enabled applications.",
      "Natural language understanding (NLU).",
    ],
    detailsPageContent: {
      firstPara: `Natural Language Processing (NLP) enables intelligent communication between humans and technology. Our NLP solutions power AI chatbots, sentiment analysis, and voice-enabled applications to enhance user experiences.
          \n
          We specialize in building advanced language-processing tools that deliver deeper insights and smarter interactions, tailored to your business needs.`,
      servicesSection: `Our NLP services include developing AI chatbots, virtual assistants, and text analysis tools. We leverage frameworks like spaCy, NLTK, and BERT to create solutions for sentiment analysis, text classification, and natural language understanding (NLU).
          \n
          Our services also cover voice-enabled applications and intent analysis, ensuring your business communicates effectively and engages users with intelligent, language-driven technology.`,
    },
  },
  {
    id: 12,
    img1: require("./assets/services-details/cloud-migration-1.webp"),
    img2: require("./assets/services-details/cloud-migration-2.webp"),
    title: "Cloud Migration Services",
    smallPara:
      "Cloud migration modernizes your infrastructure with minimal disruption. Our services ensure secure, seamless transitions to the cloud for maximum ROI.\n\nWe assess, plan, and execute migrations tailored to your business needs.",
    keyBenefits: [
      "Legacy system assessments.",
      "Application & data migration.",
      "Hybrid cloud strategies.",
      "Post-migration optimization.",
      "Risk mitigation & support.",
    ],
    detailsPageContent: {
      firstPara: `Cloud migration is key to modernizing your infrastructure, offering scalability and efficiency with minimal downtime. Our cloud migration services ensure a secure and seamless transition to the cloud, maximizing ROI.
          \n
          We provide end-to-end migration solutions, from assessing legacy systems to executing hybrid cloud strategies, tailored to your business objectives.`,
      servicesSection: `Our cloud migration services include legacy system assessments, application and data migration, and hybrid cloud strategy development. We ensure minimal disruption and maximum efficiency using platforms like AWS, Azure, and GCP.
          \n
          Our services also cover post-migration optimization, risk mitigation, and ongoing support, ensuring your cloud infrastructure is secure, scalable, and aligned with your goals.`,
    },
  },
];

// trusted clients
export const clients = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    img: "",
    name: "Liam K.",
    title: "Co-Founder at BlockMint Labs",
    description:
      "The team delivered a custom blockchain solution that was not only secure but incredibly efficient. Our NFT platform launched on time and ran smoothly from day one.",
  },
  {
    id: 2,
    img: "",
    name: "Priya R.",
    title: "Product Manager at PixelRealm Games",
    description:
      "From storyboarding to final release, these folks brought our vision to life. The Unity build was flawless, and players love the experience.",
  },
  {
    id: 3,
    img: "",
    name: "Daniel M.",
    title: "CEO at FitLyfe",
    description:
      "We needed a modern, scalable mobile app—and that’s exactly what we got. Beautiful design, great performance, and solid post-launch support.",
  },
  {
    id: 4,
    img: "",
    name: "Nina T.",
    title: "Operations Head at FinGuard",
    description:
      "Your RPA tools helped us cut manual work in half. Now, our team can focus on what really matters instead of repetitive admin tasks.",
  },
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("./assets/industries/Healthcare.webp"),
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "Retail",
    img: require("./assets/industries/E-commerce & Retail.webp"),
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Fintech",
    img: require("./assets/industries/Fintech.webp"),
    desc: "Streamlining financial services with AI-driven fraud detection, automated customer support, and predictive analytics.",
  },
  {
    id: 4,
    title: "Insurance",
    img: require("./assets/industries/Insurance.webp"),
    desc: "Improving risk assessment, claims processing, and customer engagement through advanced analytics and AI solutions.",
  },
  {
    id: 5,
    title: "Hospitality",
    img: require("./assets/industries/Hospitality.webp"),
    desc: "Enhancing guest experiences with smart booking systems, personalized services, and efficient resource management.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("./assets/industries/Manufacturing.webp"),
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "On Demand",
    img: require("./assets/industries/On Demand.webp"),
    desc: "Empowering on-demand platforms with intelligent matchmaking, real-time tracking, and user-centric analytics.",
  },
  {
    id: 8,
    title: "Food & Restaurant",
    img: require("./assets/industries/Food & Restaurant.webp"),
    desc: "Optimizing food services with smart inventory, personalized menus, and efficient order management solutions.",
  },
  {
    id: 9,
    title: "Logistics",
    img: require("./assets/industries/Logistics & Supply Chain.webp"),
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: require("./assets/industries/Education.webp"),
    desc: "Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 11,
    title: "Game",
    img: require("./assets/industries/Game.webp"),
    desc: "Elevating game development with AI-enhanced graphics, player behavior analytics, and immersive experiences.",
  },
];

