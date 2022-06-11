import type { NextComponentType, NextPageContext } from "next";

import Link from "next/link";
import { VscGithubAlt } from "../Misc/Icons.collection";

import type { linkProps } from "../../@types/prop.types";

const TextLink: NextComponentType<NextPageContext, {}, linkProps> = ({
  text,
  url,
}) => {
  return (
    <a
      href={url}
      className="cursor-pointer rounded-md px-4 py-[0.30rem] text-xl text-gray-200 duration-200 transition-all hover:bg-zinc-800 hover:ring-2 hover:ring-violet-800 hover:shadow-violet-800/50 hover:shadow-md"
    >
      {text}
    </a>
  );
};

const Header: NextComponentType = () => {
  return (
    <header
      className={`font-jost py-8 sm:flex sm:flex-row sm:items-center sm:justify-between`}
    >
      <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
        <TextLink text="home" url="#" />
        <TextLink text="skills" url="#skills" />
        <TextLink text="projects" url="#projects" />
        <TextLink text="contact" url="#contact" />
      </p>

      <Link href="https://github.com/ilhamsrajab/" passHref>
        <a
          className="float-right mr-2 rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-200 hover:ring-2 hover:ring-violet-800 sm:float-none sm:mr-0 hover:shadow-violet-800/50 hover:shadow-md"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-repo"
        >
          <VscGithubAlt />
        </a>
      </Link>
    </header>
  );
};

export default Header;
