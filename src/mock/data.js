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
    img: 'mardown-preview-app.jpg',
    title: 'Markdown Previewer',
    info:
      'A minimalist Markdown previewer with a light and dark mode option. Great for quickly seeing how your markdown files will display on a site like Github.',
    info2: '',
    url: 'https://akinghill.github.io/markdown-previewer-LD/',
    repo: 'https://github.com/Akinghill/markdown-previewer-LD', // if no repo, the button will not show up
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
