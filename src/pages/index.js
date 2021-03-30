import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import MainSection from "../components/MainSection"
import HomeImage from "../images/HomesCover.png"
import { graphql } from "gatsby"
import BlogCards from "../components/BlogCards"

const MainSectionStyled = styled.section`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-image: url(${HomeImage});

  @media (max-width: 780px) {
    /* background-image: none; */
    background-color: rgba(66, 66, 78, 0.47);
    padding-top: 18vh;
  }
`

const BlueSectionStyled = styled.section`
  height: 1000px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-color: #43424e;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;

  @media (max-width: 987px) {
    height: 1500px;
  }
`

const BlueSectionStyled2 = styled.section`
  height: 1000px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-color: #43424e;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;

  @media (max-width: 987px) {
    height: 1000px;
  }
`

const GreySectionStyled = styled.section`
  height: 1200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-color: rgba(66, 66, 78, 0.47);

  @media (max-width: 1087px) {
    height: 3000px;
    justify-content: space-evenly;
  }
`

const PageText = styled.p`
  font-size: 1.3rem;
  color: white;
  margin-top: 1.3rem;
  font-weight: 100;

  @media (max-width: 780px) {
    font-size: 16;
  }
`
const PageSubTitle = styled.h1`
  color: white;
  font-weight: 100;
  font-size: 3.5rem;
  margin-bottom: 5vh;

  @media (max-width: 780px) {
    font-size: 2.5rem;
  }
`
const BlogCardStyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  @media (max-width: 1087px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const ProfileDivStyled = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  @media (max-width: 987px) {
    flex-direction: column;
  }
`

const CoverPageStyled = styled.div`
  max-width: 500px;
  margin: 5%;
`
const StyledVerticalCarDiv = styled.div`
  width: 20%;

  @media (max-width: 987px) {
    width: 0;
  }
`

const info =
  "The only source for everything you want relating to formula 1 news, updates and predictions"

const IndexPage = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <>
      <SEO title="Home" />
      <MainSectionStyled>
        <MainSection title={"The Formula 1 Blog"} info={info} />
      </MainSectionStyled>
      <BlueSectionStyled2>
        {/* <StaticImage
        src="../images/palmTreesCar.png"
        width={1204}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginRight: -100, marginTop: "15%", marginLeft: "15%" }}
      /> */}

        <CoverPageStyled>
          <PageSubTitle>Passion Produces Good Writing</PageSubTitle>
          <PageText>
            Aliquam commodo diam a nibh dictum sagittis. Duis ultrices ex
            lectus. Aenean fringilla vehicula orci, sed eleifend lacus imperdiet
            id. Nam iaculis lacinia hendrerit. Curabitur euismod condimentum
            orci, non placerat ex viverra vel.
          </PageText>
          <PageText>
            Lectus id scelerisque congue, est dolor interdum nisl, lacinia
            accumsan ante purus vel mauris. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Duis at enim
            at felis bibendum porta. Nunc at metus id nisl maximus sagittis.
          </PageText>
        </CoverPageStyled>
        <StyledVerticalCarDiv>
          <StaticImage
            src="../images/verticalCar.png"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ alignSelf: "center" }}
          />
        </StyledVerticalCarDiv>
      </BlueSectionStyled2>

      <GreySectionStyled
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <PageSubTitle style={{ textAlign: "center", color: "#011627" }}>
          Recent News and Blogs
        </PageSubTitle>
        <BlogCardStyledDiv>
          <BlogCards
            title={blogs[0].title}
            category={blogs[0].category}
            date={blogs[0].date}
            id={1}
          />
          <BlogCards
            title={blogs[1].title}
            category={blogs[1].category}
            date={blogs[1].date}
            id={2}
            // image={"../images/ferrari.png"}
          />
          <BlogCards
            title={blogs[2].title}
            category={blogs[2].category}
            date={blogs[2].date}
            // image={"../images/win.png"}
            id={3}
          />
        </BlogCardStyledDiv>
        <Link to="/blogs/" style={{ color: "#011627" }}>
          <PageSubTitle
            style={{
              color: "#011627",
              textAlign: "center",
              marginTop: "5%",
              fontSize: 31,
            }}
          >
            More Blogs and News
          </PageSubTitle>
        </Link>
      </GreySectionStyled>

      <BlueSectionStyled
        style={{ justifyContent: "space-evenly", flexDirection: "column" }}
      >
        <PageSubTitle>About Us</PageSubTitle>
        <ProfileDivStyled>
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
            <h3 style={{ marginTop: "5%", color: "white" }}>
              Aliquam Commodo{" "}
            </h3>
            <div style={{ width: 300 }}>
              <PageText style={{ textAlign: "center" }}>
                Aliquam commodo diam a nibh dictum sagittis. Duis ultrices ex
                lectus. Aenean fringilla vehicula orci, sed eleifend lacus
                imperdiet id. Nam iaculis lacinia hendrerit.
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
              style={{ alignSelf: "center" }}
            />
            <h3 style={{ marginTop: "5%", color: "white" }}>
              Aliquam Commodo{" "}
            </h3>
            <div style={{ width: 300 }}>
              <PageText style={{ textAlign: "center" }}>
                Aliquam commodo diam a nibh dictum sagittis. Duis ultrices ex
                lectus. Aenean fringilla vehicula orci, sed eleifend lacus
                imperdiet id. Nam iaculis lacinia hendrerit.
              </PageText>
            </div>
          </div>
        </ProfileDivStyled>
        <Link
          to="/about/"
          style={{
            color: "white",
            fontSize: 21,
          }}
        >
          <h2 style={{ fontWeight: 100 }}>Learn More</h2>
        </Link>
      </BlueSectionStyled>
      <Footer />
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    allStrapiBlogs(sort: { order: DESC, fields: date }) {
      nodes {
        slug
        title
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        category
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
