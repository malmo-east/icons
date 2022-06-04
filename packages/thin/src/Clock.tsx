import * as React from "react";
import { SVGProps } from "react";

const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M248 104c0-4.42 3.6-8 8-8s8 3.58 8 8v147.7l92.4 61.6c3.7 2.5 4.7 7.5 2.3 11.1-2.5 3.7-7.5 4.7-11.1 2.3l-96-64c-2.3-1.5-4.5-4-4.5-6.7l.9-152zm8-104c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM16 256c0 132.5 107.5 240 240 240s240-107.5 240-240S388.5 16 256 16 16 123.5 16 256z" />
  </svg>
);

export default SvgClock;
