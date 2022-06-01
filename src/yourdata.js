// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import jsIcon from "./images/javascript.svg"
import cssBootstrapIcon from "./images/cssbootstrap.svg"
import nodeIcon from "./images/node.svg"
import pythonIcon from "./images/python.svg"
import reactIcon from "./images/react.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import expressIcon from "./images/express.svg"
import mongoIcon from "./images/mongo.svg"
import djangoIcon from "./images/django.svg"
import postgresqlIcon from "./images/postgresql.svg"
import gitIcon from "./images/git.svg"
import phpIcon from "./images/php.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
// import codepenIcon from "./images/codepen.svg"
// import dribbbleIcon from "./images/dribbble.svg"
// import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Mitch",
  headerTagline: [
    //Line 1 For Header
    "Software Engineer",
    // //Line 2 For Header
    // "products, brands,",
    // //Line 3 For Header
    // "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "Full-Stack Engineer with a background in the Financial Services industry. I pride myself on effective communication and my ability to learn new technologies.",

  //Contact Email
  contactEmail: "mitchgemma@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Crypto Tracker", //Project Title - Add Your Project Title Here
      para: "A full CRUD App made as a team of 2 that allows a user to keep track of their crypto portfolios and stay up-to-date with crypto prices and news. Uses MongoDB/Mongoose, Express, React & Node.js. Styled with Bootstrap.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: "https://i.imgur.com/BpGUHRF.png",
      //Project URL - Add Your Project Url Here
      url: "https://cryptotrackrr.herokuapp.com/",
      codeUrl: "https://github.com/mitchgemma/CryptoTracker-Client",
    },
    {
      title: "Caddy-Shaq", //Project Title - Add Your Project Title Here
      para: "A full CRUD app that allows a user to create their favorite golf courses and track how they shot during their recent rounds. Uses MongoDB/Mongoose, Express, Liquid & Node.js. Styled with Bootstrap.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: "https://i.imgur.com/Gql9mih.png",
      //Project URL - Add Your Project Url Here
      url: "https://caddyshaq.herokuapp.com/",
      codeUrl: "https://github.com/mitchgemma/Caddy-Shaq",
    },
    {
      title: "Connect Four", //Project Title - Add Your Project Title Here
      para: "A front end web game allowing 2 users to play a game of Connect Four. Uses HTML, CSS, and JavaScript.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: "https://i.imgur.com/1dSYUqw.png",
      //Project URL - Add Your Project Url Here
      url: "https://mitchgemma.github.io/Connect-4/",
      codeUrl: "https://github.com/mitchgemma/Connect-4",
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
    "I am pivoting to Software Engineering after working various internships and spending about a year in financial services. Software engineering has opened up a world of endless learning opportunities for me and has allowed me to combine my technical and problem-solving skills with my creativity.",
  aboutParaTwo:
    "Working in Financial Services allowed me to hone my interpersonal and soft skills, and I was able to learn how to break-down complex financial solutions into simple explanations for the client. It also enabled me to continue building my problem-solving skills, each phone call being a new problem needing a new solution. I am a collaborative worker and am passionate about helping others and love seeing others succeed.",
  aboutParaThree:
    "Aside from work, I enjoy all things that involve getting outside and being active. During the colder months I love to get outside and snowboard, and during the warmer months I love getting on the trails and hiking, or getting on the links to play some golf.",
  aboutImage: "https://i.imgur.com/p7kAfaU.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para: "HTML5",
    },
    {
      img: cssIcon,
      para: "CSS",
    },
    {
      img: jsIcon,
      para: "JavaScript",
    },
    {
      img: cssBootstrapIcon,
      para: "Bootstrap",
    },
    {
      img: reactIcon,
      para: "React",
    },
    {
      img: nodeIcon,
      para: "Node.js",
    },
    {
      img: expressIcon,
      para: "Express",
    },
    {
      img: mongoIcon,
      para: "MongoDB",
    },
    {
      img: pythonIcon,
      para: "Python",
    },
    {
      img: djangoIcon,
      para: "Django",
    },
    {
      img: postgresqlIcon,
      para: "PostgreSQL",
    },
    {
      img: gitIcon,
      para: "Git",
    },
    {
      img: phpIcon,
      para: "PHP",
    },
    {
      img: codeIcon,
      para: "Object Oriented Programming, MVC Pattern, Rest APIs",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's connect",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/mitchgemma" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/mitchell-gemma",
    },
    // {
    //   img: dribbbleIcon,
    //   url: "https://dribbble.com/chetanverma",
    // },
    // {
    //   img: instagramIcon,
    //   url: "https://www.instagram.com/",
    // },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
