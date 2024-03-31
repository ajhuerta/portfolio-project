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
      "Introduced over 15 new attributes to a snowflake schema and backfilled historical data using Python and Apache Airflow.",
      "Constructed a reverse ETL job with Python that would load daily refreshed data from Snowflake into DynamoDB tables.",
      "Created a new GraphQL endpoints which served collections data for customer accounts which are delinquent and an endpoint that returned all account information for every delinquent account using the SoFi credit card.",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "MentorMatch V2",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: mentormatchv2,
    source_code_link: "https://github.com/",
  },
  {
    name: "InvestBuddy",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: investbuddy,
    source_code_link: "https://github.com/",
  },
];

export { technologies, experiences, projects };
