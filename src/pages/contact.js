import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"
import contactCover from "../images/contactCover.png"
import MainSection from "../components/MainSection"
import Footer from "../components/Footer"

const MainSectionStyled = styled.section`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-image: url(${contactCover});

  @media (max-width: 780px) {
    /* background-image: none; */
    background-color: rgba(66, 66, 78, 0.47);
    padding-top: 18vh;
  }
`
const GreySectionStyled = styled.section`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-color: rgba(66, 66, 78, 0.47);
  display: flex;
  justify-content: center;
  align-items: center;
`
const StlyedArticle = styled.article`
  background-color: #43424e;
  width: 50%;
  height: 50%;
  @media (max-width: 780px) {
    width: 90%;
  }
`
const StyledInput = styled.input`
  width: 50%;
  height: 8%;
  margin-top: 2%;
  @media (max-width: 780px) {
    width: 90%;
  }
`

const StyledTxtArea = styled.input`
  width: 50%;
  margin-top: 2%;
  @media (max-width: 780px) {
    width: 90%;
    height: 50%;
  }
`
const Contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <MainSectionStyled>
        <MainSection title={"Contact Us"} />
      </MainSectionStyled>
      <SEO title="Contact" description="welcome to the contact page" />
      <GreySectionStyled>
        <StlyedArticle>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StyledInput type="text" placeholder="Name" name="name" />
              <StyledInput type="email" placeholder="Email" name="email" />
              <StyledTxtArea name="message" rows="5" placeholder="message" />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                height: "10%",
                backgroundColor: "#5D737E",
              }}
            >
              submit here
            </button>
          </form>
        </StlyedArticle>
      </GreySectionStyled>
      <Footer />
    </>
  )
}

export default Contact
