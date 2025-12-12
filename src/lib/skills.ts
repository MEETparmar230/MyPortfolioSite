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
    { name: 'GraphQL', icon: '/icons/graphql.svg' },
    { name: 'HTML', icon: '/icons/html.svg' },
    { name: 'CSS', icon: '/icons/css3.svg' },
    { name: 'JavaScript', icon: '/icons/js.svg' },
  ],
  backEnd: [
    { name: 'Spring-Boot', icon: '/icons/springBoot.svg' },
    { name: 'Node.js', icon: '/icons/node.svg' },
    { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    { name: 'JWT', icon: '/icons/jwt.svg' },
    { name: 'Bcrypt', icon: '/icons/bcrypt.svg' },
    { name: 'SQL', icon: '/icons/pgsql.svg' },

  ],
  tools: [
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'GitHub', icon: '/icons/githubOg.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'Postman', icon: '/icons/postman.svg' },
    { name: 'Cloudinary', icon: '/icons/cloudinary.svg' },
    { name: 'Stripe', icon: '/icons/stripe.svg' },
    { name: 'Vercel', icon: '/icons/vercel.svg' },
    { name: 'Render', icon: '/icons/render.png' },

  ],
};

export default skills;
