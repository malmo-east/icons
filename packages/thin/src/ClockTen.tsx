import * as React from "react";
import { SVGProps } from "react";

const SvgClockTen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M248 104c0-4.42 3.6-8 8-8s8 3.58 8 8v152c0 2.1-1.6 5.7-4.2 7.1-2.6 1.3-5.8 1.2-8.2-.4l-96-64c-3.7-2.5-4.7-7.5-2.3-11.1 2.5-3.7 7.5-4.7 11.1-2.3l83.6 55.8V104zm8-104c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM16 256c0 132.5 107.5 240 240 240s240-107.5 240-240S388.5 16 256 16 16 123.5 16 256z" />
  </svg>
);

export default SvgClockTen;
