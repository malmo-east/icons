import * as React from "react";
import { SVGProps } from "react";

const SvgScrubber = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 176c-44.1 0-80 35.9-80 80 0 44.11 35.89 80 80 80s80-35.89 80-80c0-44.1-35.9-80-80-80zm0 144c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64c0 35.3-28.7 64-64 64zm0-320C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgScrubber;
