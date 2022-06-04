import * as React from "react";
import { SVGProps } from "react";

const SvgClockEleven = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M248 104c0-4.42 3.6-8 8-8s8 3.58 8 8v152c0 3.5-2.3 6.6-5.7 7.7-3.4 1-7-.3-9-3.3l-64-96c-2.4-3.6-1.4-8.6 2.3-11.1 3.6-2.4 8.6-1.4 11.1 2.3l49.3 74V104zm8-104c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM16 256c0 132.5 107.5 240 240 240s240-107.5 240-240S388.5 16 256 16 16 123.5 16 256z" />
  </svg>
);

export default SvgClockEleven;
