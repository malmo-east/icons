import * as React from "react";
import { SVGProps } from "react";

const SvgHockeyPuck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 80C112.5 80 0 122.16 0 176v160c0 53.84 112.5 96 256 96s256-42.16 256-96V176c0-53.8-112.5-96-256-96zm0 16c143.6 0 240 41.38 240 80s-96.4 80-240 80-240-41.4-240-80 96.4-80 240-80zm240 240c0 38.63-96.44 80-240 80S16 374.62 16 336V209.7C51.72 246.4 144.3 272 256 272s204.3-25.57 240-62.27V336z" />
  </svg>
);

export default SvgHockeyPuck;
