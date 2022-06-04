import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRotateRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 40v160c0 13.3-10.7 24-24 24H312c-13.2 0-24-10.7-24-24s10.75-24 24-24h100.5c-29.7-57.7-90-96-156.5-96-97.9 0-176 78.1-176 176s78.97 176 176 176c41.09 0 81.09-14.47 112.6-40.75 10.16-8.5 25.31-7.156 33.81 3.062 8.5 10.19 7.125 25.31-3.062 33.81-40.16 33.44-91.17 51.77-143.5 51.77C132.4 479.9 32 379.5 32 256S132.4 32.1 255.9 32.1c79.85 0 152.4 43.46 192.1 109.1V40c0-13.25 10.75-24 24-24s24 10.75 24 24z" />
  </svg>
);

export default SvgArrowRotateRight;