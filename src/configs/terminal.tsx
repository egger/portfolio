import type { TerminalData } from "../types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi! This is Thomas Egger, now a Computer Science master's student
              at Boston University and a machine learning engineer intern at
              Kuaishou (Kwai). I'm also working as a research assistant at
              Peking University.
            </div>
            <div className="mt-1">
              Before that, I got my bachelor's degree in Software Engineering at
              Tongji University.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "I like tech. I like to learn. I like to solve problems. I like to make things. I like to make people happy. I like to make people feel good. I like to make people feel like they're doing something."
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content: "That´s a good question!"
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:office@t-e.me"
                target="_blank"
                rel="noreferrer"
              >
                office@t-e.me
              </a>{" "}
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/egger"
                target="_blank"
                rel="noreferrer"
              >
                github.com/egger
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/TomEgger"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/TomEgger
              </a>
            </li>
            <li>
              Blog:{" "}
              <a
                className="text-blue-300"
                href="https://eggernotes.com"
                target="_blank"
                rel="noreferrer"
              >
                eggernotes.com
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
