type SkillItem = {
  name: string;
  icon: string; 
};

type Skills = {
  frontEnd: SkillItem[];
  backEnd: SkillItem[];
  tools: SkillItem[];
};

const skills: Skills = {
  frontEnd: [
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'Redux', icon: '/icons/redux.svg' },
    { name: 'Tailwind', icon: '/icons/tailwind.svg' },
    { name: 'Vite', icon: '/icons/vite.svg' },
    { name: 'HTML', icon: '/icons/html.svg' },
    { name: 'CSS', icon: '/icons/css3.svg' },
    { name: 'JavaScript', icon: '/icons/js.svg' },
  ],
  backEnd: [
    { name: 'Express', icon: '/icons/express.svg' },
    { name: 'Node.js', icon: '/icons/node.svg' },
    { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    { name: 'PassportJs', icon: '/icons/passportjs.png' },
  ],
  tools: [
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'GitHub', icon: '/icons/githubOg.svg' },
    { name: 'Postman', icon: '/icons/postman.svg' },
    { name: 'Vercel', icon: '/icons/vercel.svg' },
    { name: 'Render', icon: '/icons/render.png' },
    { name: 'Cloudinary', icon: '/icons/cloudinary.svg' },
  ],
};

export default skills;
