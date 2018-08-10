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
        name: 'My CV',
        feature: '/thanh-cv.png',
        images: [
          '/thanh-cv.png',
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
          }, {
            name: 'PHP',
            level: 4
          }
        ],
      },
      {
        name: 'Web',
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
          },{
            name: 'Redux',
            level: 4
          },
          {
            name: 'PHP',
            level: 4
          }, {
            name: 'MySQL',
            level: 3,
          },
          {
            name: 'WordPress',
            level: 4
          }
        ],
      },
      {
        name: 'Others',
        skills: [
          {
            name: 'GIT',
            level: 4
          },
          {
            name: 'SVN',
            level: 2.5
          },
          {
            name: 'Sublime Text',
            level: 4,
          },
          {
            name: 'Vim',
            level: 3.5
          }
        ],
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