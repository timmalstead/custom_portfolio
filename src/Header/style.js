import styled from "styled-components"

const Header = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 3.5em;
  display: grid;
  grid-template-columns: 1.25% min-content 1.25% min-content auto min-content 1.25%;
  grid-template-areas: ". graphic . name . icons .";
  align-items: center;
  border-bottom-width: 0.09em;
  border-bottom-style: solid;
  padding: 0;
  transition: padding 0.5s ease-out;

  @media (max-width: 800px) {
    height: 4.5em;
    grid-template-columns: 2% min-content 2% min-content auto min-content 2%;
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
`

const Name = styled.div`
  grid-area: name;
  display: flex;

  span {
    font-size: 1.75em;
    margin: 0.3em 0.3em 0.3em 0;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0.5em 0;

    span {
      font-size: 1.5em;
      margin: 0;
    }
  }
`
export { Header, Graphic, Name }
