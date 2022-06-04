import * as React from "react";
import { SVGProps } from "react";

const SvgMessageMiddleTop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96.03H336.9L269.68 6.4C265.6 2.133 260.8 0 256 0s-9.6 2.133-12.8 6.4l-67.22 89.63H64c-35.25 0-64 28.75-64 63.1v287.1C0 483.3 28.75 512 64 512h384c35.25 0 64-28.75 64-63.99V160c0-35.2-28.7-63.97-64-63.97zM464 448c0 8.7-7.3 16-16 16H64c-8.674 0-16-7.324-16-15.99V160c0-8.67 7.326-15.1 16-15.1h135.1L256 69.33l56.03 74.7H448c8.674 0 16 7.326 16 15.1V448z" />
  </svg>
);

export default SvgMessageMiddleTop;
