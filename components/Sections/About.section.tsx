import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Ilham Rajab.</p>
        <p className="mt-1 text-lg text-gray-300">
          UI/UX Designer, Game Developer and a Student.
        </p>

        <p className="mt-4 text-gray-400">
          Computer graduate who likes new challenges to learn and has a strong <br />
          interest in design and programming. Skilled in working on several UI/UX, <br />
          websites, and games developing. Has received a certificate of expertise in the fields of design, <br />
          computer networks, and artificial intelligence.
        </p>

        {/* <Link href="https://blog.anurag.tech" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my Blog
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>

        <Link href="https://sponsor.anurag.tech" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Love my work? Sponsor me!
            <HiOutlineArrowNarrowRight />
          </a>
        </Link> */}
      </div>

      <div className="hidden custom:block ">
        <Image
          src="/assests/avatar.png"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
