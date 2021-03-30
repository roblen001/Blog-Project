import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const PageText = styled.p`
  font-size: 1.3rem;
  color: white;
  margin-top: 1.3rem;
  font-weight: 100;
`
const StyledBlogCard = styled.div`
  background-color: rgba(66, 66, 78);
  width: 30%;

  @media (max-width: 1334px) {
    width: 90vw;
    margin-top: 10vh;
  }
`
const DateCatStyled = styled.div`
  margin-top: 110px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;

  @media (max-width: 402px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const BlogCards = ({ title, category, date, id }) => {
  return (
    <StyledBlogCard>
      {id === 1 && (
        <StaticImage
          src="../images/ferrari.png"
          width={335}
          height={369}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ width: "100%" }}
        />
      )}
      {id === 2 && (
        <StaticImage
          src="../images/Riccardo.png"
          width={335}
          height={369}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ width: "100%" }}
        />
      )}
      {id === 3 && (
        <StaticImage
          src="../images/win.png"
          width={335}
          height={369}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ width: "100%" }}
        />
      )}
      <div style={{ padding: "5%" }}>
        <h3 style={{ color: "white" }}>{title}</h3>
        <PageText>
          Aliquam commodo diam a nibh dictum sagittis. Duis ultrices ex lectus.
          Aenean fringilla vehicula orci, sed eleifend lacus imperdiet id. Nam
          iaculis lacinia hendrerit.
        </PageText>
        <DateCatStyled>
          <div
            style={{
              backgroundColor: "#5D737E",
              width: 165,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              alignSelf: "center",
            }}
          >
            <PageText>{category}</PageText>
          </div>
          <PageText>{date}</PageText>
        </DateCatStyled>
      </div>
    </StyledBlogCard>
  )
}

export default BlogCards
