import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Steve | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Steve',
  subtitle: "I'm the full-stack Web & React Native developer you need",
  cta: 'Hire me',
};

// ABOUT DATA
export const aboutData = {
  img: 'me-pro.jpg',
  paragraphOne:
    'Versatile software engineer with a focus on JavaScript based Web and mobile applications with professional experience using front and back-end technologies.',
  paragraphTwo:
    "From cross-platform mobile applications using the popular React framework to human-centered Web applications powered by React and Node.js, I've worked with the most innovative technologies in the industry to build valuable business solutions.",
  paragraphThree:
    'I am dedicated and hungry for knowledge and experience with cutting-edge technologies, techniques, and all things JavaScript.',
  resume: '../../../Resume2020.docx', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'robofriendsLogo.png',
    title: 'Robofriends',
    info:
      'A simple, yet responsive and optimized app where you can search for the name(s) of robots and count clicks to showcase state management in React.',
    info2:
      'An optimized, PWA version of the original Robofriends app, now with exceptional test coverage and built with Accessibility and SEO in mind. It is also Typescript-ified, setup with eslint, prettier will run before each commit, and has CI through CircleCI.',
    url: 'https://sstpierre2.github.io/robofriends-redux/',
    repo: 'https://github.com/SSTPIERRE2/robofriends-redux', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'stephencstpierre@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/nothisissteve',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/steve_saint',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'www.linkedin.com/in/stevecstpierre',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sstpierre2',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
