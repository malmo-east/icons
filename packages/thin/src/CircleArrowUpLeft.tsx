import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M187.3 176H328a8 8 0 0 0 8-8c0-4.4-3.6-8-8-8H168c-4.4 0-8 3.6-8 8v160c0 4.422 3.576 8 8 8a7.996 7.996 0 0 0 7.998-8V187.3l162.3 162.3c3.115 3.117 8.188 3.129 11.31 0 3.127-3.125 3.117-8.195 0-11.31L187.3 176zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleArrowUpLeft;
