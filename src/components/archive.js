import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const ArchiveList = styled.ul`
  list-style:none;
  margin:0;
  padding:0;
`

const Archive = () => {
  const data = useStaticQuery(graphql`
    query BlogPostArchives {
      allMarkdownRemark(
        limit: 5,
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <aside>
        <h3>Archives</h3>
        {data.allMarkdownRemark.edges.map(edge => (
          <ArchiveList>
            <li key={edge.node.frontmatter.slug}>
              <Link
                to={`/posts/${edge.node.frontmatter.slug}`}
                alt={edge.node.frontmatter.title}
              >
                {edge.node.frontmatter.title}
              </Link>
            </li>
          </ArchiveList>
        ))}
      </aside>
    </>
  )}
  


export default Archive
