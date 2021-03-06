import React from "react"
import Layout from "../components/Layout"
import MainSection from "../components/MainSection"
import AboutUsCover from "../images/aboutUsCover.png"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const MainSectionStyled = styled.section`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-image: url(${AboutUsCover});

  @media (max-width: 780px) {
    /* background-image: none; */
    background-color: rgba(66, 66, 78, 0.47);
    padding-top: 18vh;
  }
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

  @media (max-width: 987px) {
    flex-direction: column;
  }
`

const GreySectionStyled2 = styled.section`
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

  @media (max-width: 987px) {
    flex-direction: column;
    height: 1900px;
  }
`

const PageText = styled.p`
  font-size: 1.3rem;
  color: #011627;
  margin-top: 1.3rem;
  font-weight: 100;

  @media (max-width: 780px) {
    font-size: 16;
  }
`
const PageSubTitle = styled.h1`
  color: #011627;
  font-weight: 100;
  font-size: 3.5rem;
  margin-bottom: 5vh;

  @media (max-width: 780px) {
    font-size: 2.5rem;
  }
`

const TextCardStyle = styled.div`
  background-color: #43424e;
  width: 500px;
  padding: 50px;
  @media (max-width: 780px) {
    width: 70vw;
  }
`

const About = () => {
  return (
    <>
      <SEO title="About" />
      <MainSectionStyled>
        <MainSection title="About Us" />
      </MainSectionStyled>
      <GreySectionStyled>
        <div style={{ maxWidth: 500, padding: 10 }}>
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
      <GreySectionStyled2>
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
          <TextCardStyle>
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
          </TextCardStyle>
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
          <TextCardStyle>
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
          </TextCardStyle>
        </div>
      </GreySectionStyled2>
      <Footer />
    </>
  )
}

export default About
