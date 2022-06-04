import * as React from "react";
import { SVGProps } from "react";

const SvgBedFront = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="bed-front_svg__fa-primary"
      d="M0 352v112c0 8.9 7.125 16 16 16h32c8.88 0 16-7.1 16-16v-48h384v48c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16V352H0zm80-128v-64c0-17.62 14.38-32 32-32h96c17.62 0 32 14.38 32 32v64h32v-64c0-17.62 14.38-32 32-32h96c17.62 0 32 14.38 32 32v64h16c11.72 0 22.56 3.373 32 8.863V64c0-17.62-14.38-32-32-32H64c-17.62 0-32 14.38-32 32v168.9c9.44-5.5 20.28-8.9 32-8.9h16z"
    />
    <path
      d="M512 288v64H0v-64c0-35.38 28.62-64 64-64h384c35.4 0 64 28.6 64 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBedFront;
