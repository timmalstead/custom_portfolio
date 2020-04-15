import styled from "styled-components"

const Header = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 3.5em;
  display: grid;
  grid-template-columns: 3% min-content 1% min-content auto min-content 3% min-content 3%;
  grid-template-areas: ". graphic . name . icons . themes .";
  align-items: center;
  border-bottom-width: 0.09em;
  border-bottom-style: solid;
  padding: 0;
  transition: padding 0.5s ease-out;

  @media (max-width: 850px) {
    height: 4.5em;
    grid-template-areas: ". themes . name . icons .";
    grid-template-columns: 4% min-content auto min-content auto min-content 4%;
  }
`

const Graphic = styled.div`
  grid-area: graphic;
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;

  svg {
    transform: scale(1);
    transition: transform 0.5s;
  }

  svg:hover {
    transform: scale(1.2);
  }
  @media (max-width: 850px) {
    display: none;
  }
`

const Name = styled.div`
  grid-area: name;
  display: flex;
  text-decoration: none;

  span {
    font-size: 1.75em;
    margin: 0.3em 0.3em 0.3em 0;
  }

  @media (max-width: 850px) {
    padding: 0.5em 0;

    span {
      margin: 0 0.2em 0 0;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;

    span {
      font-size: min(6vw, 1.5em);
    }
  }
`

export { Header, Graphic, Name }
