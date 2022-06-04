import * as React from "react";
import { SVGProps } from "react";

const SvgMessageMiddle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.99v287.1c0 35.25 28.75 63.1 64 63.1h111.1l67.22 89.63C246.4 509.9 251.2 512 256 512s9.6-2.133 12.8-6.4l67.22-89.63H448c35.25 0 64-28.75 64-63.1V63.99C512 28.75 483.3 0 448 0zm32 351.1c0 17.64-14.36 31.1-32 31.1H320.9L256 469.3l-64.03-85.37H64c-17.64 0-32-14.35-32-31.1V63.99C32 46.35 46.36 32 64 32h384c17.64 0 32 14.35 32 31.99V351.1z" />
  </svg>
);

export default SvgMessageMiddle;
