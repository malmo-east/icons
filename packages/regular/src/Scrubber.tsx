import * as React from "react";
import { SVGProps } from "react";

const SvgScrubber = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 192c-35.3 0-64 28.8-64 64s28.67 64 64 64 64-28.75 64-64-28.7-64-64-64zm0-192C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgScrubber;