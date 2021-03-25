import { getImageAsBas64String } from './file.utils.js';

export default {
  picture: getImageAsBas64String('picture.jpg'),
  name: 'Jonas Brems',
  title: 'Full stack Javascript developer',
  mainSkills: ['Javascript', 'Angular', 'Nodejs', 'Express', 'Typescript', 'MongoDB', 'Jest'],
  contact: {
    phone: undefined,
    email: undefined,
    github: 'https://github.com/jbrems',
    linkedIn: '/in/jonas-brems-a2022b2a',
    website: 'http://jonasbrems.be'
  },
  languages: ['Dutch', 'English'].join(' & '),
  aboutMe: [
    'I am a 31 year old, experienced web application developer with a history in Java development.',
    'I have a strong preference for self-learning and continuous self-improvement.',
    'I stay mostly up-to-date with new technologies in the Javascript community and discuss interesting technologies with my colleagues.',
    'I love clean code, 100% test coverage, pretty documentation and reusability without overengineering.'
  ],
  experience: [
    { jobTitle: 'Web developer @ CM', period: 'May 2017 - present (4 years)', descriptions: [
      'After 5 years of Java development I joined CM\'s web team as a junior, self-taught Angular and Nodejs developer and contributed to making web applications to be embedded in the company\'s website (cm.be).',
      'Through the years I became the most experienced member of the team where I currently support my colleagues and tackle the most challenging tasks as a solution architect.',
      'During my time in this awesome team I\'ve specialised in authentication protocols (OAuth 2.0, OpenID Connect, SAML 2.0) and Angular 2+ while leaving the DevOps and Docker containerization to the more interested colleagues.',
      'In my current position I work with popular Javascript technologies like NodeJs 14, Angular 11, Express, Passportjs, mongoose and Jest.',
    ]},
    { jobTitle: 'Software engineer Java @ CM', period: 'April 2012 - May 2017 (5 years)', descriptions: [
      'Development of Java web-applications, web-services and supporting applications.',
    ]},
    { jobTitle: 'Junior Oracle consultant', period: 'August 2011 - April 2012 (< 1 year)', descriptions: [
      'I briefly worked as an Oracle consultant implementing a stock counting application for a client in Oracle\'s Apex.',
    ]},
    { jobTitle: 'After work', descriptions: [
      'After work I stay up to date with non-work-related web development technologies by watching my favorite technology youtubers or listening to my favorite (Syntax) podcast, often while playing video games that require little focus or attention.',
      'Doing so provided me with basic knowledge of React, Vue, GraphQL, UX and design principles, SVG animations, Redux, and much more.',
    ]},
  ],
  education: [
    { degree: 'Bachelor in Applied Informatics', school: 'Karel de Grote Hogeschool Antwerpen', period: 'September 2008 - July 2011 (3 years)', topic: 'Software management (best of year)'},
    { degree: 'High school ASO diploma', school: 'Onze-Lieve-Vrouwinstituut Boom', period: 'September 2001 - July 2007 (6 years)', topic: 'Latijn Wiskunde'},
  ],
  myWork: [
    { descriptions: [
      'After working for 4 years in CM\'s web team it probably won\'t surprise you that most of the Angular applications embedded in <a href="https://www.cm.be" class="underline">CM\'s website</a> contain some of my influence and at least a couple of hundred lines of my code.',
    ]},
    { image: getImageAsBas64String('fanfaars.jpg'), alt: 'Brass band website showcase', descriptions: [
      'I designed, developed and maintain the website for the local brass band where I play the trumpet.',
      'The website is built with Angular, uses Google\'s Firestore and serverless functions, and is hosted by Firebase.',
      'Visit <a href="https://fanfaars.com" class="underline">fanfaars.com</a> for the full experience.',
    ]},
    { image: getImageAsBas64String('redacted.jpg'), alt: 'Pretty documentation showcase', descriptions: [
      'An example of my love for creating pretty documentation.',
      'At the top left, a full technical analysis. <span class="text-xs">The low quality of the image is intentional because it may contain company secrets. Please don\'t use AI to zoom and enhance :).</span>',
      'The top right is my vision for rolling out OAuth 2.0 as a Single Sign On solution for web related projects within the organization.',
      'At the bottom, a presentation I made to kickstart the discussion about transitioning to a mono repository within the team.',
    ]},
    { image: getImageAsBas64String('projects.jpg'), alt: 'Personal projects showcase', descriptions: [
      'At times when my work activities do not satisfy my urge to create things, I tend to spin up some projects of my own after working hours.',
      'These projects are made with nothing but the HTML Canvas and Javascript.',
      '<a href="https://github.com/jbrems/ray-casting" class="underline">Ray casting</a>',
      '<a href="https://github.com/jbrems/gravity" class="underline">Gravity simulation</a>',
      '<a href="https://github.com/jbrems/color-wheel" class="underline">Color wheel</a>',
    ]},
  ],
  //footer: 'This PDF was built with HTML and TailwindCSS and was generated with Handlebars and Puppeteer.'
  footer: 'This page was built with HTML and TailwindCSS and was generated with Handlebars.'
};
