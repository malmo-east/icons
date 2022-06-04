import * as React from "react";
import { SVGProps } from "react";

const SvgWindowMaximize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zM96 96c-17.67 0-32 14.3-32 32s14.33 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
  </svg>
);

export default SvgWindowMaximize;
