const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://localhost:3000',
  title: 'Welcome',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Prasad Zavre',
  role: 'Software Engineer | Full Stack Developer',
  description:
    'Aspiring Platform Developer , Go Learner, TS Learner, PHP Expert',
  resume: `${process.env.PUBLIC_URL}/Prasad's Resume.pdf`,
  social: {
    linkedin: 'https://linkedin.com/in/prasad-zavre',
    github: 'https://github.com/pczavre',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  // {
  //   name: 'Project 1',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
  // {
  //   name: 'Project 2',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'NestJS',
  'Git',
  'CI/CD',
  'Jest',
  'Docker',
  'Kubernetes',
  'Argo Wf & CD',
  'Go',
  'Webpack',
  'PHP',
  'Laravel',
  'Kafka'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pczavre+github.io@gmail.com',
}

export { header, about, projects, skills, contact }
