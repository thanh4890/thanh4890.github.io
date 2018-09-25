import React from "react"
import g from "glamorous"
import Link from "gatsby-link"
import { rhythm } from "../utils/typography"
import * as FontAwesome from 'react-icons/lib/fa'
import Portfolio from '../components/Portfolio'

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
      {data.exp.edges.map(({node}, index) => (
        <div key={index}>
          <h2>
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
        <h2>
          <Year><Start>spare time</Start></Year> Personal projects
        </h2>

        <g.H3 css={{
          marginBottom: rhythm(1/2)
        }}>React Starter Kit</g.H3>

        <p>A React starter kit based on <a href="https://github.com/facebook/create-react-app">create-react-app</a> with <a href="https://reacttraining.com/react-router/">React Router</a>, <a href="https://redux.js.org/">Redux</a> and <a href="https://webpack.js.org/concepts/hot-module-replacement/">HMR</a> support. The kit also provided a based code structure.</p>

        <ul>
          <li>Github repo: <a href="https://github.com/thanh4890/react-starter-kit">https://github.com/thanh4890/react-starter-kit</a></li>
        </ul>

        <Skills>
          <Skill>React</Skill>
          <Skill>Redux</Skill>
          <Skill>React Router</Skill>
          <Skill>HMR</Skill>
          <Skill>create-react-app</Skill>
        </Skills>

        <div css={{
          marginBottom: rhythm(1)
        }}/>

        <g.H3 css={{
          marginBottom: rhythm(1/2)
        }}>Punicatheme</g.H3>

        <p>Punicatheme is an author on some online marketplaces (<a href="https://themeforest.net/user/punicavn/portfolio">Themeforest</a>, <a href="https://creativemarket.com/punicatheme/shop">Creative Market</a> and <a href="http://www.mojo-themes.com/user/punicatheme/">Mojo Themes</a>) that provides high quality WordPress themes and website templates.</p>

        <ul>
          <li>Punicatheme website: <a href="http://punicatheme.com">http://punicatheme.com</a></li>
          <li>Punicatheme portfolio:
            <ul>
              <li><a href="https://themeforest.net/user/punicavn/portfolio">https://themeforest.net/user/punicavn/portfolio</a></li>
              <li><a href="https://creativemarket.com/punicatheme/shop">https://creativemarket.com/punicatheme/shop</a></li>
              <li><a href="http://www.mojo-themes.com/user/punicatheme/">http://www.mojo-themes.com/user/punicatheme/</a></li>
            </ul>
          </li>
          <li>Punicatheme documentation: <a href="https://punicatheme.github.io/docs/">https://punicatheme.github.io/docs/</a></li>
        </ul>

        <Skills>
          <Skill>HTML5</Skill>
          <Skill>CSS3</Skill>
          <Skill>JavaScript</Skill>
          <Skill>jQuery</Skill>
          <Skill>PHP</Skill>
          <Skill>WordPress</Skill>
          <Skill>Visual Composer</Skill>
          <Skill>WooCommerce</Skill>
        </Skills>

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
            marginBottom: rhythm(1/2)
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
    }
  }
`;
