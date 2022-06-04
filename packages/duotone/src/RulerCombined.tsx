import * as React from "react";
import { SVGProps } from "react";

const SvgRulerCombined = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="ruler-combined_svg__fa-primary"
      d="M112 96h80v32h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm80 128h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v32zm0 96h32v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v32zm128 0v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h32zm80 96c-8.8 0-16-7.2-16-16v-80h32v80c0 8.8-7.2 16-16 16z"
    />
    <path
      d="M0 464V48C0 21.49 21.49 0 48 0h96c26.5 0 48 21.49 48 48v48h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h64v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h64v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h48c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48C23.15 512 2.706 493.1.248 468.9.084 467.3 0 465.7 0 464z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRulerCombined;
