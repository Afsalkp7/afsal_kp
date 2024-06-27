/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Afsal KP",
  title: "Hi all, I'm Afsal",
  subTitle: emoji(
    "A passionate Full Stack Web Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Expressjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1u_-ZRIIFR9FVysBK6hSWYaWPWAbMGJWw/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Afsalkp7",
  linkedin: "www.linkedin.com/in/afsal-kp/",
  gmail: "afsalkpmanu31@gmail.com",
  facebook: "https://www.facebook.com/afsal.manu.370/",
  medium: "https://medium.com/@afsalkpmanu31",
  stackoverflow: "https://stackoverflow.com/users/22361561/afsal-kp",
  instagram: "https://www.instagram.com/afz_kp/",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Nginx"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  // softwareSkills: [
  //   {
  //     skillName: "html-5",
  //     fontAwesomeClassname: "fab fa-html5"
  //   },
  //   {
  //     skillName: "css3",
  //     fontAwesomeClassname: "fab fa-css3-alt"
  //   },
  //   {
  //     skillName: "sass",
  //     fontAwesomeClassname: "fab fa-sass"
  //   },
  //   {
  //     skillName: "JavaScript",
  //     fontAwesomeClassname: "fab fa-js"
  //   },
  //   {
  //     skillName: "reactjs",
  //     fontAwesomeClassname: "fab fa-react"
  //   },
  //   {
  //     skillName: "nodejs",
  //     fontAwesomeClassname: "fab fa-node"
  //   },
  //   {
  //     skillName: "swift",
  //     fontAwesomeClassname: "fab fa-swift"
  //   },
  //   {
  //     skillName: "npm",
  //     fontAwesomeClassname: "fab fa-npm"
  //   },
  //   {
  //     skillName: "sql-database",
  //     fontAwesomeClassname: "fas fa-database"
  //   },
  //   {
  //     skillName: "aws",
  //     fontAwesomeClassname: "fab fa-aws"
  //   },
  //   {
  //     skillName: "firebase",
  //     fontAwesomeClassname: "fas fa-fire"
  //   },
  //   {
  //     skillName: "python",
  //     fontAwesomeClassname: "fab fa-python"
  //   },
  //   {
  //     skillName: "docker",
  //     fontAwesomeClassname: "fab fa-docker"
  //   }
  // ],
   softwareSkills : [
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "expressjs",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mvc",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "restapi",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "redux",
      fontAwesomeClassname: "fab fa-redux"
    },
    {
      skillName: "jquery",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "tailwind",
      fontAwesomeClassname: "fab fa-css3"
    },
    {
      skillName: "materialui",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "nginx",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "cloudinary",
      fontAwesomeClassname: "fas fa-cloud-upload-alt"
    },
    {
      skillName: "vercel",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "postman",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "jwt",
      fontAwesomeClassname: "fas fa-key"
    },
    {
      skillName: "googleoauth2",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "mediaqueries",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "dom",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "ejs",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "hbs",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "apiintegrations",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "twilio",
      fontAwesomeClassname: "fas fa-sms"
    },
    {
      skillName: "nodemailer",
      fontAwesomeClassname: "fas fa-envelope"
    },
    {
      skillName: "razorpay",
      fontAwesomeClassname: "fas fa-credit-card"
    },
    {
      skillName: "cropperjs",
      fontAwesomeClassname: "fas fa-crop"
    },
    {
      skillName: "zoomjs",
      fontAwesomeClassname: "fas fa-search-plus"
    },
    {
      skillName: "oauth2",
      fontAwesomeClassname: "fas fa-lock"
    },
    {
      skillName: "ec2",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "route53",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "nodemon",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "morgan",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "passport",
      fontAwesomeClassname: "fas fa-passport"
    },
    {
      skillName: "toastify",
      fontAwesomeClassname: "fas fa-bell"
    },
    {
      skillName: "sweetalert",
      fontAwesomeClassname: "fas fa-exclamation-triangle"
    },
    {
      skillName: "pm2",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "datefns",
      fontAwesomeClassname: "fas fa-calendar"
    },
    {
      skillName: "darkmodejs",
      fontAwesomeClassname: "fas fa-moon"
    },
    {
      skillName: "chartjs",
      fontAwesomeClassname: "fas fa-chart-pie"
    }
  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Calicut University",
      logo: require("./assets/images/calicutLogo.jpg"),
      subHeader: "Bachelor of commerse",
      duration: "july 2018 - march 2021",
      desc: "Speciallized in co-operation and e commerse management",
      descBullets: [
        
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "MERN Stack Developer",
      company: "Self Stack",
      companylogo: require("./assets/images/self_stack_logo.jpeg"),
      date: "June 2023 – Present",
      desc: "Contributed as a MERN Stack Intern at Self Stack in Calicut, actively participating in the development and improvement of web applications.",
      descBullets: [
        "Applied skills in MongoDB, Express.js, React, and Node.js within a collaborative team environment",
        "Involved in various aspects, including feature implementation and testing, to ensure the delivery of effective and reliable solutions"
      ]
    },    
    {
      role: "Python Full Stack Developer",
      company: "Techolas Technologies",
      companylogo: require("./assets/images/techolas_technologies_logo.png"),
      date: "Previous date – End date",
      desc: "Contributed as a Python Full Stack Developer at Techolas Technologies in Calicut, focusing on building and maintaining web applications using Django.",
      descBullets: [
        "Developed and maintained scalable web applications using Django framework",
        "Collaborated with cross-functional teams to define, design, and ship new features",
        "Ensured the performance, quality, and responsiveness of applications",
        "Implemented RESTful APIs and integrated them with frontend components",
        "Optimized applications for maximum speed and scalability"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some projects that are described in my resume",
  projects: [
    {
      image: require("./assets/images/outstockFurnitureLogo.png"),
      projectName: "Outstock Furniture",
      projectDesc: "A furniture e-commerce website using Node.js and MongoDB. Features secure registration, login, interactive product filtering, and intuitive cart and address management. Integrated Razorpay for smooth and secure transactions.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://outstockfurniture.world/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/Afsalkp7/out_stock/tree/main"
        }
      ]
    },
    {
      image: require("./assets/images/taskTrackerLogo.png"),
      projectName: "Task Tracker",
      projectDesc: "A web app built with Node.js, Express, MongoDB, and React for managing tasks. Hosted on Vercel.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://task-tracker-ui.vercel.app/"
        },
        {
          name: "GitHub Repo (Frontend)",
          url: "https://github.com/Afsalkp7/task-tracker-ui"
        },
        {
          name: "GitHub Repo (Backend)",
          url: "https://github.com/Afsalkp7/task-tracker/tree/main"
        }
      ]
    },
    {
      image: require("./assets/images/instaQRLogo.png"),
      projectName: "Insta-QR",
      projectDesc: "Full-stack application enabling Instagram access through QR code generation. Backend built with Node.js and Express, frontend developed in React.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://instagram-qr-code-generator.vercel.app/"
        },
        {
          name: "GitHub Repo (Frontend)",
          url: "https://github.com/Afsalkp7/qr-code-generator"
        },
        {
          name: "GitHub Repo (Backend)",
          url: "https://github.com/Afsalkp7/instagram-qr-backend/tree/main"
        }
      ]
    },
    {
      image: require("./assets/images/eventCalendarLogo.jpg"),
      projectName: "Event Calendar",
      projectDesc: "React app with react-big-calendar for event management. Features for adding, editing, and deleting events.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://react-calendar-henna.vercel.app/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/Afsalkp7/react-calendar"
        }
      ]
    },
    {
      image: require("./assets/images/breezeWeatherLogo.png"),
      projectName: "Breeze Weather",
      projectDesc: "Mobile-focused weather application using React and RapidAPI for real-time weather data retrieval.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://breeze-rouge.vercel.app/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/Afsalkp7/Breeze"
        }
      ]
    },
    {
      image: require("./assets/images/foodDeliveryAppLogo.png"),
      projectName: "Food Delivery App",
      projectDesc: "React-based food delivery app with shopping cart feature using Redux for state management. Integrated Swiggy live API.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Afsalkp7/food-delivery-app-react"
        }
      ]
    },
    {
      image: require("./assets/images/studentDataCollectionLogo.jpg"),
      projectName: "Student Data Collection",
      projectDesc: "Node.js and REST API app for teachers to manage student details.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Afsalkp7/CRUD_NODE"
        }
      ]
    },
    {
      image: require("./assets/images/userManagementLogo.png"),
      projectName: "User Management",
      projectDesc: "User management application with registration and login page using Node.js, Express, and MongoDB.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Afsalkp7/Login_mongo"
        }
      ]
    },
    {
      image: require("./assets/images/budgetCalculatorLogo.webp"),
      projectName: "Budget Calculator",
      projectDesc: "Budget calculator to add income and expenses, displaying data in table and pie chart using JavaScript and Chart.js.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Afsalkp7/budget_calculator"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Upcoming Projects ⚡⚡"),
  subtitle: "Projects under processing",

  achievementsCards: [
    {
      title: "Loompanics",
      subtitle:
        "Loompanics is an online bookstore and library management system. It offers memberships for differently-abled individuals based on their UDID number. Built with Node.js, Express.js, and React.",
      image: require("./assets/images/loompanicsLogo.jpg"),
      imageAlt: "Loompanics Logo",
      footerLink: [
        {
          name: "Figma design",
          url: "https://www.figma.com/design/3zjYYjqc007U0RXAhJNOH3/Loompanics?node-id=72-1152&t=9eeU6gKwTUWcROXM-1"
        },
        {
          name: "Database design",
          url: "https://drive.google.com/file/d/1TLGH2dLPGvYOKzPipDZIJ6Op1ZOSuNMa/view?usp=sharing"
        }
      ]
    },
    {
      title: "AlgoMatch",
      subtitle:
        "AlgoMatch is a job-seeking platform with roles for admin, organization, recruiter, and candidate. It is built with Node.js, Express, React, and Flutter for the mobile app.",
      image: require("./assets/images/algomatchLogo.jpg"),
      imageAlt: "AlgoMatch Logo",
      footerLink: [
        {
          name: "Figma Design",
          url: "https://www.figma.com/design/MvjOjFKB0ag2Mdweuy8cUY/AlgoMatch?node-id=0-1&t=dXgeYgc4cx7HbKME-1"
        },
        {
          name: "Database design",
          url: "https://drive.google.com/file/d/1Uh7JHsQf3oW_66xpI1Umc03VTSECtaf4/view?usp=sharing"
        }
      ]
    },
    {
      title: "fruiteee",
      subtitle:
        "fruiteee is an online store for fruits and vegetables. It is built with Node.js, Express, React, and Redux.",
      image: require("./assets/images/fruiteeeLogo.png"),
      imageAlt: "fruiteee Logo",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Afsalkp7/Fruiteee-frontend"
        },{
          name: "Live",
          url: 'https://fruiteee-frontend.vercel.app/'
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8089808847",
  email_address: "afsalkpmanu31@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
