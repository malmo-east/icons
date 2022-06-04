import * as React from "react";
import { SVGProps } from "react";

const SvgCircleN = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M360 128c-4.4 0-8 3.6-8 8v218.5L158 130.8c-2.1-2.5-5.7-3.4-8.8-2.3-3.1 1.2-5.2 4.2-5.2 7.5v240c0 4.4 3.6 8 8 8s8-3.6 8-8V157.5l193.1 223.8c2.4 1.7 4.6 2.7 6.9 2.7.938 0 1.891-.172 2.797-.5 3.103-1.2 5.203-4.2 5.203-7.5V136c0-4.4-3.6-8-8-8zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleN;
