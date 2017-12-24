import React from "react";
import g from "glamorous";
import Link from "gatsby-link"
import { rhythm } from "../utils/typography";

const Separator = g.hr({
  marginTop: rhythm(1),
  marginBottom: rhythm(1)
})

const Skills = g.div({
  marginLeft: rhythm(1.2)
})

const Skill = g.span({
  padding: '3px 8px',
  borderRadius: 3,
  fontSize: 13,
  color: '#555',
  display: 'inline-block',
  ':hover': {
    color: '#ddd',
    backgroundColor: '#303030'
  }
})

const Year = g.span({
  display: 'inline-block',
  padding: '3px 8px',
  borderRadius: 3,
  backgroundColor: '#303030',
  fontSize: 14,
  fontWeight: 'normal'
})

const Start = g.span({
  color: '#eee'
})

const End = g.span({
  display: 'inline-block',
  paddingLeft: 8,
  color: '#aaa'
})

export default ({ data }) => {
  return (
    <div>
      <g.H1 id="experience">
        Experience
      </g.H1>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <div>
          <h2>
            <Year><Start>{node.frontmatter.start}</Start> <End>{node.frontmatter.end}</End></Year> {node.frontmatter.title}
          </h2>

          <div dangerouslySetInnerHTML={{ __html: node.html }} />

          <Skills>
            {node.frontmatter.skills.split(',').map(skill =>
              <Skill>{skill}</Skill>
            )}
          </Skills>

          <Separator/>
        </div>
        )
      )}

      <g.H1 id="technical-skills">
        Skills
      </g.H1>
      {data.site.siteMetadata.skills.map(group =>
        <div>
          <g.H3 css={{
            marginBottom: rhythm(1/2)
          }}>{group.name}</g.H3>
          <g.Div css={{
            marginBottom: rhythm(1)
          }}>
            {group.skills.map(skill =>
              <Skill>{skill}</Skill>
            )}
          </g.Div>
        </div>
      )}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        skills {
          name
          skills
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
              start
              end
              skills
            }
        }
      }
    }
  }
`;
