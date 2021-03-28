import React from "react"
import Layout from "../components/Layout"
import MainSection from "../components/MainSection"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import blogsImage from "../images/blogCover.png"
import BlogBigCard from "../components/BlogBigCards"
import { graphql } from "gatsby"
import Footer from "../components/Footer"

const GreySectionStyled = styled.section`
  height: 200vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgba(66, 66, 78, 0.47);
`

const MainSectionStyled = styled.section`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-image: url(${blogsImage});
`

const Blogs = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <>
      <MainSectionStyled>
        <MainSection title={"Blogs and News"} />
      </MainSectionStyled>
      <GreySectionStyled>
        <BlogBigCard
          title={blogs[0].title}
          category={blogs[0].category}
          date={blogs[0].date}
          id={1}
          slug={blogs[0].slug}
        />
        <BlogBigCard
          title={blogs[1].title}
          category={blogs[1].category}
          date={blogs[1].date}
          id={2}
          slug={blogs[1].slug}
          // image={"../images/ferrari.png"}
        />
        <BlogBigCard
          title={blogs[2].title}
          category={blogs[2].category}
          date={blogs[2].date}
          slug={blogs[2].slug}
          // image={"../images/win.png"}
          id={3}
        />
      </GreySectionStyled>
      <Footer />
    </>
  )
}

export default Blogs

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
