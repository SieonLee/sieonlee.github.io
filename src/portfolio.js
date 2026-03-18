import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 1500
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Sieon Lee",
  title: "Hi, I'm Sieon Lee",
  subTitle: emoji(
    "Applied Data Science master’s student at UChicago building practical machine learning projects across forecasting, experimentation, NLP, and geospatial data."
  ),
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/sieonlee/",
  github: "https://github.com/SieonLee",
  gmail: "sieonlee1118@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Work On",
  subTitle:
    "I build end-to-end data science projects that connect business problems with practical modeling, analysis, and communication.",
  skills: [
    emoji(
      "⚡ Build machine learning workflows for regression, classification, forecasting, and ranking problems"
    ),
    emoji(
      "⚡ Perform exploratory data analysis, feature engineering, model comparison, and business-focused interpretation"
    ),
    emoji(
      "⚡ Work with tabular, temporal, review-based, and geospatial data using Python, SQL, and cloud-oriented data systems"
    )
  ],
  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "jupyter",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true
};

const educationInfo = {
  display: false,
  schools: []
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Machine Learning / Analytics",
      progressPercentage: "85%"
    },
    {
      Stack: "Python / SQL / Data Tools",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud / Data Systems",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: false,
  experience: []
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Featured Work",
  subtitle:
    "A few projects that best represent my strengths in practical machine learning, business analysis, and applied data science.",
  projects: [
    {
      image: require("./assets/images/programmer.svg").default,
      projectName: "EY Water Quality Challenge",
      projectDesc:
        "Environmental prediction project using Landsat, TerraClimate, geospatial feature engineering, and ensemble regression to predict water quality targets.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/SieonLee/ey-water-quality-challenge"
        }
      ]
    },
    {
      image: require("./assets/images/skill.svg").default,
      projectName: "Machine Learning Projects",
      projectDesc:
        "Portfolio repository covering regression, classification, forecasting, experimentation, pricing, and review ranking with business-focused interpretation.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/SieonLee/machine-learning-projects"
        }
      ]
    },
    {
      image: require("./assets/images/manOnTable.svg").default,
      projectName: "NBACoach",
      projectDesc:
        "Basketball-oriented product project that complements my data portfolio by showing a more application-driven, user-facing side of my work.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/SieonLee/NBACoach"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Portfolio Highlights"),
  subtitle:
    "A quick snapshot of the themes and problem types I have been focusing on recently.",
  achievementsCards: [
    {
      title: "Forecasting and Time-Aware Validation",
      description:
        "Built bike demand forecasting workflows using lag features, rolling statistics, and chronological train-test splits.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Forecasting highlight",
      footer: [
        {
          name: "View Project",
          url: "https://github.com/SieonLee/machine-learning-projects/tree/main/10.%20Bike_Demand_Forecasting"
        }
      ]
    },
    {
      title: "Review Ranking and NLP-Adjacent Analysis",
      description:
        "Predicted Yelp review helpfulness with text-derived, user, and business features, then used model scores for review ranking.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "NLP highlight",
      footer: [
        {
          name: "View Project",
          url: "https://github.com/SieonLee/machine-learning-projects/tree/main/9.%20Yelp_Review_Helpfulness_Prediction"
        }
      ]
    },
    {
      title: "Geospatial and Environmental Modeling",
      description:
        "Combined remote sensing, climate features, and spatial clustering in a challenge-style machine learning project.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Geospatial highlight",
      footer: [
        {
          name: "View Project",
          url: "https://github.com/SieonLee/ey-water-quality-challenge"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Project Themes",
  subtitle:
    "The portfolio currently emphasizes practical, interpretable machine learning work across several common data science problem types.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://github.com/SieonLee/machine-learning-projects",
      title: "Structured Tabular Machine Learning",
      description:
        "Regression and classification projects with feature engineering, leakage checks, model comparison, and business-oriented recommendations."
    },
    {
      url: "https://github.com/SieonLee/machine-learning-projects/tree/main/10.%20Bike_Demand_Forecasting",
      title: "Forecasting and Temporal Modeling",
      description:
        "Time series workflows using temporal features, lag-based modeling, rolling windows, and realistic validation strategies."
    },
    {
      url: "https://github.com/SieonLee/machine-learning-projects/tree/main/9.%20Yelp_Review_Helpfulness_Prediction",
      title: "Review Analysis and Ranking",
      description:
        "NLP-adjacent review analysis with text-derived signals, behavioral features, and ranking-oriented evaluation."
    }
  ],
  display: true
};

const talkSection = {
  title: "Focus Areas",
  subtitle: emoji(
    "Problem types and workflows I’m currently most interested in exploring further."
  ),
  talks: [
    {
      title: "Business-Focused Machine Learning",
      subtitle: "Prediction, experiment analysis, and decision support on real-world datasets",
      slides_url: "https://github.com/SieonLee/machine-learning-projects",
      event_url: "https://github.com/SieonLee/machine-learning-projects"
    },
    {
      title: "Forecasting and Temporal Validation",
      subtitle: "Forecasting workflows that emphasize leakage prevention and realistic evaluation",
      slides_url:
        "https://github.com/SieonLee/machine-learning-projects/tree/main/10.%20Bike_Demand_Forecasting",
      event_url:
        "https://github.com/SieonLee/machine-learning-projects/tree/main/10.%20Bike_Demand_Forecasting"
    }
  ],
  display: true
};

const podcastSection = {
  title: emoji("Currently Building"),
  subtitle:
    "I’m continuing to expand my portfolio beyond standard tabular ML into forecasting, review ranking, and challenge-style applied machine learning.",
  podcast: [],
  display: false
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "If you’d like to talk about data science, machine learning projects, or analytics opportunities, feel free to reach out.",
  number: "",
  email_address: "sieonlee1118@gmail.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

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
  isHireable
};
