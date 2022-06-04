import * as React from "react";
import { SVGProps } from "react";

const SvgFont = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416 416h-25.81L253.1 52.76C248.412 40.29 236.53 32 223.19 32s-25.34 8.289-30.02 20.76L57.81 416H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h96c17.67 0 32-14.31 32-32s-14.33-32-32-32h-1.8l17.1-48h159.6l17.1 48c-17.67 0-32 14.31-32 32s14.33 32 32 32h96c17.67 0 32-14.31 32-32s-14.3-32-32-32zM168.2 304 224 155.1 279.82 304H168.2z" />
  </svg>
);

export default SvgFont;
