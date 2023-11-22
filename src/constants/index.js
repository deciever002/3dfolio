import {
  mobile,
  backend,
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
  dotnetCore,
  csharp,
  capgemini,
  whitehorse,
  socialwave,
  xseed,
  pumalandingpage,
  careercamp,
  santachatter,
  todolist
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: ".NET Core Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
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
    name: "C Sharp",
    icon: csharp,
  },
  {
    name: ".NET Core",
    icon: dotnetCore,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "git",
    icon: git,
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
    name: "C#",
    icon: typescript,
  },
];

const experiences = [
  {
    title: ".NET Core & MERN Developer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#383E56",
    date: "July 2021 - September 2023",
    points: [
      "Worked in a micro service architecture, using .NET Core, to create multiple services.",
      "Created APIs using MVC framework for multiple validations across the POS(Point of Sales) machine.Worked on unit test cases using XUnit and NUnit testing tools for code coverage.",
      "Worked as a MERN full stack developer to  to create visually appealing and responsive user interfaces for self-service kiosks.",
      "Develop RESTful APIs and server-side logic using Node.js and Express.js for handling data from database",
      "Created Tests using Xunit in .Net core and Jest in React for code coverage and quality assurance",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "WhiteHorse Business Solutions",
    icon: whitehorse,
    iconBg: "#E6DEDD",
    date: "Apr 2020 - Aug 2020",
    points: [
      "Created various applications to cater to customer needs. Developed the majority of applications using React Native. Additionally, I developed an entire application for Kadholi Grampanchayat, which has received awards.",
      "Was selected as an Android Lead, where I led a team of 8 members.",
      "Participated in a hackathon to develop Covid Tracker App in one day and secured 2nd rank.",
    ],
  }
];

const projects = [
  {
    name: "Social Wave",
    description:
      "Social Waves is a full-stack social media application that enables users to share photos, like, comment on posts, search for content, and connect with others.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "material ui redux",
        color: "pink-text-gradient",
      },
      {
        name: "express js",
        color: "blue-text-gradient",
      },
    ],
    image: socialwave,
    source_code_link: "https://github.com/deciever002/social-wave-frontend",
  },
  {
    name: "Xseed Edtech App",
    description:
      "Ed Tech Platform, a full stack application designed to provide educational resources and features for both students and educators.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "express nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "passport session cookie",
        color: "green-text-gradient",
      },
    ],
    image: xseed,
    source_code_link: "https://github.com/deciever002/xseed-frontend",
  },
  {
    name: "Puma Landing Page",
    description:
      "This project utilizes React for frontend development and Tailwind CSS for styling.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: pumalandingpage,
    source_code_link: "https://github.com/deciever002/puma_landing_page",
  },
  {
    name: "Career Camp",
    description:
      " Career Camp, a web application built on Node.js that is designed to convert incoming student data into CSV format and allow users to download it.",
    tags: [
      {
        name: "MVC Express Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "EJS MongoDb",
        color: "pink-text-gradient",
      },
      {
        name: "passport session cookie",
        color: "green-text-gradient",
      },
    ],
    image: careercamp,
    source_code_link: "https://github.com/deciever002/CareerCamp",
  },
  {
    name: "Santa Chatter",
    description:
      "The application's main focus is to facilitate real-time messaging, photo sharing, and emoji usage among users, all within a delightful Christmas-themed environment.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "green-text-gradient",
      },
    ],
    image: santachatter,
    source_code_link: "https://github.com/deciever002/SantaChatter",
  },
  {
    name: "Todoist",
    description:
      "In this app,users can perform actions like adding, updating, deleting, and viewing todos.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "green-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/deciever002/TodoList",
  },
];

export { services, technologies, experiences, projects };
