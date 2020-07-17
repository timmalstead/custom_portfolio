import fola from "./fola.png"
import folaMobile from "./folaMobile.png"
import FPCHackathon from "./FPCHackathon.png"
import homeUniteUs from "./homeUniteUs.png"
import portfolio from "./portfolio.png"
import sirvy from "./sirvy.png"
import columnGenerator from "./columnGenerator.png"
import columnGeneratorMobile from "./columnGeneratorMobile.png"
import bagOfHolding from "./bagOfHolding.png"
import bulletinBored from "./bulletinBored.png"
import bulletinBoredMobile from "./bulletinBoredMobile.png"
import nightIn from "./nightIn.png"
import flashLights from "./flashLights.png"

const folioProjects = [
  {
    title: "Food Oasis Los Angeles",
    fullImage: fola,
    mobileImage: folaMobile,
    link: "https://foodoasis.la/",
    github: "https://github.com/hackforla/food-oasis",
    role: "Front End Developer",
    description:
      "Find Food Pantries, Food Banks and Meal Programs in Los Angeles County. Food For All!",
    center: true,
  },
  {
    title: "LAFPC Dashboard",
    fullImage: FPCHackathon,
    mobileImage: false,
    link: "https://lafpc-hackathon-dashboard.herokuapp.com/",
    github: "https://github.com/timmalstead/LAFPC_Hackathon_Final_Deployed",
    role: "Full Stack Developer",
    description:
      "Winner of first prize and audience favorite at the Los Angeles Food Policy Council x General Assembly hackathon, LAFPC dashboard is an easy way to view, manage and visualize facts about food policy in Los Angeles County.",
    center: false,
  },
  {
    title: "Home Unite Us",
    fullImage: homeUniteUs,
    mobileImage: false,
    link: "https://lacommunity.site/hosthome/",
    github: "https://github.com/hackforla/HomeUniteUs",
    role: "Lead Front End Developer",
    description:
      "A web application that matches homeless and at-risk youth with short term host housing and job training to help transition into a more stable life. Created with the team at Hack for LA, it feels great to work on something that makes a real difference.",
    center: false,
  },
  {
    title: "Portfolio Site",
    fullImage: portfolio,
    mobileImage: "",
    link: "https://timmalstead.com/",
    github: "https://github.com/timmalstead/custom_portfolio",
    role: "Sole Designer and Developer",
    description:
      "My newest portfolio and the very site you are on right now. Some of the most concise React I've written to date.",
    center: true,
  },
  {
    title: "Sirvy",
    fullImage: sirvy,
    mobileImage: false,
    link: "https://sirvy.herokuapp.com/",
    github: "https://github.com/timmalstead/sirvy",
    role: "Full Stack Developer & UI Designer",
    description:
      "Sirvy allows users to send surveys via SMS, and then visualize the data in graph form.",
    center: false,
  },
  {
    title: "The Thomas Friedman Column Generator",
    fullImage: columnGenerator,
    mobileImage: columnGeneratorMobile,
    link: "https://veryimportantcolumngenerator.herokuapp.com/",
    github: "https://github.com/timmalstead/Very_Important_Column_Generator",
    role: "Full Stack Developer & Designer",
    description:
      "A Madlib style random word generator in the style of New York Times columnist Thomas Friedman.",
    center: false,
  },
  {
    title: "Bag of Holding",
    fullImage: bagOfHolding,
    mobileImage: false,
    link: "https://timmalstead.github.io/bagofholding/",
    github: "https://github.com/timmalstead/bagofholding",
    role: "Front End Developer, Writer & Illustrator",
    description:
      "A text based adventure game played in the browser console. A long term project, first level playable now!",
    center: false,
  },
  {
    title: "Bulletin Bored",
    fullImage: bulletinBored,
    mobileImage: bulletinBoredMobile,
    link: "https://bulletinbored.herokuapp.com/",
    github: "https://github.com/timmalstead/bulletinbored",
    role: "Full Stack Developer & UI Designer",
    description:
      "A note taking app created to further my understanding of React Hooks and GraphQL",
    center: false,
  },
  {
    title: "Night In",
    fullImage: nightIn,
    mobileImage: false,
    link: "https://night-in.herokuapp.com/",
    github: "https://github.com/timmalstead/Night_in_front_end",
    role: "Lead Front End Developer & UI Designer",
    description:
      "The perfect dinner and a movie, every time. Select recipes and public domain movies based on user preferences.",
    center: true,
  },
  {
    title: "Flash.Lights.",
    fullImage: flashLights,
    mobileImage: false,
    link: "https://timmalstead.github.io/flash_lights/",
    github: "https://github.com/timmalstead/flash_lights",
    role: "Front End Developer & Designer",
    description:
      "A fun and colorful browser based game that tests your ability to remember sequences of colors.",
    center: true,
  },
]

export default folioProjects
