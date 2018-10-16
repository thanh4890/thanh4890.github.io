import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import SideBar from './sidebar'
import FaMail from 'react-icons/lib/fa/mail-forward'
import FaPdf from 'react-icons/lib/fa/file-pdf-o'
import './bootstrap.scss'

const mediaQueries = {
  phone: '@media only screen and (max-width: 660px)',
}

const SiteTitle = g.div({
  width: '50%',
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
  color: '#303030'
})

const Email = g.a({
  display: 'inline-block',
  color: '#f85e23',
  marginLeft: 10,
  marginBottom: rhythm(1),
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
    marginBottom: rhythm(1)
  }
});

const Pdf = g(Email)({
  marginLeft: 0
})

export default ({ children, data }) =>
  <g.Div
    margin={`0 auto`}
    maxWidth={740}
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
          <FaMail css={{
            display: 'inline-block',
            marginRight: '5px'
          }}/>
          thanh4890@gmail.com
        </Email>|
        <Pdf href="/Thanh-Nguyen-Dac-CV.pdf">
          <FaPdf css={{
            display: 'inline-block',
            marginRight: '5px'
          }}/>
          PDF Version
        </Pdf>
      </SiteMeta>
    </g.Header>
    <hr/>
    {children()}
  </g.Div>

export const query = graphql`
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
`
