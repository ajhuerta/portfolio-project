import {
  javascript,
  typescript,
  html,
  css,
  mongodb,
  git,
  docker,
  python,
  java,
  aws,
  sofi,
  usbank,
  amazon,
  argonne,
  mentormatchv1,
  investbuddy,
  mentormatchv2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
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
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
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
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws
  }
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "SoFi",
    icon: sofi,
    iconBg: "#383E56",
    date: "Summer 2023",
    points: [
      "Deprecated a legacy workflow by surfacing Fiserv data into Snowflake and updating existing services to consume the data.",
      "Created an automated reverse ETL job to transform data from Snowflake, then loaded it to DynamoDB using Python and Apache Airflow.",
      "Expanded GraphQL API to return 8 new attributes for delinquent accounts and created a new endpoint to show recent delinquencies.",
    ],
  },
  {
    title: "Software Engineer Co-op",
    company_name: "U.S Bank",
    icon: usbank,
    iconBg: "#383E56",
    date: "Fall 2022 - Spring 2023",
    points: [
      "Deployed a dashboard web app using ReactJS and MongoDB which was used by over 10 developers across teams to view live analytics on pilot programs / products.",
      "Integrated U.S Bank react components into the application and achieved WCAG 2.1 accessibility compliance.",
      "Prototyped with the OpenAI ChatGPT API using Python, exploring potential use cases for the bank and discovered a 10% reduction in clicks on the mobile app when aided by a trained chat bot.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#383E56",
    date: "Summer 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },

  {
    title: "Software Engineer Intern",
    company_name: "Argonne National Lab",
    icon: argonne,
    iconBg: "#383E56",
    date: "Summer 2020 - Winter 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const projects = [
  {
    name: "MentorMatch V1",
    description:
      "A mobile app used by community college students to connect them with students at universities they will soon transfer to.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: mentormatchv1,
    live_code_link: "https://mentormatch-7214d.firebaseapp.com/#/",
    source_code_link: "https://github.com/kendrit/mentor-match",
  },
  {
    name: "MentorMatch V2",
    description:
      "A Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redis",
        color: "red-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      }
    ],
    image: mentormatchv2,
    live_code_link: "https://www.mentormatch.space/",
    source_code_link: "https://github.com/ajhuerta/mentor_match",
  },
  {
    name: "InvestBuddy",
    description:
      "A frontend project focused on providing financial material based on sentiment analysis and NLP on a user's search query.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: investbuddy,
    live_code_link: "https://github.com/ajhuerta/CourseProject",
    source_code_link: "https://github.com/ajhuerta/CourseProject",
  },
];

export { technologies, experiences, projects };
