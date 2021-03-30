import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const pages = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Contact",
    url: "/contact/",
  },
  {
    text: "About",
    url: "/about/",
  },
  {
    text: "Blogs",
    url: "/blogs/",
  },
]

const NavStyled = styled.nav`
  /* width: vw; */
`
const DivStyled = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  height: 2rem;
  width: 70vw;
  flex-direction: "row";
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5vh;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`

const LinkWithActive = styled(Link)`
  text-decoration: none;
  color: #011627;
  font-size: 21;

  &:hover {
    text-decoration: underline;
  }
`
const ListItemStyled = styled.ul``

const NavBar = () => {
  return (
    <NavStyled>
      <DivStyled>
        {pages.map(page => {
          return (
            <ListItemStyled key={page.text}>
              <LinkWithActive to={page.url}>{page.text}</LinkWithActive>
            </ListItemStyled>
          )
        })}
      </DivStyled>
    </NavStyled>
  )
}

export default NavBar
