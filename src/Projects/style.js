import styled from "styled-components"

const AllProjectsHolder = styled.div`
  margin: 1.5em 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const SingleProjectHolder = styled.div`
  display: inherit;
  margin: 0;
  transition: margin 0.25s linear;

  :hover {
    margin: 2em 0;
  }

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
`

const Image = styled.img`
  width: 100%;
  /* transform: scale(1);
  transition: transform 0.5s ease-in-out;

  :hover {
    transform: scale(1.1);
  } */
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
