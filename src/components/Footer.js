import React from "react"
import styled from "styled-components"

const FooterDivStyled = styled.div`
  background-color: #011627;
  height: 20vh;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = () => {
  return (
    <FooterDivStyled>
      <footer className="footer">
        <div>
          <h4 style={{ color: "white", textAlign: "center" }}>
            copyright&copy;{new Date().getFullYear()}
            <span> Roberto Lentini</span> all rights reserved
          </h4>
        </div>
      </footer>
    </FooterDivStyled>
  )
}

export default Footer
