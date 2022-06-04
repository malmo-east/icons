import * as React from "react";
import { SVGProps } from "react";

const SvgTableRows = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm464 320V280H128v152h320c8.8 0 16-7.2 16-16zm0-184V96c0-8.84-7.2-16-16-16H128v152h336z" />
  </svg>
);

export default SvgTableRows;