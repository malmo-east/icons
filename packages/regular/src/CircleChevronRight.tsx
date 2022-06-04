import * as React from "react";
import { SVGProps } from "react";

const SvgCircleChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M240.1 127c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L302.1 256l-95.03 95.03c-9.375 9.375-9.375 24.56 0 33.94s24.56 9.375 33.94 0l112-112C357.7 268.3 360 262.2 360 256s-2.344-12.28-7.031-16.97L240.1 127zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleChevronRight;
