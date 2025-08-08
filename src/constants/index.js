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
    title: "Software Engineer Co-op",
    company_name: "U.S Bank",
    icon: usbank,
    iconBg: "#383E56",
    date: "Fall 2022 - Spring 2023",
    points: [
      "Deployed a dashboard using ReactJS and NodeJS, which displayed metrics on pilot products such as abandonment, time spent on page, etc.",
      "Developed a freature to generate PDF reports using data collected on pilot programs which was utilized across adjacent teams.",
      "Prototyped an AI chatbot with the OpenAI API and Python to test for potential search time reductions.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#383E56",
    date: "Summer 2022",
    points: [
      "Constructed a serverless feature for the Kindle app, where customers could rate recently read books using emojis.",
      "Connected and deployed AWS cloud resources such as Lambda, DynamoDB, and API Gateway using the AWS CDK.",
      "Interfaced a ReactJS web view on Kindle app and launched A/B testing in the US marketplace.",
    ],
  },

  {
    title: "Software Engineer Intern",
    company_name: "Argonne National Lab",
    icon: argonne,
    iconBg: "#383E56",
    date: "Summer 2020 - Winter 2020",
    points: [
      "Developed Python web-scrapers using Selenium and Beautiful Soup to collect over a million vehicle data points.",
      "Datamined and visualized trends such as a vehicle's repair cost based on make, model, and year using Matplotlib.",
      "Migrated scrapped vehicle data stored in a csv format to Postgres tables.",
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
    source_code_link: "https://github.com/ajhuerta/CourseProject",
  },
];

export { technologies, experiences, projects };
