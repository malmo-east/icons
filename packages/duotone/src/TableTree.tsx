import * as React from "react";
import { SVGProps } from "react";

const SvgTableTree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="table-tree_svg__fa-primary"
      d="M448 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zm0 128H64v256h384V160z"
    />
    <path
      d="M144 368c-26.5 0-48-21.5-48-48V160h32v64c0 8.8 7.2 16 16 16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-5.6 0-11-1-16-2.7V320c0 8.8 7.2 16 16 16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96zm256-144c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h160zm0 96c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTableTree;
