import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import purcellLogo from "../images/purcellcomm_logo.png"


const HeaderWrapper = styled.div`
  background:#524763;
  margin-bottom:0;

`;

const HeaderContainer = styled.div`
  margin:0 auto;
  max-width: 960px;
  padding: 0.5rem;
  img {
    margin-bottom:0px; 
    padding-bottom:0px;
    height:100px;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1>
        <Link to="/">
          <img src={purcellLogo} alt="site logo" />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
