import * as React from "react";
import { SVGProps } from "react";

const SvgCircleO = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-o_svg__fa-primary"
      d="M256 128c-70.6 0-128 57.4-128 128s57.42 128 128 128 128-57.42 128-128-57.4-128-128-128zm0 208c-44.11 0-80-35.89-80-80s35.9-80 80-80 80 35.89 80 80-35.9 80-80 80z"
    />
    <path
      d="M256 176c-44.1 0-80 35.9-80 80s35.89 80 80 80 80-35.89 80-80-35.9-80-80-80zm0-176C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 384c-70.58 0-128-57.42-128-128s57.42-128 128-128 128 57.42 128 128-57.4 128-128 128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleO;
