import styled from "styled-components"

const AboutHolder = styled.div`
  margin: 1.5em 0 0 0;
  width: 100%;
  display: grid;
  grid-template-columns: auto min-content auto 45% auto;
  grid-template-rows: 25% max-content auto;
  grid-template-areas:
    ". . . . ."
    ". profile . article ."
    ". . . . .";

  @media (max-width: 950px) {
    grid-template-rows: 15% max-content auto;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const Profile = styled.img`
  grid-area: profile;
  width: 25em;
  border-radius: 50%;

  :active {
    animation: spin 0.5s ease-in-out;
  }

  @media (max-width: 800px) {
    width: 40vw;
    margin-top: 2em;
  }

  @media (max-width: 550px) {
    width: 14em;
  }
`

const Blurb = styled.article`
  padding: 0 2em;
  grid-area: article;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2em;
    margin-bottom: 0.2em;
  }

  em {
    font-size: 1.2em;
  }

  span {
    width: 75%;
    border-top-width: 0.09em;
    border-top-style: solid;
  }

  p {
    margin: 0.5em 0 0.25em 0;
    font-family: "EB Garamond", serif;
    font-size: 1.1em;
  }

  @media (max-width: 800px) {
    h1,
    p {
      text-align: center;
    }

    span {
      margin: 0 auto;
    }
  }
`

export { AboutHolder, Profile, Blurb }
