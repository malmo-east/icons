import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M370.3 250.3 264 356.7V136c0-4.4-3.6-8-8-8s-8 3.6-8 8v220.7L141.7 250.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31l120 120a7.994 7.994 0 0 0 11.31 0l120-120c1.5-1.51 2.3-3.51 2.3-5.61s-.781-4.094-2.344-5.656C378.5 247.2 373.5 247.2 370.3 250.3zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleArrowDown;
