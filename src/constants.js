// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import sklearn from './assets/tech_logo/sklearn.png';
import spacy from './assets/tech_logo/spacy.png';
import pt from './assets/tech_logo/pt.png';
import tensorflow from './assets/tech_logo/tensorflow.png';
import hf from './assets/tech_logo/hf.svg';
import nltk from './assets/tech_logo/nltk.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import docker from './assets/tech_logo/docker.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercel_log from './assets/tech_logo/vercel_log.webp';

// Education Section Logo's
import clg_logo from './assets/education_logo/clg_logo.jpg';
import schl_logo from './assets/education_logo/schl_logo.png';

export const SkillsInfo = [
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: "AI/ML/NLP",
    skills: [
      { name: "scikit-learn", logo: sklearn },
      { name: "TensorFlow", logo: tensorflow },
      { name: "PyTorch", logo: pt },
      { name: "HuggingFace", logo: hf},
      { name: "spaCy", logo: spacy },
      { name: "NLTK", logo: nltk },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercel_log },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: "Docker", logo: docker },
    ],
  },
];

import fairsumLogo from './assets/work_logo/fairtext_logo.png';
import learnifyLogo from './assets/work_logo/learnify_logo.jpg';
import mockverseLogo from './assets/work_logo/mockverse_logo.jpg';
import notecraft from './assets/work_logo/notecraft.png';

export const projects = [
  {
    id: 0,
    img: fairsumLogo,
    role: "FairText - Bias-Aware Summarizer",
    date: "April 2025",
    desc: "Developed an NLP-based summarization system for analyzing over 2,000 tweets from #MeToo and Legalization of Abortion datasets. Combined LexRank, LSA, BERTTopic, and VADER for sentiment and topic-aware summarization, generating gender-specific summaries and visualizing trends through comparative charts.",
    skills: ["LexRank", "LSA", "BERT Topic", "VADER", "Matplotlib", "Python"],
    github: "https://github.com/samruddhikurhe/Gender-Bias-.git",
  },
  {
    id: 1,
    img: learnifyLogo,
    role: "Learnify - Full-Stack LMS",
    date: "February 2025",
    desc: "Built a scalable learning management system with secure JWT auth, microservices REST APIs, Cloudinary asset management, and Stripe integration. Improved performance and reliability using Redux Toolkit, RTK Query, and automated testing.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Redux", "Cloudinary", "Stripe"],
    github: "https://github.com/JessicaK-011/LMSportal.git",
  },
  {
  id: 2,
  img: notecraft,
  role: "NoteCraft - AI Note Assistant",
  date: "January 2025",
  desc: "NoteCraft is an AI-powered PDF reader and assistant that lets users upload documents, highlight text, and ask contextual questions. It uses OpenAI's GPT model to enable seamless academic workflows.",
  skills: [
    "Next.js",
    "LangChain",
    "GPT-4",
    "Pinecone",
    "Tailwind CSS"
  ],
  github: "https://github.com/JessicaK-011/NoteCraft1.git",
},
  {
    id: 3,
    img: mockverseLogo,
    role: "Mockverse - AI Interview Mocker",
    date: "December 2024",
    desc: "Designed an AI-powered mock interview platform with real-time speech transcription using Gemini AI, role-based Clerk authentication, and deployment on Vercel. Features 200+ mock questions across behavioral and technical domains with 98% simulation accuracy.",
    skills: ["Next.js", "React", "Gemini AI", "Clerk", "Vercel", "Drizzle ORM"],
    github: "https://github.com/JessicaK-011/Mockverse1.git",
  },
  
];


  
  export const education = [
    {
      id: 0,
      img: clg_logo,
      school: "Atal Bihari Vajpayee Indian Institute of Information Technology and Management",
      date: "Nov 2022 - May 2027",
      grade: "7.50 CGPA",
      desc: "I am currently in my fourth year of pursuing a Bachelor's degree in Information Technology at the Indian Institute of Information Technology (IIIT), Gwalior. My academic journey has equipped me with a strong foundation in data structures, algorithms, software engineering, and artificial intelligence. I have actively participated in technical projects, hackathons, and research-based coursework, which have shaped my problem-solving and development skills.",
      degree: "Integrated Bachelors & Masters in Information Technology",
    },
    {
      id: 1,
      img: schl_logo,
      school: "MLSBVM, Nainital",
      date: "Apr 2014 - May 2021",
      grade: "96.6%",
      desc: "I completed my class 12 education from MLSBVM , Nainital , under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM",
    },
  ];
  
export const codingProfiles = [
  {
    id: 0,
    title: "LeetCode",
    link: "https://leetcode.com/u/jess_11K/",
    username: "jess_11K",
    rating : "1895",
    badge : "Knight",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
  },
  {
    id: 1,
    title: "CodeChef",
    link: "https://www.codechef.com/users/jessica_054",
    username: "jessica_054",
    rating : "1623",
    badge : "3 ⭐️",
    logo: "https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/cc-logo.png",
  },
  {
    id: 2,
    title: "Codeforces",
    link: "https://codeforces.com/profile/jess_1124",
    username: "jess_1124",
    rating : "1274",
    badge : "Pupil",
    logo: "https://sta.codeforces.com/s/91547/images/codeforces-logo-with-telegram.png",
  },
];

