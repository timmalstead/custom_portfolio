import styled from "styled-components"

const AllProjectsHolder = styled.div`
  margin: 1.5em 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const SingleProjectHolder = styled.div`
  display: inherit;
`

const ImageHolder = styled.div`
  width: 52%;
  overflow: hidden;

  div {
    display: flex;
    justify-content: center;
  }
`

const Image = styled.img`
  transform: scale(1);
  transition: transform 0.5s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`

const InfoHolder = styled.div`
  padding: 0 4em;
  display: inherit;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;
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
