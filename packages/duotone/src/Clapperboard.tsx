import * as React from "react";
import { SVGProps } from "react";

const SvgClapperboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clapperboard_svg__fa-primary"
      d="M497.7 56.19 393.9 160H512V96c0-15.13-5.5-28.85-14.3-39.81zM64 32C28.65 32 0 60.65 0 96v64h6.062l128-128H64zm137.9 0-128 128h92.13l128-128H201.9zM448 32h-86.06l-128 128h92.13l127.4-127.4c-1.77-.21-3.57-.6-5.47-.6z"
    />
    <path
      d="M512 160v256c0 35.35-28.65 64-64 64H64c-35.35 0-64-28.65-64-64V160h512z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClapperboard;
