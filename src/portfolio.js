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
  title: "Data Science and Data Engineering Intern Candidate",
  subTitle: emoji(
    "M.S. in Applied Data Science candidate at the University of Chicago with 3+ years of experience building production data systems and ML infrastructure. Seeking data science and data engineering internships where I can apply Python, SQL, cloud platforms, and practical machine learning."
  ),
  resumeLink: "/sieon-lee-resume.html",
  displayGreeting: true
};

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/sieonlee/",
  github: "https://github.com/SieonLee",
  gmail: "sieonlee@uchicago.edu",
  display: true
};

const skillsSection = {
  title: "What I Bring",
  subTitle:
    "I bring a mix of production data engineering experience and graduate-level applied machine learning work.",
  skills: [
    emoji(
      "⚡ Build ETL and ML workflows with Python, SQL, cloud services, and monitoring practices for reliable production analytics"
    ),
    emoji(
      "⚡ Develop machine learning projects in forecasting, classification, ranking, NLP-adjacent analysis, and feature engineering"
    ),
    emoji(
      "⚡ Work across batch and streaming pipelines, vector search systems, data warehouses, dashboards, and business-focused communication"
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
      skillName: "terraform",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Chicago",
      subHeader: "Master of Science in Applied Data Science",
      duration: "Expected Dec 2026",
      desc: "Graduate study focused on applied machine learning, NLP, analytics, and decision-ready communication.",
      descBullets: [
        "Coursework includes Machine Learning I and Natural Language Processing.",
        "Building projects across forecasting, recommendation, review ranking, and geospatial prediction while targeting data science and data engineering internships."
      ]
    },
    {
      schoolName: "Stony Brook University (SUNY)",
      subHeader: "Bachelor of Science in Information Systems",
      duration: "May 2018",
      desc: "Undergraduate foundation in information systems, technical problem solving, and software-oriented data work.",
      descBullets: []
    },
    {
      schoolName: "University of Chicago",
      subHeader: "Applied Data Science Program Ambassador",
      duration: "Feb 2026 - Present",
      desc: "Selected to represent the graduate Applied Data Science program and support recruitment and student engagement.",
      descBullets: [
        "Contribute to outreach efforts and help prospective students understand the program experience."
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Data Engineering / ETL",
      progressPercentage: "92%"
    },
    {
      Stack: "Machine Learning / Analytics",
      progressPercentage: "85%"
    },
    {
      Stack: "Python / SQL / Cloud Tools",
      progressPercentage: "92%"
    },
    {
      Stack: "Infrastructure / Monitoring",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Engineer",
      company: "Nexon Korea",
      companylogo: require("./assets/images/programmer.svg").default,
      date: "May 2022 - Jul 2025 | Pangyo, South Korea",
      desc: "Built production data systems and ML infrastructure for analytics, recommendation, and large-scale game launch support.",
      descBullets: [
        "Designed and deployed ML-ready data infrastructure including a 500GB+ vector embedding store on AWS OpenSearch (k-NN) for scalable similarity search.",
        "Built Python-based batch and streaming ETL pipelines and SQL Server auditing workflows, reducing system downtime by 25%.",
        "Provisioned AWS Aurora MySQL, Azure SQL Database, and Redis with Terraform, reducing infrastructure provisioning time by 70%.",
        "Improved cloud warehouse throughput by 25% while reducing monthly cloud costs by 20% through query tuning and resource scaling.",
        "Developed Grafana monitoring dashboards and anomaly detection pipelines, achieving 99.999% uptime and reducing incident response time by 40%."
      ]
    },
    {
      role: "IT MES Systems Engineer",
      company: "LG CNS Europe",
      companylogo: require("./assets/images/skill.svg").default,
      date: "Mar 2021 - Feb 2022 | Wroclaw, Poland",
      desc: "Worked on manufacturing data integration, automation, and reporting systems in a production environment.",
      descBullets: [
        "Refactored SQL stored procedures for real-time manufacturing dashboards, reducing query execution time from minutes to under 10 seconds.",
        "Developed C# automation tools with unit testing and code reviews, improving operational reporting efficiency by 80%.",
        "Documented data workflows and governance standards and mentored new engineers on data integration practices."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

const bigProjects = {
  title: "Selected Projects",
  subtitle:
    "These projects show both sides of my profile: production-minded data systems and applied machine learning.",
  projects: [
    {
      image: require("./assets/images/skill.svg").default,
      projectName: "Cue",
      projectDesc:
        "Built a contextual recommendation app with Thompson Sampling, LinUCB comparison, local-first analytics, and a feedback loop that personalizes future suggestions.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/SieonLee/Cue"
        }
      ]
    },
    {
      image: require("./assets/images/programmer.svg").default,
      projectName: "EY Water Quality Challenge",
      projectDesc:
        "Built a geospatial prediction workflow using Landsat imagery, TerraClimate features, spatial clustering, and ensemble regression to predict environmental water quality indicators.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/SieonLee/ey-water-quality-challenge"
        }
      ]
    },
    {
      image: require("./assets/images/manOnTable.svg").default,
      projectName: "Machine Learning Projects",
      projectDesc:
        "Portfolio repository featuring business-oriented machine learning case studies across forecasting, experimentation, pricing, ranking, and tabular prediction.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/SieonLee/machine-learning-projects"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Core Strengths"),
  subtitle:
    "A quick view of the skills and problem areas that best support my fit for data science and data engineering internships.",
  achievementsCards: [
    {
      title: "Production Data Infrastructure",
      subtitle:
        "Built vector search, ETL, cloud database provisioning, and monitoring systems in production data engineering roles.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Data engineering highlight",
      footer: [
        {
          name: "See Resume",
          url: "/sieon-lee-resume.html"
        }
      ]
    },
    {
      title: "Forecasting and Time-Aware Validation",
      subtitle:
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
      subtitle:
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
      subtitle:
        "Combined remote sensing, climate features, and spatial clustering in a challenge-style machine learning project.",
      image: require("./assets/images/googleAssistantLogo.webp"),
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
  title: "Role Fit",
  subtitle:
    "The portfolio is designed to support applications for data science and data engineering internships.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://github.com/SieonLee",
      title: "Data Science Intern",
      description:
        "Strong fit for roles involving predictive modeling, experimentation, forecasting, stakeholder communication, and decision support."
    },
    {
      url: "/sieon-lee-resume.html",
      title: "Data Engineering Intern",
      description:
        "Hands-on experience with ETL/ELT pipelines, vector stores, SQL optimization, Terraform, cloud databases, and production monitoring."
    },
    {
      url: "https://github.com/SieonLee/Cue",
      title: "ML Infrastructure + Analytics",
      description:
        "Interested in roles that connect reliable data systems with machine learning applications, experimentation, and business impact."
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
      subtitle:
        "Prediction, experiment analysis, and decision support on real-world datasets",
      slides_url: "https://github.com/SieonLee/machine-learning-projects",
      event_url: "https://github.com/SieonLee/machine-learning-projects"
    },
    {
      title: "Forecasting and Temporal Validation",
      subtitle:
        "Forecasting workflows that emphasize leakage prevention and realistic evaluation",
      slides_url:
        "https://github.com/SieonLee/machine-learning-projects/tree/main/10.%20Bike_Demand_Forecasting",
      event_url:
        "https://github.com/SieonLee/machine-learning-projects/tree/main/10.%20Bike_Demand_Forecasting"
    }
  ],
  display: false
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
    "If you're hiring for data science or data engineering internships, I'd be glad to connect.",
  number: "",
  email_address: "sieonlee@uchicago.edu"
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
