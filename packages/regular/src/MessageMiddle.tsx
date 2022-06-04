import * as React from "react";
import { SVGProps } from "react";

const SvgMessageMiddle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.99v287.1c0 35.25 28.75 63.1 64 63.1h111.1l67.22 89.63C246.4 509.9 251.2 512 256 512s9.6-2.133 12.8-6.4l67.22-89.63H448c35.25 0 64-28.75 64-63.1V63.99C512 28.75 483.3 0 448 0zm16 351.1c0 8.67-7.326 15.1-16 15.1H312.9L256 442.7 199.97 368H64c-8.674 0-16-7.326-16-15.1V63.99C48 55.32 55.33 48 64 48h384c8.674 0 16 7.324 16 15.99V351.1z" />
  </svg>
);

export default SvgMessageMiddle;