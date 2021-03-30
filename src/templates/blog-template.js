import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import MainSection from "../components/MainSection"
import SEO from "../components/seo"
import styled from "styled-components"
import HomeImage from "../images/contactCover.png"
import Footer from "../components/Footer"
import ReactMarkdown from "react-markdown"

const MainSectionStyled = styled.section`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-image: url(${props => props.image});

  @media (max-width: 780px) {
    /* background-image: none; */
    background-color: rgba(66, 66, 78, 0.47);
    padding-top: 18vh;
  }
`
const GreySectionStyled = styled.section`
  height: 2000px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-color: rgba(66, 66, 78, 0.47);
  display: flex;
  justify-content: center;
  padding: "10%";

  @media (max-width: 1640px) {
    /* background-image: none; */
    height: 2500px;
  }

  @media (max-width: 817px) {
    height: 3000px;
  }
`
const StyledDiv = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  width: 40%;
  background-color: rgba(66, 66, 78);
  padding: 3%;

  @media (max-width: 1200px) {
    width: 80vw;
    padding: 2%;
  }

  @media (max-width: 400px) {
    width: 100vw;
    padding: 2px;
  }
`

const PageText = styled.p`
  font-size: 1.3rem;
  color: white;
  margin-top: 1.3rem;
  font-weight: 100;

  ul li {
    background: grey;
    color: var(--clr-grey-5);
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    text-transform: uppercase;
  }

  ul {
    color: rgba(66, 66, 78);
    margin-top: 2rem;
    display: inline-block;
  }

  @media (max-width: 1200px) {
    text-align: center;
  }
`

export const ComponentName = ({ data }) => {
  const { content } = data.blog

  return (
    <>
      <MainSectionStyled image={HomeImage}>
        <MainSection title={""} />
      </MainSectionStyled>

      <GreySectionStyled>
        <StyledDiv>
          <PageText>
            <ReactMarkdown>{content}</ReactMarkdown>
          </PageText>
        </StyledDiv>
      </GreySectionStyled>
      <Footer />
    </>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`

export default ComponentName
