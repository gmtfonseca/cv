export const profile = {
  name: 'Gustavo Fonseca_',
  bio: `I'm a software engineer with 14+ years of experience in full-stack development, cloud infrastructure, and microservices — especially with AWS.
        I enjoy working both independently and with teams, and I try to bring a thoughtful, disciplined approach to every project.
        I care a lot about writing clean, reliable code and building software that's actually useful.`,
  phone: '+55 (51) 997339260',
  email: 'gustavofonseca94@gmail.com',
  footerText: 'Made with Vue & TailwindCSS',
  socials: [
    {
      name: 'LinkedIn',
      svgPath:
        'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      url: 'https://www.linkedin.com/in/gustavo-fonseca-0300ba209',
    },
    {
      name: 'GitHub',
      svgPath:
        'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z',
      url: 'https://github.com/gmtfonseca',
    },
    {
      name: 'Stack Overflow',
      svgPath:
        'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.512 8.272l5.532 3.243-.686 1.162-5.533-3.243.687-1.162zm-1.456 3.113l6.185 1.739-.332 1.23-6.204-1.667.351-1.302zm-.672 2.813l6.498.65-.117 1.28-6.504-.586.123-1.344zm-.193 2.469h6.667v1.333h-6.667v-1.333zm8.833 3.333h-11v-7h1v6h9v-6h1v7zm-.852-8.704l-3.56-5.219 1.115-.76 3.559 5.219-1.114.76zm1.356-.841l-1.08-6.224 1.328-.231 1.082 6.224-1.33.231z',
      url: 'https://stackoverflow.com/users/3245229/gustavo-fonseca?tab=profile',
    },
  ],
}

export const workExperiences = [
  {
    company: 'FullStack Labs',
    role: 'Senior Software Engineer',
    period: 'Jun 2022 – to date',
    tasks: [
      'Developed microservices using Node, TypeScript, and NestJS, enhancing system scalability',
      'Collaborated with U.S. clients and globally distributed teams to deliver high-quality solutions',
      'Designed and implemented a payment microservice with multiple payment gateway integrations',
      'Enhanced existing microservices for ticketing and events, improving system reliability',
      'Monitored applications for performance issues and system problems',
      'Utilized A.I. tools to optimize the software development process',
    ],
  },
  {
    company: 'Fonseca LTDA',
    role: 'Software Architect',
    period: 'Feb 2018 – Jun 2022',
    tasks: [
      'Implemented CI/CD pipelines with GitHub Actions and AWS S3 & CloudFront',
      'Deployed applications to the cloud using AWS services, ensuring scalability and security',
      'Developed modern web applications using Vue, Node, and MongoDB',
      'Streamlined Financial and Supply Chain Management processes through innovative solutions',
      'Extracted valuable insights using data mining and visualization tools',
    ],
  },
  {
    company: 'CIGAM',
    role: 'Mid-Level Software Engineer',
    period: 'May 2013 – Feb 2018',
    tasks: [
      'Worked with SQL, PL-SQL, T-SQL, HTML, CSS, JavaScript and Agile',
      'Developed new Supply Chain Management applications using Agile methodologies',
      'Collaborated closely with support teams to address critical customer issues promptly',
      'Conducted internal lectures on SQL optimization techniques to enhance team knowledge',
      'Refactored a large legacy codebase to enhance code quality and performance',
    ],
  },
  {
    company: 'SUNSOFT',
    role: 'Junior Software Engineer',
    period: 'Mar 2011 – Apr 2013',
    tasks: [
      'Worked with Delphi, PostgreSQL and Firebird',
      'Collaborated with four teammates to build a brand new ERP',
    ],
  },
]

export const traditionalCourses = [
  {
    name: 'System Analysis and Development',
    institution: 'UNISINOS',
    period: '2016 – 2019',
    tasks: ['Graduated with honors and distinction'],
  },
  {
    name: 'IT Technician',
    institution: 'IEI',
    period: '2009 – 2011',
  },
]

export const skills = [
  {
    level: 'Proficient',
    description: 'Core technologies and frameworks I use daily in my work.',
    topics: [
      'JavaScript/TypeScript',
      'Node & Express',
      'SQL Databases (MySQL, PostgreSQL)',
      'RESTful APIs',
      'NestJS',
      'HTML/CSS',
      'Git & Version Control',
    ],
  },
  {
    level: 'Good',
    description:
      'Technologies I actively work with and continue to develop expertise in.',
    topics: [
      'AWS Services (S3, Lambda, EC2, CloudFront)',
      'Docker & Containerization',
      'GraphQL',
      'CI/CD (GitHub Actions)',
      'Data Processing (Kafka, Snowflake)',
      'Modern CSS (SCSS, TailwindCSS)',
      'ORM (Prisma, MikroORM)',
      'Vue',
    ],
  },
  {
    level: 'Familiar',
    description:
      "Technologies I've worked with and can quickly adapt to when needed.",
    topics: [
      'MongoDB',
      'Python',
      'Enterprise Database Programming (T-SQL, PL/SQL)',
      'Desktop Development (Electron)',
      'Mobile Development (Android SDK)',
      'Data Analysis & Visualization',
      'Java',
      'Flutter',
    ],
  },
]

export const sideProjects = [
  {
    name: 'Serverless Email Sender',
    description:
      'Serverless and scalable backend designed to securely send emails with a custom template.',
    techs: ['Node', 'TypeScript', 'AWS'],
    sourceUrl: 'https://github.com/gmtfonseca/serverless-email-sender',
    demoUrl: '',
  },
  {
    name: 'Olaria',
    description: 'Fish-farming stock management application.',
    techs: ['TypeScript', 'MySQL', 'Prisma', 'Vue 3'],
    sourceUrl: 'https://github.com/gmtfonseca/olaria',
    demoUrl: '',
  },
  {
    name: 'Quantifico',
    description: 'Mobile and Web app that provides valuable insights on sales.',
    techs: ['JavaScript', 'Flutter', 'Python 3', 'MongoDB'],
    sourceUrl: 'https://github.com/gmtfonseca/quantifico',
    demoUrl: '',
  },
]

export const onlineCourses = [
  {
    course: 'Amazon Web Services Developer - Associate',
    institution: 'AWS',
    url: 'https://aws.amazon.com/certification/certified-developer-associate/',
  },
  {
    course: 'OWASP Web Security',
    institution: 'OWASP',
    url: 'https://owasp.org/',
  },
  {
    course: 'Machine Learning',
    institution: 'Stanford University',
    url: 'https://www.coursera.org/learn/machine-learning',
  },
  {
    course: 'AI & Machine Learning',
    institution: 'AppliedAI',
    url: 'https://appliedaicourse.com/',
  },
]
