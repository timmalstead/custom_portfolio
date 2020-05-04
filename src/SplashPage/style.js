import styled from "styled-components"

const SplashHolder = styled.div`
  width: 100%;
  min-height: inherit;
  display: flex;
`

const ImageHolder = styled.div`
  width: 35%;
  height: 42em;
  padding: 3em;
  display: inherit;
`

const TypeEffect = styled.span`
  :after {
    content: "Full Stack Developer and UI Designer";
    animation: type 0.5s ease-in-out;
  }

  @keyframes type {
    0% {
      content: "Tim";
    }
    100% {
      content: "is great";
    }
  }
`

const Graphic = styled.div`
  width: 5em;
  height: 5em;
`

export { SplashHolder, Graphic, ImageHolder, TypeEffect }
