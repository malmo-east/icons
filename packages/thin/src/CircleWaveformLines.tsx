import * as React from "react";
import { SVGProps } from "react";

const SvgCircleWaveformLines = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M208 208a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-80c0-4.4-3.6-8-8-8zm-64-48c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8s8-3.582 8-8V168c0-4.4-3.6-8-8-8zm128-32a8 8 0 0 0-8 8v240a8 8 0 0 0 16 0V136c0-4.4-3.6-8-8-8zm64 48a8 8 0 0 0-8 8v144a8 8 0 0 0 16 0V184c0-4.4-3.6-8-8-8zm64 40a8 8 0 0 0-8 8v64c0 4.418 3.582 8 8 8s8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleWaveformLines;
