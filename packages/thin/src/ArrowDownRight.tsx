import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 167.1v240c0 5.3-3.6 8.9-8 8.9H71.1c-3.52 0-7.1-3.6-7.1-8s3.58-7.999 7.999-7.999h220.7L2.341 109.7c-3.116-3.116-3.127-8.187 0-11.31s8.198-3.116 11.31 0l290.3 290.3V167.1C304 163.6 307.6 160 312 160c4.4 0 8 3.6 8 7.1z" />
  </svg>
);

export default SvgArrowDownRight;
