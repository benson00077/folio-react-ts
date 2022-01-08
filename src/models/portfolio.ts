import Job from "./job";
import Tool from "./tool";
import Section from "./section";
import Social from "./social";

export default interface folio {
  meta: {
    language: "ZH" | "EN";
    title: string;
    description: string;
    showRepoLink: boolean;
  };
  menu: {
    home: string;
    about: string;
  };
  intro: {
    headline: string;
    typed: string[];
  };
  resume: {
    headline: string;
    summary: string[];
    jobsHeadline: string;
    jobs: Job[];
    toolsHeadline: string;
    tools: Tool[];
  };
  sections: Section[];
  footer: {
    social: Social[];
    footerMessage: string;
    background: string;
  };
};