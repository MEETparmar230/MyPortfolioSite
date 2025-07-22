type Project = {
  title: string;
  description: string;
  techStack: string[];
  videoSrc?: string;          
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
    videoSrc: "/TripBNB.mp4",
    liveLink: "https://tripbnb-sand.vercel.app/",
    githubRepo: "https://github.com/MEETparmar230/TripBNB",
    highlights: [
      "Implemented secure login using Passport.js",
      "Map integration using Mapbox",
      "Cloud image uploads via Cloudinary"
    ],
  
  },
  {
    title: "TripBNB",
    description:
      "A full-stack Airbnb clone built with the MERN stack. Users can list, search, and book rentals.",
    techStack: ["React", "Tailwind CSS", "Express", "MongoDB", "Mapbox", "Cloudinary", "Passport.js", "Passport.js", "Passport.js", "Passport.js"],
    videoSrc: "/TripBNB.mp4",
    liveLink: "https://tripbnb-sand.vercel.app/",
    githubRepo: "https://github.com/MEETparmar230/TripBNB",
    highlights: [
      "Implemented secure login using Passport.js",
      "Map integration using Mapbox",
      "Cloud image uploads via Cloudinary"
    ],
  
  }
];

export default projects;