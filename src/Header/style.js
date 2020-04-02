import styled from "styled-components"

const Header = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  display: grid;
  grid-template-columns: 1.25% min-content 1.25% min-content auto min-content 1.25%;
  grid-template-areas: ". graphic . name . icons .";
  align-items: center;
  border-bottom-width: 0.09em;
  border-bottom-style: solid;

  @media (max-width: 800px) {
    grid-template-columns: 2% min-content 2% min-content auto min-content 2%;
  }
`

const Graphic = styled.div`
  grid-area: graphic;
  width: 30px;
  height: 30px;
  background-color: red;
`

const Name = styled.div`
  grid-area: name;
  display: flex;

  span {
    font-size: max(1.5em, 2vw);
    margin: 0.3em 0.3em 0.3em 0;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0.5em 0;

    span {
      margin: 0;
    }
  }
`
//will need to make icons more responsive and sizable for smaller screens
const Icons = styled.nav`
  grid-area: icons;
  width: 300px;
  height: 30px;
  background-color: blue;
`

export { Header, Graphic, Name, Icons }
