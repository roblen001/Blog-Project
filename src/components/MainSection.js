import React from "react"
import Layout from "./Layout"
import styled from "styled-components"

const PageTitleStyled = styled.h1`
  text-align: center;
  color: #011627;
  font-weight: 100;
  font-size: 4.5rem;
  margin-top: 15vh;

  @media (max-width: 780px) {
    font-size: 2.5rem;
    margin-top: 30vh;
  }
  @media (max-width: 780px) {
    color: white;
  }
`
const BodyTextStyled = styled.p`
  font-size: 1.3rem;
  color: #011627;
  text-align: center;
  @media (max-width: 780px) {
    color: white;
  }
`
const CenterTextStyled = styled.div`
  margin: 0 auto;
  max-width: 500px;
`
const StlyedDiv = styled.div`
  @media (max-width: 780px) {
    background-color: rgba(66, 66, 78);
  }
`
const MainSection = ({ title, info }) => {
  return (
    <Layout>
      <StlyedDiv>
        <PageTitleStyled>{title}</PageTitleStyled>
        <CenterTextStyled>
          <BodyTextStyled>{info}</BodyTextStyled>
        </CenterTextStyled>
      </StlyedDiv>
    </Layout>
  )
}

export default MainSection
