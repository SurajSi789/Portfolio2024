import capgemini from "../assets/images/capgemini.png";
import nsu from "../assets/images/nsu.png";
import {
    selenium,
    contact,
    css,
    express,
    git,
    github,
    html,
    disney,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    tailwindcss,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: selenium,
        name: "Selenium",
        type: "Automation Testing",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Analyst/Software Engineer",
        company_name: "Capgemini",
        icon: capgemini,
        iconBg: "#accbe1",
        date: "December 2022 - Present",
        points: [
            "Identifying Automation Scenarios from the set of Test cases/User stories in JIRA tool.",
            "Developing test scripts in Java using Selenium, TestNG library, Page Object Model with Data-DrivenFramework by taking minimal guidance from lead or seniors.",
            "Execution of automation test scripts and generation of reports in HTML format using ExtentReports.",
            "Identifying the defects and proper logging, tracking, retesting and closure of defects in JIRA.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/suraj-singh-933427174/',
    }
];

export const projects = [
    {
        iconUrl: express,
        theme: 'btn-back-red',
        name: 'Sample Company Website',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://example-project-66c50.web.app/',
    },
    {
        iconUrl: disney,
        theme: 'btn-back-green',
        name: 'Full Stack Disney+ Clone',
        description: 'Created a full-stack replica of the OTT Platform "Disney+ Hotstar" enabling users to watch and view videos.',
        link: 'https://github.com/surajsingh29/disneyPlusClone',
    },
    {
        iconUrl: nsu,
        theme: 'btn-back-blue',
        name: 'NSUIT Society',
        description: 'Designed and built a Web Based Application on HTML, CSS, Javascript, Ajax, MySQL and PHP.',
        link: 'https://github.com/surajsingh29/NSUITsociety-index.php',
    },
    {
        iconUrl: contact,
        theme: 'btn-back-pink',
        name: 'Portfolio',
        description: 'Self Portfolio made using React.js',
        link: 'https://surajportfolio-e014d.web.app/',
    }
];