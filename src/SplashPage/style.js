import styled from "styled-components"

const SplashHolder = styled.div`
  width: 100%;
  min-height: inherit;
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const ImageHolder = styled.div`
  width: 35%;
  height: 42em;
  padding: 3em 1em;
  display: inherit;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
    height: 11em;
  }
`

const NameHolder = styled.div`
  width: 70%;
  margin: 0 0 0.5em 0;
`

const Name = styled.span`
  font-size: 1.7em;
  margin: 0 0 0.5em 0;

  @media (max-width: 550px) {
    font-size: 5.25vw;
  }
`

const TypeEffect = styled(Name)`
  :after {
    content: "Full Stack Developer and UI Designer";
    animation: type 2s ease-in-out;
  }

  @keyframes type {
    3% {
      content: "F|";
    }

    6% {
      content: "Fu|";
    }

    9% {
      content: "Ful|";
    }

    12% {
      content: "Full|";
    }

    15% {
      content: "Full |";
    }

    18% {
      content: "Full S|";
    }

    21% {
      content: "Full St|";
    }

    24% {
      content: "Full Sta|";
    }

    27% {
      content: "Full Stac|";
    }

    30% {
      content: "Full Stack|";
    }

    33% {
      content: "Full Stack |";
    }

    36% {
      content: "Full Stack D|";
    }

    39% {
      content: "Full Stack De|";
    }

    42% {
      content: "Full Stack Dev|";
    }

    45% {
      content: "Full Stack Deve|";
    }

    48% {
      content: "Full Stack Devel|";
    }

    51% {
      content: "Full Stack Develo|";
    }

    54% {
      content: "Full Stack Develop|";
    }

    57% {
      content: "Full Stack Develope|";
    }

    60% {
      content: "Full Stack Developer|";
    }

    67% {
      content: "Full Stack Developer and|";
    }

    70% {
      content: "Full Stack Developer and U|";
    }

    73% {
      content: "Full Stack Developer and UI|";
    }

    76% {
      content: "Full Stack Developer and UI |";
    }

    79% {
      content: "Full Stack Developer and UI D|";
    }

    82% {
      content: "Full Stack Developer and UI De|";
    }

    85% {
      content: "Full Stack Developer and UI Des|";
    }

    88% {
      content: "Full Stack Developer and UI Desi|";
    }

    91% {
      content: "Full Stack Developer and UI Desig|";
    }

    94% {
      content: "Full Stack Developer and UI Design|";
    }

    97% {
      content: "Full Stack Developer and UI Designe|";
    }

    100% {
      content: "Full Stack Developer and UI Designer|";
    }
  }
`

export { SplashHolder, ImageHolder, NameHolder, Name, TypeEffect }
