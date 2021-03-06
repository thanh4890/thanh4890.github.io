import React from "react";
import g from "glamorous";
import {Link} from "gatsby";
import { rhythm } from "../utils/typography";
import SideBar from './sidebar'
import {FiMail} from 'react-icons/fi'
import {FaFilePdf} from 'react-icons/fa'
import './bootstrap.scss'
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import {useStaticQuery, graphql} from 'gatsby'

const mediaQueries = {
  phone: '@media only screen and (max-width: 660px)',
}

const SiteTitle = g.div({
  width: '40%',
  float: 'left',
  ':hover .site-name': {
    color: '#f85e23'
  },
  ':hover .site-desc': {
    color: '#f85e23'
  },
  [mediaQueries.phone]: {
    width: 'auto',
    float: 'none'
  }
})

const SiteMeta = g.div({
  overflow: 'hidden',
  textAlign: 'right',
  [mediaQueries.phone]: {
    textAlign: 'left'
  }
})

const SiteName = g.h3('site-name', {
  marginTop: 0,
  marginBottom: rhythm(1/4),
  display: `inline-block`,
  fontStyle: `normal`,
  color: '#303030',
  textTransform: "uppercase"
})

const SiteDesc = g.p('site-desc', {
  color: '#303030',
  marginBottom: 0,
  [mediaQueries.phone]: {
    marginBottom: rhythm(1/2)
  }
})

const Email = g.a({
  display: 'inline-block',
  color: '#f85e23',
  marginLeft: 10,
  padding: '1px 3px',
  borderRadius: 2,
  textDecoration: 'none',
  ':hover, :active, :focus': {
    backgroundColor: '#303030',
    color: 'white',
    '&:visited': {
      color: 'white'
    },
    textDecoration: 'none'
  },
  ':visited': {
    color: '#f85e23'
  },
  [mediaQueries.phone]: {
    float: 'none',
    marginLeft: 0,
    marginBottom: 0
  }
});

const Pdf = g(Email)({
  marginLeft: 0
})

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          socials {
            href
            icon
          }
        }
      }
    }
  `)

  return (
      <g.Div
      margin={`0 auto`}
      maxWidth={960}
      padding={20}
      paddingTop={rhythm(1.5)}
    >
      <SideBar socials={data.site.siteMetadata.socials}/>
      <g.Header
        overflow='hidden'
      >
        <SiteTitle>
          <Link to={`/`}
            css={{
              textDecoration: 'none',
              ':hover': {
                textDecoration: 'none'
              }
            }}
          >
            <SiteName>
              {data.site.siteMetadata.title}
            </SiteName>
            <SiteDesc>
              Web Developer
            </SiteDesc>
          </Link>
        </SiteTitle>
        <SiteMeta>
          <Email href="mailto:thanh4890@gmail.com">
            <FiMail css={{
              display: 'inline-block',
              marginRight: '5px'
            }}/>
            thanh4890@gmail.com
          </Email>|
          <Pdf href="/Thanh-Nguyen-Dac-CV.pdf">
            <FaFilePdf css={{
              display: 'inline-block',
              marginRight: '5px'
            }}/>
            PDF Version
          </Pdf>
        </SiteMeta>
      </g.Header>
      <hr css={{
        marginTop: rhythm(1.5),
        marginBottom: rhythm(1.5),
        backgroundColor: '#dadada'
      }}/>
      {children}
    </g.Div>
  )
}
