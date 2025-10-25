// ============== DATA (data.js) ==============
const siteMeta = {
  name: "Yogesh Saini",
  role: "Web Developer",
  languages: ["JavaScript"],
  location: "Deeg, Bharatpur  (RAJ)",
  email: "ys30371@gmail.com",
  workplace: "Remote / Freelance",
  desc: "I build user-friendly, high-performance web apps"
};

const skills = [
  {
    id: "frontend",
    title: "Frontend Development",
    items: ["React", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "Express", "REST API", "Mongoose"]
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    items: ["VS Code", "Firebase", "Vercel", "Cheerio"]
  },
  {
    id: "creative",
    title: "Creative Skills",
    items: ["Web Scraping", "Prototyping", "Rapid UI"]
  },
  {
    id: "exploring",
    title: "Learning / Exploring",
    items: ["Web Scraping", "Expo"]
  }
];

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Sharwin Management / Freelance",
    duration: "Jan 2025",
    work: ["Built SPA interfaces", "Component-driven UI", "Responsive design"],
    projectUrl: "https://republic-omega.vercel.app/",
    description: "Led frontend development of a high-performance, accessible e-commerce-style platform for promo codes across education, shopping, and health & beauty categories."
  }
];

const education = [
  
  {
    id: 2,
    title: "Web Development & Programming",
    type: "Self Learning (HTML, CSS, JavaScript, React, Node.js)",
    year: "Ongoing"
  },
  {
    id: 3,
    title: "Teacher Diploma",
    type: "Government Teaching Program",
    year: "2022"
  },
  {
    id: 4,
    title: "12th Grade",
    type: "High School",
    year: "2018",
    subjects: ["Maths", "Science", "Physics"]
  }
];


const projects = [
  {
    id: "p1",
    name: "Syncy",
   description: "Built a music discovery SPA with search, favorites, and a player. Integrated Firebase Google Authentication to save personal playlists and import others’ playlists for a seamless experience.",
   stack: ["React", "Tailwind", "Firebase"],
    codeUrl: "https://github.com/yogesh616/syncy",
    liveUrl: "https://syncy.vercel.app/", 
   
  },
   {
    id: "p2",
    name: "MediSearch",
   description: "This backend-focused tool provides suggestions and information when you enter exact disease names.",
   stack: ["React", "Tailwind", "Node.Js", "Express", "MongoDB"],
    codeUrl: "https://github.com/yogesh616/MediSearch/",
    liveUrl: "https://medi-search.vercel.app/", 
   
  }
];

export { siteMeta, skills, experiences, education, projects}