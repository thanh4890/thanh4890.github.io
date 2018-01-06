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
            level: 5
          }, {
            name: 'PHP',
            level: 5
          }
        ],
      },
      {
        name: 'Web',
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
            level: 5
          },{
            name: 'Redux',
            level: 4
          },
          {
            name: 'PHP',
            level: 5
          }, {
            name: 'MySQL',
            level: 2,
          },
          {
            name: 'WordPress',
            level: 5
          }
        ],
      },
      {
        name: 'Others',
        skills: [
          {
            name: 'GIT',
            level: 5
          },
          {
            name: 'SVN',
            level: 2.5
          },
          {
            name: 'Sublime Text',
            level: 5,
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
    }
  ],
};