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
`

const ListItemStyled = styled.ul`
  text-decoration: none;
`

const NavBar = () => {
  return (
    <NavStyled>
      <DivStyled>
        {pages.map(page => {
          return (
            <ListItemStyled key={page.text}>
              <Link
                to={page.url}
                style={{
                  textDecoration: "none",
                  color: "#011627",
                  fontSize: 21,
                }}
              >
                {page.text}
              </Link>
            </ListItemStyled>
          )
        })}
      </DivStyled>
    </NavStyled>
  )
}

export default NavBar
