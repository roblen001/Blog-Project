import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

const PageText = styled.p`
  font-size: 1.3rem;
  color: white;
  margin-top: 1.3rem;
  font-weight: 100;

  @media (max-width: 817px) {
    text-align: center;
  }
`
const CardStyled = styled.div`
  width: 80vw;
  background-color: #43424e;
  height: 50vh;
  flex-direction: row;
  display: flex;

  @media (max-width: 817px) {
    height: 500px;
    width: 90vw;
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    align-self: center;
  }
`
const CardTitleStyled = styled.h3`
  margin-top: 5%;
  color: white;

  @media (max-width: 817px) {
    text-align: center;
  }
`
const BlogBigCard = ({ title, category, date, id, slug }) => {
  return (
    <CardStyled>
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CardTitleStyled style={{ marginTop: "5%", color: "white" }}>
          Aliquam Commodo{" "}
        </CardTitleStyled>
        <div style={{ width: 300 }}>
          <PageText>
            Aliquam commodo diam a nibh dictum sagittis. Duis ultrices ex
            lectus. Aenean fringilla vehicula orci, sed eleifend lacus imperdiet
            id. Nam iaculis lacinia hendrerit.
          </PageText>
          <Link to={`/blogs/${slug}`} style={{ color: "white" }}>
            <PageText>Read The Post</PageText>
          </Link>
        </div>
      </div>
      {id === 1 && (
        <StaticImage
          src="../images/ferrari.png"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ width: "50%", height: "100%" }}
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
          style={{ width: "50%", height: "100%" }}
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
          style={{ width: "50%", height: "100%" }}
        />
      )}
    </CardStyled>
  )
}

export default BlogBigCard
