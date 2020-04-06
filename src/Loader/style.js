import styled from "styled-components"

const Animation = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 5em;

  ::after {
    content: " ";
    animation: twirl 2s infinite;
  }
  @keyframes twirl {
    0% {
      content: "T";
      transform: rotate3d(0, 1, 0, -270deg);
    }
    25% {
      content: "T";
      transform: rotate3d(0, 1, 0, 90deg);
    }
    50% {
      content: "M";
      transform: rotate3d(0, 1, 0, 270deg);
    }
    100% {
      content: "M";
      transform: rotate3d(0, 1, 0, 360deg);
    }
  }
`

export default Animation
