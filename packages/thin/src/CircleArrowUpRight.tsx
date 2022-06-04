import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M344 160H184c-4.4 0-8 3.6-8 8a8 8 0 0 0 8 8h140.7L162.4 338.3c-3.117 3.117-3.127 8.188 0 11.31 3.125 3.129 8.197 3.117 11.31 0l162.3-162.3V328c0 4.422 3.58 8 7.998 8 4.424 0 8-3.578 8-8V168c-.008-4.4-3.608-8-8.008-8zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleArrowUpRight;
