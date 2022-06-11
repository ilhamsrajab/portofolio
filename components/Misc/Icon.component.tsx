import React, { FC } from "react";
import type { NextComponentType, NextPageContext } from "next";

import Link from "next/link";

import type { iconProps } from "../../@types/prop.types";

const Icon: NextComponentType<NextPageContext, {}, iconProps> = ({
  icon,
  url,
}) => {
  return (
    <Link href={url} passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="contact icon"
        className="rounded-lg bg-zinc-800 p-2 text-2xl text-white transition-all duration-200 hover:ring-2  hover:ring-violet-800 hover:shadow-violet-800/50 hover:shadow-md"
      >
        {icon}
      </a>
    </Link>
  );
};

export { Icon };
