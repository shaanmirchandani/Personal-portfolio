/*
  EDIT THIS FILE IN VS CODE
  =========================
  This is the main file for changing your portfolio content.
  You usually do NOT need to edit index.html.

  Tips:
  - Keep text inside quotes.
  - Put commas after each item, except the last item in a list.
  - For links you do not have yet, use "#".
*/

const portfolioData = {
  name: "Shaan Mirchandani",
  initials: "SM",
  age: "13",
  title: "Young Developer & Creator",
  eyebrow: "Personal portfolio",
  tagline: "I’m learning by building websites, games, and small coding projects.",
  currentlyBuilding: "A real working Jarvis from iron man",

  githubUsername: "shaanmirchandani",
  githubUrl: "https://github.com/shaanmirchandani",
  email: "shaan.mirch@gmail.com",
  discord: "",

  aboutHeading: "I like making things and figuring out how they work.",
  aboutParagraphs: [
    "I'm Shaan Mirchandani, a 13-year-old developer who enjoys making websites, games, and small coding projects. I started by experimenting with simple web pages and game ideas, then kept going because I liked being able to build something, test it, and make it better.",
    "Right now I’m working on HTML, CSS, JavaScript, Python, and game development. I’m also trying to get better at organizing my code and explaining what my projects do."
  ],

  stats: [
    { value: "13", label: "Age" },
    { value: "4+", label: "Skills" },
    { value: "3", label: "Projects" }
  ],

  skillsHeading: "What I’m practicing.",
  skillsSubtitle: "These levels are placeholders. Update them as your skills grow.",
  skills: [
    { name: "Python", level: 78 },
    { name: "HTML/CSS", level: 74 },
    { name: "JavaScript", level: 66 },
    { name: "Scratch", level: 82 }
  ],

  projectsHeading: "Featured work.",
  projectsSubtitle: "Theses are some of my recent projects. I'm always working on new things, so check back often!",
  projects: [
    {
      name: "Personal Portfolio",
      status: "In progress",
      description: "A simple personal site for sharing what I’m learning and building.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/shaanmirchandani",
      demo: "#"
    },
    {
      name: "Jarvis",
      status: "Prototype",
      description: "A prototype of a AI assistant inspired by the fictional Jarvis from Iron Man.",
      tags: ["HTML", "Electron", "AI"],
      github: "https://github.com/shaanmirchandani",
      demo: "#"
    },
    {
      name: "Python Tool",
      status: "Learning",
      description: "A small script idea for practicing problem solving and automation.",
      tags: ["Python", "CLI", "Automation"],
      github: "https://github.com/shaanmirchandani",
      demo: "#"
    }
  ],

  learningHeading: "What I’m learning next.",
  learningGoals: [
    {
      name: "React",
      description: "Learning components, state, and how modern web apps are organized."
    },
    {
      name: "Game Dev",
      description: "Practicing movement, level design, scoring, and better game feel."
    },
    {
      name: "JavaScript",
      description: "Improving with events, arrays, objects, functions, and DOM updates."
    },
    {
      name: "Clean Code",
      description: "Writing code that is easier to read, edit, debug, and explain."
    }
  ],

  contactHeading: "Let’s connect.",
  contactText: "I’m open to project ideas, feedback, and friendly messages about coding. The best places to find me are email and GitHub.",
  footerText: "Built by Shaan Mirchandani · Age 13 · © 2025"
};
