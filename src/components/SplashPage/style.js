import styled from "styled-components"

const SplashHolder = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const ImageHolder = styled.div`
  width: 35%;
  height: 85vh;
  padding: 2em 1em 1em 1em;
  display: inherit;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 100%;
    height: 11em;
  }

  @media (max-width: 550px) {
    height: 9em;
  }

  @media (min-width: 2000px) {
    background-size: cover;
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

  @media (min-width: 1500px) {
    font-size: 2vw;
  }

  @media (min-width: 2500px) {
    font-size: 2.1vw;
  }
`

const TypeEffect = styled(Name)`
  :after {
    content: "Full Stack Developer and Designer";
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
      content: "Full Stack Developer a|";
    }

    70% {
      content: "Full Stack Developer an|";
    }

    73% {
      content: "Full Stack Developer and|";
    }

    76% {
      content: "Full Stack Developer and |";
    }

    79% {
      content: "Full Stack Developer and D|";
    }

    82% {
      content: "Full Stack Developer and De|";
    }

    85% {
      content: "Full Stack Developer and Des|";
    }

    88% {
      content: "Full Stack Developer and Desi|";
    }

    91% {
      content: "Full Stack Developer and Desig|";
    }

    94% {
      content: "Full Stack Developer and Design|";
    }

    97% {
      content: "Full Stack Developer and Designe|";
    }

    100% {
      content: "Full Stack Developer and Designer|";
    }
  }
`

const MadeWithLove = styled.span`
  font-family: "EB Garamond", serif;
  align-self: flex-end;

  @media (max-width: 700px) {
    visibility: hidden;
  }

  @media (min-width: 1500px) {
    font-size: 1.1vw;
  }
`

const ProjectLinksHolder = styled.div`
  width: 65%;
  /* height: 42em; */
  display: inherit;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    height: 30em;
  }

  @media (max-width: 550px) {
    height: 20em;
  }
`

const RouteHolder = styled.div`
  width: 95%;
  display: inherit;
  align-items: center;
  font-size: Min(8em, 9vw);

  @media (max-width: 900px) {
    font-size: 15vw;
  }

  @media (max-width: 550px) {
    font-size: 18vw;
  }

  @media (min-width: 1500px) {
    font-size: 9vw;
  }

  a {
    text-decoration: none;
    transition: border-bottom 0.25s linear;
  }
`

const EffectHolder = styled.div`
  display: inherit;
  justify-content: space-evenly;
  flex: 1;
`

const ProjectImg = styled.div`
  position: relative;
  width: 3em;
  height: 1.62em;
  background-size: 100%;
  transition: left 0.5s linear;

  @media (max-width: 900px) {
    display: none;
  }
`

const EffectSvg = styled.svg`
  position: relative;
  height: 1em;

  @media (max-width: 900px) {
    display: none;
  }
`

const ProfileImg = styled.img`
  position: relative;
  height: 1.5em;
  border-radius: 50%;
  transition: left 0.5s linear;

  @media (max-width: 900px) {
    display: none;
  }
`

export {
  SplashHolder,
  ImageHolder,
  NameHolder,
  Name,
  TypeEffect,
  MadeWithLove,
  ProjectLinksHolder,
  RouteHolder,
  EffectHolder,
  ProjectImg,
  EffectSvg,
  ProfileImg,
}
