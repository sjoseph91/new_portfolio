import tradingAppScreenshot from "../images/stockScreenshot.JPG";
import electionScreenshot from "../images/election-tracker-screenshot.JPG";
import paymentScreenshot from "../images/payment-screenshot.JPG";

export const data = [
  {
    title: "Stock Tracker",
    imgSrc: tradingAppScreenshot,
    description:
      "Stock Tracking Application \nTechnology used: finnHub API, Bootstrap, React, React-Router",
    liveLink: "https://sjoseph91.github.io/TradingApp/#/",
    githubLink: "https://github.com/sjoseph91/TradingApp",
  },
  {
    title: "2020 Election Finance Tool",
    imgSrc: electionScreenshot,
    liveLink: "https://sjoseph91.github.io/electiontracker/",
    description: `Allows users to look up financial contributions to political candidates... Technology used:  React Router, TypeScript, OpenFEC API, and fundamental web technologies`,
    githubLink: "https://github.com/sjoseph91/electiontracker",
  },
  {
    title: "Interactive Payment Form",
    imgSrc: paymentScreenshot,
    liveLink: "https://sjoseph91.github.io/interactive-card-details-form/",
    description:
      "Interactive payment card form with built in client-side validation and live on-screen feedback",
    githubLink: "https://github.com/sjoseph91/interactive-card-details-form",
  },
];
