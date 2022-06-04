import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M338.3 162.3 175.1 324.7V184c0-4.422-3.58-8-7.998-8-3.502 0-7.102 3.6-7.102 8v160c0 4.4 3.6 8 8 8h160c4.42 0 8-3.578 8-8s-3.58-8-8-8H187.3l162.3-162.3c3.117-3.117 3.127-8.188 0-11.32-3.1-3.18-8.1-3.18-11.3-.08zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleArrowDownLeft;
