import { Content, Project, Qualification } from "@/types";
import Work1 from "../../public/images/work1.jpg";
import Work2 from "../../public/images/work2.jpg";
import Work3 from "../../public/images/work3.jpg";
import Work4 from "../../public/images/work4.jpg";

export const aboutInfo: Content[] = [
  {
    title: "Experience",
    subtitle: "2.5+ Years Working",
    icon: "experience",
  },
  {
    title: "Completed",
    subtitle: "Multiple Projects",
    icon: "service",
  },
  {
    title: "Support",
    subtitle: "Online 24/7",
    icon: "support",
  },
];

export const skillInfo: Content[] = [
  {
    title: "HTML5",
    icon: "html",
  },
  {
    title: "CSS3",
    icon: "css",
  },
  {
    title: "JavaScript",
    icon: "javascript",
  },
  {
    title: "TypeScript",
    icon: "typescript",
  },
  {
    title: "React",
    icon: "react",
  },
  {
    title: "Next.js",
    icon: "nextjs",
  },
  {
    title: "Redux",
    icon: "redux",
  },
  {
    title: "Tailwind CSS",
    icon: "tailwind",
  },
  {
    title: "CSS Modules",
    icon: "cssmodule",
  },
  {
    title: "Material UI",
    icon: "mui",
  },
  {
    title: "shadcn/ui",
    icon: "shadcn",
  },
  {
    title: "Node.js",
    icon: "node",
  },
];

export const educationInfo: Qualification[] = [
  {
    title: "Information and Communication Technology",
    subtitle: "Prince of Songkla University - Thailand",
    date: "2016 - 2020",
  },
  {
    title: "SMA Negeri 3",
    subtitle: "Pekalongan - Jawa Tengah",
    date: "2013 - 2016",
  },
  {
    title: "SMP Salafiyah",
    subtitle: "Pekalongan - Jawa Tengah",
    date: "2010 - 2013",
  },
  {
    title: "MSI 01 Kauman",
    subtitle: "Pekalongan - Jawa Tengah",
    date: "2004 - 2010",
  },
];

export const workInfo: Qualification[] = [
  {
    title: "Front End Developer",
    subtitle: "Freelance",
    date: "Nov 2023 - Present",
  },
  {
    title: "Front End Developer",
    subtitle: "Arvis - Jakarta",
    date: "Feb 2023 - Oct 2023",
  },
  {
    title: "Front End Developer",
    subtitle: "DoCheck - Bandung",
    date: "Aug 2022 - Jan 2023",
  },
  {
    title: "Front End Developer",
    subtitle: "Teravin - Yogyakarta",
    date: "Jul 2021 - May 2022",
  },
  {
    title: "Front End Developer",
    subtitle: "Carakan - Yogyakarta",
    date: "Feb 2021 - Jun 2021",
  },
];

export const projectInfo: Project[] = [
  {
    image: Work1,
    title: "Chuluq",
    siteUrl: "/",
  },
  {
    image: Work2,
    title: "Portfolio v1",
    siteUrl: "https://lookq.netlify.app",
  },
  {
    image: Work3,
    title: "Portfolio v2",
    siteUrl: "https://lookq.vercel.app/",
  },
  {
    image: Work4,
    title: "Calculator",
    siteUrl: "https://calculator-chuluq.netlify.app",
  },
  {
    image: Work1,
    title: "Creative Agency Landing Page",
    siteUrl: "https://creative-agency-landing-page-peach.vercel.app/",
  },
];
