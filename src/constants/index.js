import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I’m an aspiring software developer with a passion for building scalable, high-performance applications. With expertise in React, Node.js, MySQL, and PostgreSQL, I focus on delivering user-centric solutions that drive business growth. I thrive on solving complex challenges and stay ahead of the curve in an evolving tech landscape. A collaborative team player, I work with others to create impactful solutions that solve real-world problems. Let’s transform your ideas into exceptional results!`;

export const ABOUT_TEXT = `I am passionate about building efficient, user-friendly web applications. With experience in various tech frameworks and languages, my curiosity fuels my desire to understand how things work and continuously grow in my career. I thrive in collaborative environments, embrace new challenges, and focus on solving complex problems while delivering high-quality solutions. Outside of coding, I enjoy staying active, exploring emerging technologies, and contributing to open-source projects. Fun fact: I love reading books and sketching in my spare time!`;

export const EXPERIENCES = [
  {
    year: "April 2024 - June 2024",
    role: "Software Development Intern",
    company: "U R Rao Satellite Centre(ISRO)",
    description: `Developed a secure role-based login system and state-chart visualization with GoJS, improving efficiency.Built a code script editor with autocomplete and database integration, increasing command generation speed by 25%.Created an online form for managing PROM fusing and patch certificates, with Excel upload for data handling.Built a scalable platform using HTML, JavaScript, PHP, and AJAX, boosting performance by 50%.`,
    technologies: ["HTML", "PHP", "AJAX","MySQL"],
  },
  {
    year: "October 2022 - November 2022",
    role: "Web Development Intern",
    company: "DreamVerse Learning Lab",
    description: `Enhanced interactive features by integrating custom HTML, CSS, and JavaScript code.Developed an interactive audio interface, allowing users to explore parts of the low-tech IVR platform, Hunarbaaz, directly on the website.`,
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Smart Door Bell",
    image: project1,
    description:
      "A cutting-edge home security solution integrating Raspberry Pi with dual-factor biometric authentication, combining CNN-based face recognition and voice analysis to prevent unauthorized access. The system enables seamless remote monitoring and control through an interface, providing real-time alerts and secure visitor tracking.",
    technologies: ["Python", "React", "TypeScript", "Django"],
    github: "https://github.com/Sanya2911/smart-door-bell",
  },
  {
    title: "PoseNet Posture Detection System",
    image: project2,
    description:
      "Implemented a real-time posture detection system enhancing user experience through precise identification of key anatomical points.Integrated webcam input for in-depth analysis of users' body poses, and designed a responsive visualization on a dynamic canvas.",
    technologies: ["Python", "ml5.js", "p5.js", "PoseNet"],
  },
  {
    title: "News Article Summarizer",
    image: project3,
    description:
      "An innovative application developed utilizing Natural Language Processing (NLP) and Machine Learning to generate concise summaries of news articles. Features a user-friendly interface that allows users to input article URLs and receive instant, AI-generated summaries.Streamlines information consumption, enabling users to stay informed quickly and efficiently.",
    technologies: ["Python", "Tkinter", "NLP", "TensorFlow"],
    github:"https://github.com/Sanya2911/News_Article_Summarization",
  },
  {
    title: "ZenFit-Fitness App",
    image: project4,
    description:
      "A Recommendation based web application that support healthcare organizations to take future predictions in fitness and wellness. The app contains features like: Personalized fitness AI guidance,AI based coaching platform,Workout Monitoring,Nutrition planner,Water Tracker,Calorie Tracker and Fitness Community and Holistic Wellbeing",
    technologies: ["React","Flask","Python", "OpenAI"],
    github:"https://github.com/Sanya2911/ZenFit",
  },
  {
    title: "Online Job Portal",
    image: project5,
    description:
      "A feature-rich platform that facilitates efficient job searching, job posting, and application submission with database integration and management for user profiles and job listings.",
    technologies: ["HTML", "CSS", "jQuery", "Bootstrap", "mySQL","PhP"],
  },
];


