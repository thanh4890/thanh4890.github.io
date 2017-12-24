module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Thanh Nguyen Dac`,
    socials: [
      {
        icon: 'FaShareAlt',
        href: '#'
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
        skills: ['JavaScript', 'PHP'],
      },
      {
        name: 'Web',
        skills: ['JavaScript', 'HTML5', 'CSS3', 'React', 'Redux', 'PHP', 'MySQL', 'WordPress'],
      },
      {
        name: 'Others',
        skills: ['GIT', 'SVN', 'Sublime Text', 'Vim'],
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