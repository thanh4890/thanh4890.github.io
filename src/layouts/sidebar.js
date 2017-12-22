import React from "react";
import g from "glamorous";
import { css } from "glamor";
import { rhythm } from "../utils/typography";
import Link from "gatsby-link"
import avatar from './avatar.jpg'

const SidebarLink = css({
  color: "#d4ddd5",
  textDecoration: "none"
})

export default () =>
  <g.Div
    backgroundColor="#303030"
    width="200"
    position="fixed"
    top="0"
    bottom="0"
    left="0"
  >
    <Link to="/">
      <figure style={{ textAlign: "center", marginTop: rhythm(1) }}>
          <img
            src={avatar} 
            alt={`Thanh Nguyen Dac`}
            style={{ borderRadius: "50%", maxWidth: "150px" }}
          />
      </figure>
    </Link>
    <ul style={{ listStyle: "none" }}>
      <li>
        <a className={SidebarLink} href="#experience">Experience</a>
      </li>
      <li>
        <a className={SidebarLink} href="#technical-skill">Technical skill</a>
      </li>
    </ul>
    <div>
      social
      mail
    </div>
  </g.Div>
