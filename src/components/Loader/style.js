import styled from "styled-components"

const Animation = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 4em;
    height: 4em;
    animation: twirl 2s infinite;
  }

  @media (max-width: 850px) {
    svg {
      width: 10em;
      height: 10em;
    }
  }

  @media (min-width: 1500px) {
    svg {
      width: 6em;
      height: 6em;
    }
  }

  @media (min-width: 2500px) {
    svg {
      width: 12em;
      height: 12em;
    }
  }

  @keyframes twirl {
    0% {
      transform: rotate3d(0, 1, 0, -270deg) skewX(45deg);
    }
    25% {
      transform: rotate3d(0, 1, 0, 90deg) skewX(30deg);
    }
    50% {
      transform: rotate3d(0, 1, 0, 270deg) skewX(15deg);
    }
    100% {
      transform: rotate3d(0, 1, 0, 360deg) skewX(0);
    }
  }
`

export default Animation
