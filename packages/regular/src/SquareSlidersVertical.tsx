import * as React from "react";
import { SVGProps } from "react";

const SvgSquareSlidersVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M144 128c13.3 0 24 10.7 24 24v32h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16v128c0 13.3-10.7 24-24 24s-24-10.7-24-24V232h-16c-13.25 0-24-10.7-24-24s10.75-24 24-24h16v-32c0-13.3 10.7-24 24-24zm184 152h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16V152c0-13.3 10.7-24 24-24s24 10.7 24 24v128zm56-248c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm0 48H64c-8.84 0-16 7.16-16 16v320c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16z" />
  </svg>
);

export default SvgSquareSlidersVertical;