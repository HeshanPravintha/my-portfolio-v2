import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiFirebase,
  SiJavascript,
  SiSpringboot,
  SiPostman,
  SiFlutter,
  SiRedux,
  SiFigma,
  SiPhp,
} from "react-icons/si";

export const personalInfo = {
  name: "Heshan Pravintha",
  title: "Senior Software Engineer | Mobile Developer",
  email: "heshpravintha@gmail.com",
  phone: "+971505810266",
  location: "Kalubowila, Sri Lanka",
  linkedin: "https://linkedin.com/in/hesh-pravintha1",
  github: "https://github.com/heshanpravintha",
  resumeLink: "/HeshanPravinthaResume.pdf",
  bio: "Results-driven Senior Software Engineer with 3+ years of hands-on experience building and leading high-performance mobile applications for millions of users across Flutter and React Native platforms. Proven track record delivering production-level solutions for leading telecommunications and insurance providers, with expertise in clean architecture, CI/CD automation, and cross-platform development. A passionate Flutter community contributor with a published pub.dev package.",
  shortBio: "I build impactful mobile experiences.",
};

export const education = [
  {
    institution: "NSBM Green University (Affiliated with University of Plymouth, UK)",
    degree: "Bachelor of Science (Hons) in Software Engineering",
    duration: "2017 – 2020",
    score: "Second Class Honours (Upper Division)",
  },
];

export const projects = [
  {
    title: "Airtel Selfcare App",
    tech: ["Flutter", "Riverpod", "Clean Architecture", "AppsFlyer", "Firebase", "Fastlane"],
    description: [
      <>
        Flagship mobile app for Sri Lanka's leading telecom serving{" "}
        <span className="text-accent-1 font-semibold">700,000+ monthly active users</span>{" "}
        across Google Play, App Store & Huawei AppGallery.
      </>,
      <>
        Acting as{" "}
        <span className="text-text-primary font-medium">Frontend Lead</span>,
        overseeing Flutter domain-driven clean architecture with Riverpod.
      </>,
      <>
        Achieved{" "}
        <span className="text-accent-1 font-semibold">30% faster startup times</span> and{" "}
        <span className="text-accent-1 font-semibold">98% crash-free session rate</span>{" "}
        through critical performance optimizations.
      </>,
      <>
        Set up CI/CD pipelines with SonarQube & Fastlane, and implemented{" "}
        <span className="text-text-primary font-medium">AppsFlyer deep linking</span>.
      </>,
    ],
    date: "May 2023 – Present",
    githubLink: null,
    liveLink: null,
    category: "Mobile Development",
    icon: <SiFlutter size={24} className="text-accent-1" />,
    image: null,
  },
  {
    title: "Hutch Selfcare App",
    tech: ["React Native", "Redux", "Redux-Saga", "Firebase", "JavaScript"],
    description: [
      <>
        Customer-facing app for{" "}
        <span className="text-text-primary font-medium">Hutchison Telecommunications Lanka</span>{" "}
        with <span className="text-accent-1 font-semibold">1M+ monthly active users</span> combined.
      </>,
      <>
        Implemented advanced state management with{" "}
        <span className="text-text-primary font-medium">Redux and Redux-Saga</span>{" "}
        for efficient side effects handling.
      </>,
      <>
        Integrated Firebase Analytics, Crashlytics, and Performance Monitoring
        for comprehensive application insights.
      </>,
    ],
    date: "May 2023 – Present",
    githubLink: null,
    liveLink: null,
    category: "Mobile Development",
    icon: <FaReact size={24} className="text-accent-1" />,
    image: null,
  },
  {
    title: "AIA Insurance App",
    tech: ["Flutter", "Riverpod", "Clean Architecture", "Mocktail", "Patrol", "Firebase"],
    description: [
      <>
        Customer-facing insurance app for{" "}
        <span className="text-text-primary font-medium">AIA Insurance Lanka Limited</span>,
        built with Flutter domain-driven clean architecture.
      </>,
      <>
        Designing and executing{" "}
        <span className="text-text-primary font-medium">unit tests (Mocktail)</span> and{" "}
        <span className="text-text-primary font-medium">integration tests (Patrol)</span>{" "}
        to ensure robust application quality.
      </>,
      <>
        Leading scalable Riverpod-based architecture ensuring{" "}
        <span className="text-text-primary font-medium">maintainable, testable code</span>{" "}
        across the entire codebase.
      </>,
    ],
    date: "May 2023 – Present",
    githubLink: null,
    liveLink: null,
    category: "Mobile Development",
    icon: <SiFlutter size={24} className="text-accent-1" />,
    image: null,
  },
];

export const skills = {
  languages: [
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React Native", icon: <FaReact /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Java", icon: <FaJava /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ],
  frameworksAndLibraries: [
    { name: "Redux", icon: <SiRedux /> },
    { name: "Redux-Saga", icon: <SiRedux /> },
    { name: "Riverpod", icon: <FaCode /> },
    { name: "Provider", icon: <FaCode /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Node.js", icon: <FaNodeJs /> },
  ],
  toolsAndPlatforms: [
    { name: "Git", icon: <FaGithub /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Firebase Analytics", icon: <SiFirebase /> },
    { name: "Crashlytics", icon: <SiFirebase /> },
    { name: "AppsFlyer", icon: <FaMobileAlt /> },
    { name: "Fastlane", icon: <FaCode /> },
    { name: "SonarQube", icon: <FaCode /> },
    { name: "JIRA", icon: <FaCode /> },
  ],
  coreCompetencies: [
    "Team Leadership",
    "Clean Architecture",
    "CI/CD Pipelines",
    "Agile (Scrum)",
    "Test-Driven Development",
    "Cross-platform Development",
    "RESTful APIs",
    "Mobile Performance Optimization",
  ],
};

export const experience = [
  {
    role: "Senior Software Engineer",
    organization: "Omobio (Pvt) Ltd, Colombo 04",
    duration: "Jan 2026 – Present",
    points: [
      "Acting as Frontend Lead for the Airtel Selfcare Flutter project, overseeing architecture and development.",
      "Leading implementation of Flutter domain-driven clean architecture with Riverpod for scalable, maintainable code.",
      "Implemented AppsFlyer deep linking to replace Firebase Dynamic Links, ensuring seamless attribution across platforms.",
      "Designing and executing unit tests (Mocktail) and integration tests (Patrol) to ensure robust application quality.",
      "Set up CI/CD pipelines integrating SonarQube for code quality analysis and Fastlane for release automation.",
      "Engineered 30% faster startup times with 98% crash-free session rates; zero critical bugs across multiple releases.",
      "Contributed to a 4.2-star rating across 90,000+ reviews with 5M+ app downloads.",
    ],
  },
  {
    role: "Software Engineer (Trainee → Associate → SE)",
    organization: "Omobio (Pvt) Ltd, Colombo 04",
    duration: "May 2023 – Dec 2025",
    points: [
      "Progressed from Trainee through Associate to Software Engineer across 5 production-level mobile apps.",
      "Delivered features for Dialog BizCareLite, Dialog Retail Hub (React Native), Robicash (Flutter), Hutch Selfcare (React Native), and AIA Insurance App (Flutter).",
      "Supported 1M+ monthly active users combined across telecom and insurance clients in Sri Lanka and Bangladesh.",
      "Utilized Redux-Saga architectural pattern for advanced state management and efficient side effects handling.",
      "Deployed applications to Google Play Store, Apple App Store, and Huawei AppGallery.",
      "Implemented Firebase Analytics, Crashlytics, and Performance Monitoring for comprehensive app insights.",
      "Handled testing, debugging, version upgrades, and Android SDK updates to ensure platform compatibility.",
    ],
  },
  {
    role: "Freelance UI Designer",
    organization: "Fiverr",
    duration: "2020 – 2023",
    points: [
      "Designed modern, user-centric mobile and web app interfaces for international clients.",
      "Created end-to-end user flows: authentication, onboarding, content browsing, and ordering experiences.",
      "Built responsive, conversion-friendly layouts optimized for multiple screen sizes and platforms.",
      "Applied modern UI principles and design systems to improve user engagement and accessibility.",
    ],
  },
];

export const flutterPackages = [
  {
    name: "keyboard_actions_bar",
    pubLink: "https://pub.dev/packages/keyboard_actions_bar",
    date: "Jun 2026",
    description:
      "A fully customizable Flutter keyboard toolbar package published under a verified publisher. Zero FocusNode boilerplate — just drop it in and go.",
    features: [
      "6 built-in actions: Done / Next / Prev / Clear / InsertAt / Custom",
      "Material 3 theming with smooth slide animation",
      "Tap-outside dismiss & custom keyboard panels",
      "Full API documentation with example app",
    ],
    platforms: ["Android", "iOS", "Web", "macOS", "Linux", "Windows"],
    license: "MIT",
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: {
    url: `mailto:${personalInfo.email}`,
    icon: <FaEnvelope size={24} />,
  },
};
