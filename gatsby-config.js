module.exports = {
  siteMetadata: {
    title: `Thanh Nguyen Dac`,
    author: `Thanh Nguyen Dac`,
    description: `Thanh Nguyen Dac personal site`,
    social: {
      twitter: 'thanh4890'
    },
    socials: [
      {
        icon: 'FaGithub',
        href: 'https://github.com/thanh4890'
      },
      {
        icon: 'FaTwitter',
        href: 'https://twitter.com/thanh4890'
      },
      {
        icon: 'FaLinkedin',
        href: 'https://www.linkedin.com/in/thanh4890/'
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
            level: 5
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
            level: 5
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
            name: 'Gatsby.js',
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
            name: 'Express',
            level: 3.5
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
            name: 'GraphQL',
            level: 2
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
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/cv`,
        name: `cv`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-glamor`,
    `gatsby-plugin-sass`
  ],
}
