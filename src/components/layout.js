import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SiteDescription from "./site-description"
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Spring } from "react-spring/renderprops"

import Header from "./header"
import "./layout.css"
import Archive from "./archive"

const MainLayout = styled.main`
 max-width: 90%;
 margin:1rem auto;
 display:grid;
 grid-template-columns:4fr 1fr;
 grid-gap:30px;
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { regex: "/bg/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Spring
          from={{ height: location.pathname === "/" ? 100 : 300 }}
          to={{ height: location.pathname === "/" ? 300 : 100 }}
        >
          {styles => (
            <div style={{ overflow: "hidden", ...styles }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>

        <MainLayout>
          <div>{children}</div>
          <Archive />
          <section>
            <SiteDescription siteDesc={data.site.siteMetadata.description} />
            Pathname: <small>{location.pathname}</small>
          </section>
        </MainLayout>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
