module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Thanh Nguyen Dac`,
    socials: [
      {
        icon: 'FaGithub',
        href: 'https://github.com/thanh4890'
      },
      {
        icon: 'FaTwitter',
        href: 'https://twitter.com/thanh4890'
      }
    ],
    portfolio: [
      {
        name: 'Findme',
        feature: '/findme-0.png',
        images: [
          '/findme-1.png',
          '/findme-2.png',
          '/findme-3.png',
          '/findme-4.png',
          '/findme-5.png',
          '/findme-6.png',
          '/findme-7.png',
        ]
      },
      {
        name: 'WhytLink',
        feature: '/whytlink-1.png',
        images: [
          '/whytlink-1.png',
          '/whytlink-2.png',
          '/whytlink-3.png',
          '/whytlink-4.png',
          '/whytlink-5.jpg',
        ]
      },
      {
        name: 'WhytPlot',
        feature: '/whytplot-1.jpg',
        images: [
          '/whytplot-1.jpg',
          '/whytplot-2.jpg',
          '/whytplot-3.jpg',
        ]
      },
      {
        name: 'Unicmag',
        feature: '/unicmag-1.png',
        images: [
          '/unicmag-1.png',
          '/unicmag-2.png',
          '/unicmag-3.png',
        ]
      },
      {
        name: 'Alana',
        feature: '/alana.png',
        images: [
          '/alana.png',
        ]
      },
      {
        name: 'Avex',
        feature: '/avex-1.png',
        images: [
          '/avex-1.png',
        ]
      },
      {
        name: 'Lookmag',
        feature: '/lookmag.png',
        images: [
          '/lookmag.png',
        ]
      },
      {
        name: 'Nictitate',
        feature: '/nictitate.png',
        images: [
          '/nictitate.png',
        ]
      },
      {
        name: 'maybe your projects',
        feature: '/ampersand.jpg',
        images: [
          '/ampersand.jpg',
        ]
      }
    ],
    skills: [
      {
        name: 'Languages',
        skills: [
          {
            name: 'JavaScript',
            level: 4
          },
          {
            name: 'PHP',
            level: 4
          },
          {
            name: 'C/C++',
            level: 2
          },
        ],
      },
      {
        name: 'Frontend',
        skills: [
          {
            name: 'JavaScript',
            level: 4
          },
          {
            name: 'HTML5',
            level: 4,
          },
          { 
            name:'CSS3',
            level: 3.5
          },
          {
            name: 'React',
            level: 4
          },
          {
            name: 'Redux',
            level: 4
          },
          {
            name: 'React Router',
            level: 4
          },
          {
            name: 'jQuery',
            level: 4
          },
          {
            name: 'Google Map',
            level: 3
          },
          {
            name: 'Handlebars',
            level: 4
          },
          {
            name: 'Pug',
            level: 4
          },
          {
            name: 'Gatby.js',
            level: 3
          },
          {
            name: 'Next.js',
            level: 3
          },
        ],
      },
      {
        name: 'Industry Knowledge',
        skills: [
          {
            name: 'Software Development',
            level: 3
          },
          {
            name: 'Web Development',
            level: 4
          },
          {
            name: 'Web Design',
            level: 3
          },
          {
            name: 'Debugging',
            level: 4
          },
          {
            name: 'Design Patterns',
            level: 4
          },
          {
            name: 'Agile',
            level: 3
          },
          {
            name: 'Scrum',
            level: 3
          },
          {
            name: 'OOP',
            level: 3
          },
          {
            name: 'R&D',
            level: 4
          },
          {
            name: 'Data Analysis',
            level: 3
          },
          {
            name: 'Computer Science',
            level: 3
          },
          {
            name: 'Database Design',
            level: 3
          },
          {
            name: 'Software Project Management',
            level: 3
          },
        ]
      },
      {
        name: 'Tools & Technologies',
        skills: [
          {
            name: 'Node.js',
            level: 3
          },
          {
            name: 'Docker',
            level: 3
          },
          {
            name: 'SQL',
            level: 3
          },
          {
            name: 'MySQL',
            level: 3,
          },
          {
            name: 'MongoDB',
            level: 3,
          },
          {
            name: 'WordPress',
            level: 4
          },
          {
            name: 'GIT',
            level: 4
          },
          {
            name: 'SVN',
            level: 2.5
          },
          {
            name: 'Linux',
            level: 3
          },
          {
            name: 'Mac OS',
            level: 3
          },
          {
            name: 'Firebase',
            level: 3
          },
        ],
      },
      {
        name: 'Other Skills',
        skills: [
          {
            name: 'Sublime Text',
            level: 4,
          },
          {
            name: 'Vim',
            level: 3.5
          },
          {
            name: 'Server Side Rendering',
            level: 3.5
          },
          {
            name: 'DevOps',
            level: 3.5
          }
        ]
      }
    ],
    education: [
      {
        name: 'Languages',
        items: ['Vietnamese', 'English']
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-glamor`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.jpg",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
  ],
};