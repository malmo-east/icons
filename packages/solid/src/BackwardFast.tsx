import * as React from "react";
import { SVGProps } from "react";

const SvgBackwardFast = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 415.1V96.03c0-17.67 14.33-31.1 31.1-31.1 18.57-.9 32.9 13.43 32.9 31.1v131.8l171.5-156.5c20.6-17.05 52.5-2.67 52.5 24.7v131.9l171.5-156.5c20.6-17.15 52.5-2.77 52.5 24.6v319.9c0 27.37-31.88 41.74-52.5 24.62L288 285.2v130.7c0 27.37-31.88 41.74-52.5 24.62L64 285.2v130.7c0 17.67-14.33 31.1-31.1 31.1-18.57.1-32.9-13.4-32.9-31.9z" />
  </svg>
);

export default SvgBackwardFast;
