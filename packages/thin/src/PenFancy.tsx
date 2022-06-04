import * as React from "react";
import { SVGProps } from "react";

const SvgPenFancy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 79.47c0 23.03-9.9 44.83-27.3 59.93L262.1 332.5l-23.4 78.9c-5.2 16.8-18 30.3-34.7 36.2l-170.77 61c-18.74 6.7-37.011-11-30.923-29.9L56.54 309.1c5.72-16.9 19.95-30.7 37.92-35.8l85.04-25.2L372.6 27.28C387.7 9.947 409.6 0 432.5 0 476.4 0 512 35.58 512 79.47zM194.9 255.6l61.5 61.5 217.8-189.8c13.9-12 21.8-29.48 21.8-47.83C496 44.42 467.6 16 432.5 16c-18.3 0-35.8 7.94-47.8 21.78L194.9 255.6zm52 74.6-65.2-66.1-82.84 24.5c-12.84 3.7-23 13.6-27.09 26.3l-54.03 168 76.89-76.8C90.44 399.7 88 392.2 88 384c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40c-8.2 0-15.7-2.4-22.1-6.6l-75.09 75.1 167.89-59.9c11.8-4.3 21-13.9 24.7-25.9l23.5-76.5zM128 360c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
  </svg>
);

export default SvgPenFancy;
