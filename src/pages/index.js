import React from "react"
import g from "glamorous"
import Link from "gatsby-link"
import { rhythm } from "../utils/typography"
import * as FontAwesome from 'react-icons/lib/fa'
import Portfolio from '../components/Portfolio'

const mediaQueries = {
  phone: '@media only screen and (max-width: 660px)',
}

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
  fontSize: 16,
  color: '#555',
  display: 'inline-block',
  ':hover': {
    color: '#ddd',
    backgroundColor: '#303030'
  }
})

const Year = g.span({
  display: 'inline-block',
  padding: '7px 15px',
  borderRadius: 3,
  backgroundColor: '#303030',
  fontSize: 17,
  fontWeight: 'normal',
  marginRight: 10,
  [mediaQueries.phone]: {
    textAlign: 'center'
  }
})

const Start = g.span({
  color: '#eee',
  [mediaQueries.phone]: {
    display: 'block'
  }
})

const End = g.span({
  display: 'inline-block',
  paddingLeft: 8,
  color: '#aaa',
  [mediaQueries.phone]: {
    paddingLeft: 0
  }
})

const centerFlex = {
  display: 'flex',
  alignItems: 'center'
}

export default ({ data }) => {
  return (
    <div>
      <g.H1 id="experience">
        Experience
      </g.H1>
      {data.exp.edges.map(({node}, index) => (
        <div key={index}>
          <h2 css={centerFlex}>
            <Year><Start>{node.frontmatter.start}</Start> <End>{node.frontmatter.end}</End></Year> {node.frontmatter.title}
          </h2>

          <div dangerouslySetInnerHTML={{ __html: node.html }} />

          <Skills>
            {node.frontmatter.skills.split(',').map((skill, index) =>
              <Skill key={index}>{skill}</Skill>
            )}
          </Skills>

          <Separator/>
        </div>
        )
      )}

      <g.H1 id="spare-time">Spare Time</g.H1>

      <div>
        <h2 css={centerFlex}>
          <Year><Start>spare time</Start></Year> Personal projects
        </h2>

        {data.spare.edges.map(({node}, index) =>
          <div key={index}>
            <g.H3 css={{
              marginBottom: rhythm(1/2)
            }}>{node.frontmatter.title}</g.H3>

            <div dangerouslySetInnerHTML={{ __html: node.html }} />

            <Skills>
              {node.frontmatter.skills.split(',').map((skill, index) =>
                <Skill key={index}>{skill}</Skill>
              )}
            </Skills>

            <div css={{
              marginBottom: rhythm(1)
            }}/>
          </div>
        )}

        <Separator/>
      </div>


      <g.H1 id="portfolio">Portfolio</g.H1>

      <div className="row">
        {data.site.siteMetadata.portfolio.map((portfolio, key) =>
          <div key={key} className="col-md-4 col-sm-6" css={{
            marginBottom: rhythm(1)
          }}>
            <Portfolio {...portfolio}/>
          </div>
        )}
      </div>

      <Separator css={{
        marginTop: 0
      }}/>

      <g.H1 id="technical-skills">
        Skills
      </g.H1>
      {data.site.siteMetadata.skills.map((group, index) =>
        <div key={index}>
          <g.H3 css={{
            marginBottom: rhythm(1/2)
          }}>{group.name}</g.H3>
          <g.Div css={{
            marginBottom: rhythm(1)
          }}>
            {group.skills.map((skill, index) => {
              let levels = []
              let stars = Math.floor(skill.level)
              let starHalfs = ((skill.level - 0.5) === stars) ? 1 : 0
              let starOs = 5 - stars - starHalfs
              for (let i = 0; i < stars; i++) {
                levels.push(<FontAwesome.FaStar key={levels.length}/>)
              }
              if (starHalfs) {
                levels.push(<FontAwesome.FaStarHalfEmpty key={levels.length}/>)
              }
              for (let i = 0; i < starOs; i++) {
                levels.push(<FontAwesome.FaStarO key={levels.length}/>)
              }
              return (
                <div key={index}>
                  <Skill>
                    <span css={{marginRight: 10}}>{levels}</span>{skill.name}
                  </Skill>
                </div>
              )
            })}
          </g.Div>
        </div>
      )}

      <Separator/>

      <g.H1 id="education">
        Education
      </g.H1>
      {data.edu.edges.map(({node}, index) => (
        <div key={index}>
          <h3 css={{
            marginBottom: rhythm(1/2),
            ...centerFlex
          }}>
            <Year><Start>{node.frontmatter.year}</Start></Year> {node.frontmatter.title}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
      {data.site.siteMetadata.education.map((group, index) =>
        <div key={index}>
          <g.H3 css={{
            marginBottom: rhythm(1/2)
          }}>{group.name}</g.H3>
          <ul>
            {group.items.map((skill, index) =>
              <li key={index}>{skill}</li>
            )}
          </ul>
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
          skills {
            name
            level
          }
        }
        portfolio {
          name
          feature
          images
        }
        education {
          name
          items
        }
      }
    }
    exp: allMarkdownRemark(sort: {fields: [frontmatter___start], order: DESC}, filter: {
      fileAbsolutePath: {
        regex: "/src\/md\/exp/"
      }}) {
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
    edu: allMarkdownRemark(filter: {
      fileAbsolutePath: {
        regex: "/src\/md\/edu/"
      }}) {
      edges {
        node {
          html
          frontmatter {
            title
            year
          }
        }
      }
    },
    spare: allMarkdownRemark(filter: {
      fileAbsolutePath: {
        regex: "/src\/md\/spare/"
      }}) {
      edges {
        node {
          html
          frontmatter {
            title
            skills
          }
        }
      }
    },
  }
`;
