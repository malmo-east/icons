import * as React from "react";
import { SVGProps } from "react";

const SvgMessageMiddleTop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96.03H336.9L269.68 6.4C265.6 2.133 260.8 0 256 0s-9.6 2.133-12.8 6.4l-67.22 89.63H64c-35.25 0-64 28.75-64 63.1v287.1C0 483.3 28.75 512 64 512h384c35.25 0 64-28.75 64-63.99V160c0-35.2-28.7-63.97-64-63.97zM496 448c0 26.5-21.5 48-48 48H64c-26.47 0-48-21.53-48-47.99V160c0-26.46 21.53-47.1 48-47.1h119.1l72-96.9c.004 0-.02 0 0 0l72.04 96.03H448c26.47 0 48 21.53 48 47.1V448z" />
  </svg>
);

export default SvgMessageMiddleTop;
