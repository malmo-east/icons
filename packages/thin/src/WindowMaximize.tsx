import * as React from "react";
import { SVGProps } from "react";

const SvgWindowMaximize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm19.2 0v80h473.6V96c0-24.74-20.1-44.8-44.8-44.8H64c-24.74 0-44.8 20.06-44.8 44.8zm0 96v224c0 24.7 20.06 44.8 44.8 44.8h384c24.7 0 44.8-20.1 44.8-44.8V192H19.2z" />
  </svg>
);

export default SvgWindowMaximize;
