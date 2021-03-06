import type { WebsitesData } from "../types";

const websites: WebsitesData = {
  favorites: {
    title: "Links",
    sites: [
      {
        id: "my-blog",
        title: "Blog",
        img: "https://miro.medium.com/fit/c/176/176/1*yxTENnAzwp6TKohBNvz3pQ.png",
        link: "https://eggernotes.com/",
        inner: true
      },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/egger"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/TomEgger"
      },
      {
        id: "my-facebook",
        title: "Facebook",
        img: "img/sites/facebook.svg",
        link: "https://www.facebook.com/itsthomasegger"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:thomas@egger.ai"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },
      {
        id: "dribbble",
        title: "Dribbble",
        img: "img/sites/dribbble.svg",
        link: "https://dribbble.com/"
      },
      {
        id: "gmail",
        title: "Gmail",
        img: "img/sites/gmail.svg",
        link: "https://mail.google.com/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "tiny-png",
        title: "More Load",
        img: "https://moreload.com/system/37c1ed20-37b0-4b8e-9e34-4fbe25573f5b.png",
        link: "https://moreload.com/"
      }
    ]
  }
};

export default websites;
