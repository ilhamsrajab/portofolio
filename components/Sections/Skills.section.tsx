import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="cursor-default my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">skills & expertise.</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg ">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 hover:pl-1 transition-all duration-200">
          <BsArrowRightShort size="30" />
          <span className="text-white">programming : </span>
          &nbsp;HTML, CSS, PHP, JavaScript
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 hover:pl-1 transition-all duration-200">
          <BsArrowRightShort size="30" />
          <span className="text-white">designing tool : </span>
          &nbsp;Affinty Designer, CorelDraw, Figma
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 hover:pl-1 transition-all duration-200">
          <BsArrowRightShort size="30" />
          <span className="text-white">game engine : </span>
          &nbsp;, Godot, Unity
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300 hover:pl-1 transition-all duration-200">
          <BsArrowRightShort size="30" />
          <span className="text-white">other : </span>
          &nbsp;Microsoft Azure
        </p>
      </div>

      <p className="text-lg font-medium text-slate-300">
        ...currently learning <span className="text-white">C# and game logic</span>
      </p>
    </div>
  );
};

export default Skills;
