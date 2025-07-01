import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  peacock,
  stormtec,
  fart,
  dopamine,
  vision,
  docbook,
  gizmo,
  ultraqr,
  wooOrder,
  omniVillage,
  nyk,
  aimealplanner,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: 'App Developer (IOS, Android)',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Web Developer',
    icon: creator,
  },
  {
    title: 'UI/UX',
    icon: figma,
  },
  {
    title: 'Full Stack Developer',
    icon: creator,
  },
  {
    title: 'DevOps (Azure, AWS, GCP)',
    icon: web,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: 'React Native Developer',
    companyName: 'Now You Know',
    icon: nyk,
    iconBg: '#fff',
    date: 'December 2024 - Present',
    points: [
      'Developing and maintaining android applications using React Native and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    companyName: 'Peacock India',
    icon: peacock,
    iconBg: '#fff',
    date: 'April 2023 - December 2024',
    points: [
      'Developing and maintaining android applications using React Native and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    companyName: 'Fart Magazines',
    icon: fart,
    iconBg: '#E6DEDD',
    date: 'June 2022 - Sept 2022',
    points: [
      'Developing and maintaining android applications using React Native and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    companyName: 'Stormtec Global',
    icon: stormtec,
    iconBg: '#fff',
    date: 'Jan 2022 - March 2023',
    points: [
      'Developing and maintaining android applications using React Native and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a app as beautiful as our product, but Andalib proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a android developer who truly cares about their clients' success like Andalib does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Andalib optimized our app, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'AI Meal Planner',
    description:
      "The Healthy Me app is designed to help users achieve their health and fitness goals with ease through personalized nutrition and meal tracking.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'open-ai',
        color: 'pink-text-gradient',
      },
    ],
    image: aimealplanner,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Dopamine',
    description:"Dopamine is a healthcare app for doctors to manage patient data and medical history efficiently. It offers features like patient record management, appointment scheduling, detailed medical history tracking.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: dopamine,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Vizfleet',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: vision,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Docbook',
    description:"Manage patients, documents, payments & reminders securely in one app. Simplify your practice, focus on what matters most.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: docbook,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Gizmo',
    description:
      'A comprehensive app where users will get to know about the new gadgets and accessories that are available in the market.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'rest-api',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    image: gizmo,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Ultra QR',
    description:"Meet UltraQR – your easy-to-use ticket scanner app! When you use our app to scan a valid ticket, it happily shouts 'Allow In.' But, if the ticket isn't valid, it firmly declares 'Don't Allow.'",
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: ultraqr,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Woo Order',
    description:
      'A comprehensive food restaurant booking platform that allows users to book tables, order food, and track their orders in real-time.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: wooOrder,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Omni Village',
    description:
      'A comprehensive agricultural app that allows users to add there crops and track their progress.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'rest-api',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    image: omniVillage,
    sourceCodeLink: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
