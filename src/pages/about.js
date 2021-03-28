import React from "react"
import Layout from "../components/Layout"
import MainSection from "../components/MainSection"
import AboutUsCover from "../images/aboutUsCover.png"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/Footer"

const MainSectionStyled = styled.section`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-image: url(${AboutUsCover});
`
const GreySectionStyled = styled.section`
  background-color: rgba(66, 66, 78, 0.47);
  height: 1000px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: row;
`

const PageText = styled.p`
  font-size: 1.3rem;
  color: #011627;
  margin-top: 1.3rem;
  font-weight: 100;
`
const PageSubTitle = styled.h1`
  color: #011627;
  font-weight: 100;
  font-size: 3.5rem;
  margin-bottom: 5vh;
`

const About = () => {
  return (
    <>
      <MainSectionStyled>
        <MainSection title="About Us" />
      </MainSectionStyled>
      <GreySectionStyled>
        <div style={{ maxWidth: 500 }}>
          <PageSubTitle>We Believe in Chasing a Good Story</PageSubTitle>
          <PageText>
            Lectus id scelerisque congue, est dolor interdum nisl, lacinia
            accumsan ante purus vel mauris. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Duis at enim
            at felis bibendum porta. Nunc at metus id nisl maximus sagittis.
          </PageText>
          <PageText>
            Aliquam commodo diam a nibh dictum sagittis. Duis ultrices ex
            lectus. Aenean fringilla vehicula orci, sed eleifend lacus imperdiet
            id. Nam iaculis lacinia hendrerit. Curabitur euismod condimentum
            orci, non placerat ex viverra vel.
          </PageText>
        </div>
      </GreySectionStyled>
      <GreySectionStyled>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StaticImage
            src="../images/blogger2.png"
            width={335}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
          />
          <h3 style={{ marginTop: "5%", color: "#011627" }}>Aliquam Commodo</h3>
          <div style={{ backgroundColor: "#43424E", width: 500, padding: 50 }}>
            <PageText style={{ color: "white" }}>
              Aliquam commodo diam a nibh dictum sagittis. Duis ultrices ex
              lectus. Aenean fringilla vehicula orci, sed eleifend lacus
              imperdiet id. Nam iaculis lacinia hendrerit. Aliquam commodo diam
              a nibh dictum sagittis. Duis ultrices ex lectus. Aenean fringilla
              vehicula orci, sed eleifend lacus imperdiet id. Nam iaculis
              lacinia hendrerit. Curabitur euismod condimentum orci, non
              placerat ex viverra vel. Morbi egestas diam non arcu iaculis, ut
              vulputate eros pretium. Etiam congue.
            </PageText>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StaticImage
            src="../images/blogger1.png"
            width={335}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
          />
          <h3 style={{ marginTop: "5%", color: "#011627" }}>Aliquam Commodo</h3>
          <div
            style={{
              backgroundColor: "#43424E",
              width: 500,
              padding: 50,
            }}
          >
            <PageText style={{ color: "white" }}>
              Aliquam commodo diam a nibh dictum sagittis. Duis ultrices ex
              lectus. Aenean fringilla vehicula orci, sed eleifend lacus
              imperdiet id. Nam iaculis lacinia hendrerit. Aliquam commodo diam
              a nibh dictum sagittis. Duis ultrices ex lectus. Aenean fringilla
              vehicula orci, sed eleifend lacus imperdiet id. Nam iaculis
              lacinia hendrerit. Curabitur euismod condimentum orci, non
              placerat ex viverra vel. Morbi egestas diam non arcu iaculis, ut
              vulputate eros pretium. Etiam congue.
            </PageText>
          </div>
        </div>
      </GreySectionStyled>
      <Footer />
    </>
  )
}

export default About
