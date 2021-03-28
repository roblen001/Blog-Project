import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"
import contactCover from "../images/contactCover.png"
import MainSection from "../components/MainSection"

const MainSectionStyled = styled.section`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-image: url(${contactCover});
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

const Contact = () => {
  return (
    <>
      <MainSectionStyled>
        <MainSection title={"Contact Us"} />
      </MainSectionStyled>
      <SEO title="Contact" description="welcome to the contact page" />
      <GreySectionStyled>
        <article
          style={{
            backgroundColor: "#43424E",
            width: "50%",
            height: "50%",
          }}
        >
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
              <input
                type="text"
                placeholder="Name"
                name="name"
                style={{ width: "50%", height: "8%", marginTop: "2%" }}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                style={{ width: "50%", height: "8%", marginTop: "2%" }}
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                style={{ width: "50%", marginTop: "2%" }}
              />
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
        </article>
      </GreySectionStyled>
    </>
  )
}

export default Contact
