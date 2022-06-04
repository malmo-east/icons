import * as React from "react";
import { SVGProps } from "react";

const SvgMessageMiddle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.99v287.1c0 35.25 28.75 63.1 64 63.1h111.1l67.22 89.63C246.4 509.9 251.2 512 256 512s9.6-2.133 12.8-6.4l67.22-89.63H448c35.25 0 64-28.75 64-63.1V63.99C512 28.75 483.3 0 448 0zm48 351.1c0 26.46-21.53 47.1-48 47.1H328.9L256 496l-72.03-96.03H64c-26.47 0-48-21.53-48-47.1V63.99C16 37.53 37.53 16 64 16h384c26.47 0 48 21.53 48 47.99V351.1z" />
  </svg>
);

export default SvgMessageMiddle;