import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M312 352a7.997 7.997 0 0 1-7.999-7.999V123.3l-290.3 290.3c-3.116 3.116-8.187 3.127-11.31 0s-3.116-8.198 0-11.31l290.3-290.3H71.1c-3.52-.89-7.1-3.59-7.1-8.89s3.58-7.1 7.1-7.1h240c5.3 0 8.9 3.58 8.9 7.1v240c0 5.3-3.6 8.9-8 8.9z" />
  </svg>
);

export default SvgArrowUpRight;
