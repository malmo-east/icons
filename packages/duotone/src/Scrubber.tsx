import * as React from "react";
import { SVGProps } from "react";

const SvgScrubber = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="scrubber_svg__fa-primary"
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 320c-35.33 0-64-28.75-64-64s28.67-64 64-64 64 28.75 64 64-28.7 64-64 64z"
    />
    <path
      d="M256 320c-35.33 0-64-28.75-64-64s28.67-64 64-64 64 28.75 64 64-28.7 64-64 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgScrubber;
