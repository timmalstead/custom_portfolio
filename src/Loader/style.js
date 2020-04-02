import styled from "styled-components"

const Holder = styled.main`
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
      transform: rotate3d(0, 1, 0, 0);
    }
    20% {
      content: "T";
      transform: rotate3d(0, 1, 0, 72deg);
    }
    40% {
      content: "T";
      transform: rotate3d(0, 1, 0, 144deg);
    }
    60% {
      content: "M";
      transform: rotate3d(0, 1, 0, 216deg);
    }
    80% {
      content: "M";
      transform: rotate3d(0, 1, 0, 288deg);
    }
    100% {
      content: "M";
      transform: rotate3d(0, 1, 0, 360deg);
    }
  }
`

export { Holder }
