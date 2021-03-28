import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const PageText = styled.p`
  font-size: 1.3rem;
  color: white;
  margin-top: 1.3rem;
  font-weight: 100;
`

const BlogCards = ({ title, category, date, id }) => {
  return (
    <div
      style={{
        width: 400,
        height: 772,
        backgroundColor: "#43424E",
      }}
    >
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
        <div
          style={{
            marginTop: 110,
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
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
        </div>
      </div>
    </div>
  )
}

export default BlogCards
