import * as React from "react";
import { SVGProps } from "react";

const SvgA = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m381.5 435.7-160-384c-4.9-11.92-16.6-19.69-29.5-19.69s-24.6 7.77-29.5 19.69l-160 384c-6.797 16.31.906 35.05 17.22 41.84 16.38 6.828 35.08-.922 41.84-17.22l31.8-76.31h197.3l31.8 76.31c5.109 12.28 17.02 19.7 29.55 19.7 4.094 0 8.266-.797 12.3-2.484C380.6 470.7 388.3 452 381.5 435.7zM119.1 320 192 147.2 264 320H119.1z" />
  </svg>
);

export default SvgA;
