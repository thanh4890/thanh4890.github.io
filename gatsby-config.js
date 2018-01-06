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
        icon: 'FaFacebook',
        href: 'https://facebook.com/thanh4890'
      },
      {
        icon: 'FaTwitter',
        href: 'https://twitter.com/thanh4890'
      }
    ],
    skills: [
      {
        name: 'Languages',
        skills: [
          {
            name: 'JavaScript',
            level: 3
          }, {
            name: 'PHP',
            level: 3
          }
        ],
      },
      {
        name: 'Web',
        skills: [
          {
            name: 'JavaScript',
            level: 3
          },
          {
            name: 'HTML5',
            level: 2.5,
          },
          { 
            name:'CSS3',
            level: 2
          },
          {
            name: 'React',
            level: 3
          },{
            name: 'Redux',
            level: 2
          },
          {
            name: 'PHP',
            level: 3
          }, {
            name: 'MySQL',
            level: 1,
          },
          {
            name: 'WordPress',
            level: 3
          }
        ],
      },
      {
        name: 'Others',
        skills: [
          {
            name: 'GIT',
            level: 3
          },
          {
            name: 'SVN',
            level: 1.5
          },
          {
            name: 'Sublime Text',
            level: 3,
          },
          {
            name: 'Vim',
            level: 2
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
    }
  ],
};