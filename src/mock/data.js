import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Austin Hill | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome World', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Austin Hill',
  subtitle: "I'm a developer and teacher.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I love designing, developing, and solving problems. I am traditionally trained in computer science, and a self taught web developer. I enjoy leading teams of developers and a writing clean code. Currently, I am a lead instructor with Persevere. I am passionate about new technologies, creating with them and helping others along the way.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tyf-thumbnail.jpg',
    title: 'Teach You Freedon',
    info:
      "A simple landing page made for Teach You Freedom. This start-up's vision is to create a place for individuals to track and enhance their personal development and self actualization journeys",
    info2: '',
    url: 'https://akinghill.github.io/tyf/',
    repo: 'https://github.com/Akinghill/tyf', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'royal-sky.png',
    title: 'Royal Sky Shopping',
    info:
      "A high class and high fashion shopping experience",
    info2: '',
    url: 'https://akinghill.github.io/royal-sky/',
    repo: 'https://github.com/Akinghill/royal-sky', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'facial-recognition-app.png',
    title: 'Facail Recognition App',
    info:
      "This project uses the Clarifai API to detect where faces are present in photos. I haven't come up with a practical application for this yet, but creating this project allowed me to get familiar with the process of using an API and authenticating users.",
    info2: '',
    url: 'https://akinghill.github.io/face-identifier/',
    repo: 'https://github.com/Akinghill/face-identifier', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'akinghill@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/akinghill',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/austin-king-hill/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Akinghill/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
