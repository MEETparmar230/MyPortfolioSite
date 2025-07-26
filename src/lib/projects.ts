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
    
    imageSrc: "myImage.png",
    liveLink: "",
    githubRepo: "https://github.com/MEETparmar230/My-To-do-app",
    
  
  },
];

export default projects;