type Project = {
  title: string;
  description: string;
  techStack: string[];
  videoSrc?: string;  
  imageSrc?: string;       
  liveLink?: string;
  githubRepo?: string;
  highlights?: string[];
  challenges?: string;
};
const projects: Project[] = [
    {
    title: "Resume Analyzer",
    description:
      "Resume Analyser — A full-stack AI-powered web app that analyzes uploaded resumes and extracts key insights such as skills, experience, and strengths using NLP. Built with React (TypeScript), Spring Boot, and FastAPI (Python).",
    techStack: ["React.js","Spring-boot","FastAPI","nlp", "Tailwind CSS", "PostgreSQL", "Supabase","Vercel","Render","huggingface"],
    imageSrc: "/projectImages/resumeAnalyzer.png",
   
    liveLink: "https://resume-analyzer-blush-nine.vercel.app/",
    githubRepo: "https://github.com/MEETparmar230/Resume-analyzer-client",
    
  
  },
  {
    title: "GramBazaar",
    description:
      "GramBazaar (Village Kart) is a Next.js 15 MERN Stack e-commerce platform built as a full-stack project. It allows users to explore rural products, book and pay securely via Stripe Sandbox, and provides a separate Admin Dashboard for managing the platform.",
    techStack: ["Next.js","Redux-Toolkit", "Tailwind CSS", "Zod", "MongoDB", "Stripe", "Cloudinary", "JWT","bcrypt","React Hot Toast","Vercel"],
    videoSrc: "/projectVideos/Grambazaar.mp4",
   
    liveLink: "https://gram-bazaar.vercel.app/",
    githubRepo: "https://github.com/MEETparmar230/GramBazaar",
    
  
  },
  {
    title: "TripBNB",
    description:
      "A full-stack Airbnb clone built with the MERN stack. Users can list, search, and book rentals.",
    techStack: ["React", "Tailwind CSS", "Express", "MongoDB", "Mapbox", "Cloudinary", "Passport.js"],
    videoSrc: "/projectVideos/TripBNB.mp4",
   
    liveLink: "https://tripbnb-sand.vercel.app/",
    githubRepo: "https://github.com/MEETparmar230/TripBNB",
    
  
  },
  {
    title: "Personal-Finance-Visualizer",
    description:
      "A full-stack web application to help users track transactions, set monthly budgets, and visualize their spending trends. Built using Next.js, MongoDB, Recharts, and shadcn/ui.",
    techStack: ["Next.js 14 (App Router)", "Next.js API Routes", "TypeScript","Recharts","Tailwind CSS", "shadcn/ui", "Mongoose", "MongoDB Atlas,"],
   
    imageSrc: "/projectImages/financeVisualizer.png",
    liveLink: "https://personal-finance-visualizer-kohl.vercel.app/",
    githubRepo: "https://github.com/MEETparmar230/Personal-Finance-Visualizer",
    
  
  },
  {
    title: "My-To-do-app",
    description:
      "A simple To-Do List web application built using the MERN stack. Users can create, read, update, and delete tasks, with a user-friendly interface.",
    techStack: ["React", "Node.js", "Tailwind CSS", "Express", "MongoDB", "Mongoose"],
    
    imageSrc: "projectImages/Todo.png",
    liveLink: "https://my-to-do-app-blue.vercel.app/",
    githubRepo: "https://github.com/MEETparmar230/My-To-do-app",
    
  
  },
];


export default projects;

