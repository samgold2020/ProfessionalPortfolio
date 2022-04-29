// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import typescript from "./images/typescript.svg"
import aws from "./images/aws.svg"
import bootstrap from "./images/bootstrap.svg"
import git from "./images/git.svg"
import redux from "./images/redux.svg"
import graphql from "./images/graphql.svg"
import steak from "./images/steak.png"
import spotify from "./images/spotify.png"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Sam",
  headerTagline: [
    //Line 1 For Header
    "Frontend Developer",
  ],
  //   Header Paragraph
  headerParagraph:
    "I am a frontend developer with proven experience building web and mobile applications with React and React Native.",

  //Contact Email
  // contactEmail: "hello@chetanverma.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Spotify Tops", //Project Title - Add Your Project Title Here
      para:
        "If you are sick of waiting for your year in review this is the site for you! Discover your current most beloved songs and artists according to your most recent listening history.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: spotify,
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "921 Steak", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: steak,
      //Project URL - Add Your Project Url Here
      url: "https://www.921steak.com/",
    },
    {
      title: "Project Three", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: spotify,
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Since graduating from General Assembly's fullstack bootcamp in 2021 I have been earning my stripes as a Front End Software Engineer at Red Foundry, a consultancy where we pride ourselves in exceeding the expectations of our clients. Currently, I am studying to earn the Certified Developer Associate Certification so as to be a go-to resource for implimenting AWS solution, something I assist with currently in my day to day role. ",
  aboutParaTwo:
    "In my free time you can find me jamming out on the drumset, biking the lakefront path, or grilling out in the backyard with friends and family.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
    },
    {
      img: cssIcon,
    },
    {
      img: jsIcon,
    },
    {
      img: typescript,
    },
    {
      img: reactIcon,
    },
    {
      img: aws,
    },
    {
      img: bootstrap,
    },
    {
      img: git,
    },
    {
      img: redux,
    },
    {
      img: graphql,
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading:
    "Let's create your next experience together, chat with me on LinkedIn!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/samgold2020" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/sgoldstein312/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
