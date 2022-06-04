import * as React from "react";
import { SVGProps } from "react";

const SvgCircleChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m351 207-95 95.1-95.9-95.1c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l112 112C243.7 357.7 249.8 360 256 360s12.28-2.344 16.97-7.031l112-112c9.375-9.375 9.375-24.56 0-33.94S360.4 197.7 351 207zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleChevronDown;