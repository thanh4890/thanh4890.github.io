import React from "react";
import g from "glamorous";
import { css } from "glamor";
import { rhythm } from "../utils/typography";
import Link from "gatsby-link"
import avatar from './avatar.jpg'
import * as FontAwesome from 'react-icons/lib/fa'

const mediaQueries = {
  desktop: '@media only screen and (max-width: 1300px)',
}

const Sidebar = g.div({
  backgroundColor: "#303030",
  width: "200",
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  [mediaQueries.desktop]: {
    display: 'none'
  }
})

const List = g.ul({
  listStyle: "none",
  margin: 0
})

const ListItem = g.li({
  margin: 0,
  padding: 0
})

const SocialItem = g.a({
  padding: 5,
  fontSize: 20
})

const SidebarLink = g.a({
  display: 'block',
  paddingLeft: 25,
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

const AvatarFigure = g.figure({
  textAlign: "center", marginTop: rhythm(1), marginBottom: '0'
})

const Avatar = g.img({
  borderRadius: "50%", maxWidth: "150px", marginBottom: 0
})

const PokeItem =  g(ListItem)({marginTop: rhythm(2)})
const PokeLink =  g(SidebarLink)({color: '#f85e23'})

export default ({ socials }) =>
  <Sidebar>
    <Link to="/">
      <AvatarFigure>
        <Avatar
          src={avatar} 
          alt={`Thanh Nguyen Dac`}
        />
      </AvatarFigure>
    </Link>
    <g.Div
      textAlign='center'
      marginBottom={rhythm(2)}
    >
      {socials.map((social, index) => {
        let Icon = FontAwesome[social.icon]
        return (
          <SocialItem key={index} href={social.href}>
            <Icon css={{ color: 'white' }}/>
          </SocialItem>
        )
      })}
    </g.Div>
    <List>
      <ListItem>
        <SidebarLink href="#experience">Experience</SidebarLink>
      </ListItem>
      <ListItem>
        <SidebarLink href="#spare-time">Spare time</SidebarLink>
      </ListItem>
      <ListItem>
        <SidebarLink href="#portfolio">Portfolio</SidebarLink>
      </ListItem>
      <ListItem>
        <SidebarLink href="#technical-skills">Technical skills</SidebarLink>
      </ListItem>
      <PokeItem>
        <PokeLink href="mailto:thanh4890@gmail.com">Poke Me</PokeLink>
      </PokeItem>
    </List>
  </Sidebar>