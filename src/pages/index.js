import React from "react";
import g from "glamorous";
import Link from "gatsby-link"
import { rhythm } from "../utils/typography";

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <g.H1 display={"inline-block"}>
        Experience
      </g.H1>
      <div>
        <span>2015 Now - React Developer at Framgia</span>
        <div className="description">
          Build exciting website for pharmacy
        </div>
        <div className="websites">
          <p>WhytLink <a href="#">http://whytlink.com</a></p>
          <p>WhytPlot <a href="#">http://whytplot.com</a></p>
        </div>
        <div className="skills">
          <span>
            html, css, JS, React
          </span>
          <span>
            Redux
          </span>
        </div>
      </div>
      <hr/>
      <div>
        <span>2013 2015 - WordPress Developer at Kopatheme</span>
        <div className="description">
          Build exciting website for pharmacy
        </div>
        <div className="websites">
          <p>Kopatheme <a href="#">http://kopatheme.com</a></p>
        </div>
        <div className="skills">
          <span>
            html,css, js, PHP
          </span>
          <span>
            WordPress
          </span>
        </div>
      </div>
      <g.H1 display={"inline-block"}>
        Technical Skill
      </g.H1>
      <div>
        c/c++, js, php
        html, css, js, php, mysql
        react, redux
        git, svn, sublime text, vim
      </div>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;