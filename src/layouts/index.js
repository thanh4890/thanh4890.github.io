import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import SideBar from './sidebar'

const linkStyle = css({ marginLeft: 10, float: `right` });

export default ({ children, data }) =>
  <g.Div
    margin={`0 auto`}
    maxWidth={700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <SideBar/>
    <Link to={`/`}>
      <g.H3
        marginTop={0}
        display={`inline-block`}
        fontStyle={`normal`}
      >
        {data.site.siteMetadata.title}
      </g.H3>
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
    <Link className={linkStyle} to={`/my-files/`}>
      My Files
    </Link>
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
