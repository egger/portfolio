import { FaPaw, FaVuejs } from "react-icons/fa";
import {
  GiNinjaHeroicStance,
  GiJumpingDog,
  GiEnergySword,
  GiCat,
  GiFishEscape
} from "react-icons/gi";
import { VscGithub } from "react-icons/vsc";
import { GoRepo, GoBrowser } from "react-icons/go";
import { RiGamepadLine } from "react-icons/ri";
import { HiFire } from "react-icons/hi";
import { CgFormatText } from "react-icons/cg";
import { BiCube, BiGame } from "react-icons/bi";
import { BsFillImageFill, BsGrid1X2 } from "react-icons/bs";
import { AiFillAudio } from "react-icons/ai";

import type { BearData } from "../types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: <FaPaw />,
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: <GiNinjaHeroicStance />,
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: <VscGithub />,
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: <GoBrowser />,
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: <GoRepo />,
    md: [
      {
        id: "flint",
        title: "Ryen",
        file: "https://ryen.org",
        icon: <HiFire />,
        excerpt: "The home of services",
        link: "https://ryen.org"
      },
      {
        id: "portfolio-macos",
        title: "Web",
        file: "https://raw.githubusercontent.com/egger/web/main/README.md",
        icon: <RiGamepadLine />,
        excerpt: "The website of Thomas Egger",
        link: "https://github.com/egger/web"
      }
    ]
  }
];

export default bear;
