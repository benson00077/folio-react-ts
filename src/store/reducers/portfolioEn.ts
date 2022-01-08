import folio from "../../models/portfolio";

export const enFolio: folio = {
  meta: {
    language: "EN",
    title: "My Portfolio",
    description: "Lots of info about you.",
    showRepoLink: true,
  },
  menu: {
    home: "START",
    about: "RESUME",
    portfolio: "PORTFOLIO"
  },
  intro: {
    headline: "Hello, I'm Benson",
    typed: ["I'm a software egineer", "I mainly use JavaScirpt", "and React"],
  },
  resume: {
    headline: "I develop and maintain codes",
    summary: [
      "Including: front-end code and RPA projects. I believe code can make life easier and better",
      "I'm also a Korean tutor. I use code to refine my teaching materials",
    ],
    jobsHeadline: "Experience",
    jobs: [
      {
        title: "Software Engineer",
        company: "Cafe24 Corp. Taiwan Branch",
        timeframe: "2021-2022",
        summary:
          "I build and integrate RPA scirpts mainly for our finance dept, which a lot of time for user and hlep them focus on their main business logic. The script work on Selenium, writing in JavaScript and levergae MySQL database. Also, I maintain shopping mall websites front-end code built by our plateform",
      },
      {
        title: "International Sales",
        company: "Pioneer Material Precision Tech, Inc.",
        timeframe: "2019-2020",
        summary:
          "I manage schedule of porducst (components of elastomer and it's combination of dissimilar materials) from proto build to ramp build, handle complaint from FATP and pormote product and solution to end-customer",
      },
      {
        title: "Administrative Asistant",
        company: "URG Co. Korean",
        timeframe: "2018-2019",
        summary:
          "I translate marketing documents and help communicate with Chna agency. It's a part-time jpb in a cosmetic company in Korea.",
      },
    ],
    toolsHeadline: "Skills",
    tools: [
      {
        name: "Language",
        list: "JavaSCript / TypeScript, SQL, Python",
      },
      {
        name: "Framworks & Libaray",
        list: "React & Hooks, Redux, CSS in JS (Styled Component), CSS3 & SCSS, Webpack",
      },
      {
        name: "Utilities",
        list: "Git, npm, Selenium, Jest",
      },
    ],
  },
  sections: [
    {
      id: "portfolio",
      menu: "Portfolio",
      headline: "Portfolio",
      subhead: "Projects that mattered.",
      projects: [
        {
          id: "section-1-project-1",
          title: "DAG draggable To Do List",
          summary:
            "A to-do-list based on dag data struture that helps user to kepp track of the work flow among those to-dos",
          image: "",
          links: [
            {
              label: "Example",
              url: "https://benson00077.github.io/dag_graph-ts/",
            },
          ],
        },
        {
          id: "section-1-project-2",
          title: "K-drama Korean-larning Platform",
          summary:
            "User cna Search by Kreaon Verb·Adjective, and access related K-drama lines with Chinese & English translation",
          image: "",
          links: [
            {
              label: "Example",
              url: "https://benson00077.github.io/kosub_react/about",
            },
          ],
        },
        {
          id: "section-1-project-3",
          title: "Something Neat",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          image: "",
        },
      ],
    },
    {
      id: "more",
      menu: "More",
      headline: "Hobbies",
      subhead: "Another section of work, or extra hobbies, etc.",
      projects: [
        {
          id: "section-2-project-1",
          title: "Project 1",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          image: "",
        },
        {
          id: "section-2-project-2",
          title: "Project 2",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          image: "",
        },
        {
          id: "section-2-project-3",
          title: "Project 3",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          image: "",
        },
      ],
    },
  ],
  footer: {
    social: [
      {
        service: "tumblr",
        link: "https://www.tumblr.com",
      },
      {
        service: "github",
        link: "https://github.com",
      },
      {
        service: "linkedin",
        link: "https://www.linkedin.com",
      },
    ],
    footerMessage: "Thanks for reading.",
    background: "",
  },
};
