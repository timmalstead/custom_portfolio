import styled from "styled-components"

const AllProjectsHolder = styled.div`
  margin: 1.5em 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const SingleProjectHolder = styled.div`
  display: inherit;
  transition: all 0.25s linear;

  @media (max-width: 850px) {
    flex-direction: column !important;
  }
`

const ImageHolder = styled.div`
  width: 50%;
  height: 24em;
  overflow: hidden;
  display: flex;

  @media (max-width: 850px) {
    width: 100%;
  }

  @media (min-width: 2880px) {
    width: max-content;
    height: 34em;
  }
`

const Image = styled.img`
  width: 100%;
`

const InfoHolder = styled.div`
  padding: 0 4em;
  display: inherit;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;

  @media (max-width: 850px) {
    margin: 0 0 3em 0;
  }

  @media (min-width: 2000px) {
    font-size: 0.9vw;
  }
`

const Title = styled.h2`
  border-bottom-width: 0.05em;
  border-bottom-style: solid;

  a {
    text-decoration: none;
  }
`

const Role = styled.em`
  margin: 0 0 0.25em 0;
`

const Description = styled.p`
  font-family: "EB Garamond", serif;
`

export {
  AllProjectsHolder,
  SingleProjectHolder,
  ImageHolder,
  Image,
  InfoHolder,
  Title,
  Role,
  Description,
}
