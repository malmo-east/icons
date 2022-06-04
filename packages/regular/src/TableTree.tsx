import * as React from "react";
import { SVGProps } from "react";

const SvgTableTree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224 240c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16v-32zm176 80c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h96zM0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm48 64v256c0 8.8 7.16 16 16 16h384c8.8 0 16-7.2 16-16V160H128v64c0 8.8 7.2 16 16 16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-5.6 0-11-1-16-2.7V320c0 8.8 7.2 16 16 16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-26.5 0-48-21.5-48-48V160H48z" />
  </svg>
);

export default SvgTableTree;
