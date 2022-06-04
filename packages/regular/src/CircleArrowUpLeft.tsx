import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M225.9 192h97.36c13.25 0 24-10.75 24-24s-10.75-24-24-24H168c-13.2 0-24 10.8-24 24v155.3c0 13.25 10.75 24 24 24s24-10.75 24-24v-97.4l135 135c4.7 4.8 10.9 7.1 17 7.1s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L225.9 192zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleArrowUpLeft;
