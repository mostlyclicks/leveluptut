import React from "react"
import { Link, useStaticQuery, StaticQuery } from "gatsby"
import styled from 'styled-components'
// import Image from "../components/image"
// import SEO from "../components/seo"

const ArticleWrapper = styled.div`
  a {
    text-decoration: none;
    color: #323232;
  }
`

const StyledArticle = styled.article`
  box-shadow:0 3px 10px rgba(25,25,25,0.05);
  padding:.7rem 1rem;
`

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(edge => (
        <ArticleWrapper>
          <Link to={`/posts${edge.node.frontmatter.slug}`}>
            <StyledArticle key={edge.node.frontmatter.slug}>
              <h2>{edge.node.frontmatter.title}</h2>
              <small>{edge.node.frontmatter.date}</small>
              <p>{edge.node.excerpt}</p>
            </StyledArticle>
          </Link>
        </ArticleWrapper>
      ))
    }
  />
)

export default Listing
