import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import SideBar from './sidebar'
import FaMail from 'react-icons/lib/fa/mail-forward'

const linkStyle = css({
  color: '#f85e23',
  marginLeft: 10,
  float: `right`,
  padding: '1px 3px',
  borderRadius: 2,
  textDecoration: 'none',
  ':hover, :active, :focus': {
    backgroundColor: '#303030',
    color: 'white'
  }
});

export default ({ children, data }) =>
  <g.Div
    margin={`0 auto`}
    maxWidth={700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <SideBar/>
    <g.Header
      overflow='hidden'
    >
      <g.Div
        width='50%'
        float='left'
      >
        <Link to={`/`}
          style={{
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
      </g.Div>
      <g.Div
        overflow="hidden"
      >
        <a href="mailto:thanh4890@gmail.com" className={linkStyle}>
          <FaMail style={{
            display: 'inline-block',
            marginRight: '5px'
          }}/>
          thanh4890@gmail.com
        </a>
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
      }
    }
  }
`
