import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import SideBar from './sidebar'
import FaMail from 'react-icons/lib/fa/mail-forward'
import './bootstrap.scss'

const mediaQueries = {
  phone: '@media only screen and (max-width: 500px)',
}

const SiteTitle = g.div({
  width: '50%',
  float: 'left',
  [mediaQueries.phone]: {
    width: 'auto',
    float: 'none'
  }
})

const Email = g.a({
  display: 'inline-block',
  color: '#f85e23',
  marginLeft: 10,
  marginBottom: rhythm(1),
  float: `right`,
  padding: '1px 3px',
  borderRadius: 2,
  textDecoration: 'none',
  ':hover, :active, :focus': {
    backgroundColor: '#303030',
    color: 'white'
  },
  [mediaQueries.phone]: {
    float: 'none',
    marginLeft: 0,
    marginBottom: rhythm(1)
  }
});

export default ({ children, data }) =>
  <g.Div
    margin={`0 auto`}
    maxWidth={700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <SideBar socials={data.site.siteMetadata.socials}/>
    <g.Header
      overflow='hidden'
    >
      <SiteTitle>
        <Link to={`/`}
          css={{
            textDecoration: 'none'
          }}
        >
          <g.H3
            marginTop={0}
            marginBottom={rhythm(1/4)}
            display={`inline-block`}
            fontStyle={`normal`}
            color='#303030'
            textTransform="uppercase"
          >
            {data.site.siteMetadata.title}
          </g.H3>
          <g.P color='#303030'>
            Web Developer
          </g.P>
        </Link>
      </SiteTitle>
      <g.Div
        overflow="hidden"
      >
        <Email href="mailto:thanh4890@gmail.com">
          <FaMail css={{
            display: 'inline-block',
            marginRight: '5px'
          }}/>
          thanh4890@gmail.com
        </Email>
      </g.Div>
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
