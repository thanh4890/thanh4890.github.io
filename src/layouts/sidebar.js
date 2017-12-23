import React from "react";
import g from "glamorous";
import { css } from "glamor";
import { rhythm } from "../utils/typography";
import Link from "gatsby-link"
import avatar from './avatar.jpg'
import { FaFacebook, FaTwitter, FaShareAlt } from 'react-icons/lib/fa'

const ListItem = css({
  margin: 0,
  padding: 0
})

const SocialItem = css({
  padding: 5
})

const SidebarLink = css({
  display: 'block',
  paddingLeft: 40,
  textTransform: 'uppercase',
  color: "white",
  ':visited': {
    color: 'white'
  },
  textDecoration: "none",
  ':hover,:active,:focus': {
    color: '#f85e23'
  }
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
      <figure style={{ textAlign: "center", marginTop: rhythm(1), marginBottom: '0' }}>
          <img
            src={avatar} 
            alt={`Thanh Nguyen Dac`}
            style={{ borderRadius: "50%", maxWidth: "150px", marginBottom: 0 }}
          />
      </figure>
    </Link>
    <g.Div
      textAlign='center'
      marginBottom={rhythm(2)}
    >
      <a className={SocialItem} href="#">
        <FaShareAlt style={{
          color: 'white'
        }}/>
      </a>
      <a className={SocialItem} href="#">
        <FaFacebook style={{
          color: 'white'
        }}/>
      </a>
      <a className={SocialItem} href="#">
        <FaTwitter style={{
          color: 'white'
        }}/>
      </a>
    </g.Div>
    <ul style={{ listStyle: "none" }}>
      <li className={ListItem}>
        <a className={SidebarLink} href="#experience">Experience</a>
      </li>
      <li className={ListItem}>
        <a className={SidebarLink} href="#technical-skill">Technical skill</a>
      </li>
    </ul>
    
  </g.Div>
