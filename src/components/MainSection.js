import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const PageTitleStyled = styled.h1`
  text-align: center;
  color: #011627;
  font-weight: 100;
  font-size: 4.5rem;
  margin-top: 15vh;
`
const BodyTextStyled = styled.p`
  font-size: 1.3rem;
  color: #011627;
  text-align: center;
`
const CenterTextStyled = styled.div`
  margin: 0 auto;
  max-width: 500px;
`

const MainSection = ({ title, info }) => {
  return (
    <Layout>
      <PageTitleStyled>{title}</PageTitleStyled>
      <CenterTextStyled>
        <BodyTextStyled>{info}</BodyTextStyled>
      </CenterTextStyled>
    </Layout>
  )
}

export default MainSection
