import * as React from "react";
import { SVGProps } from "react";

const SvgVenus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 176C368 78.8 289.2 0 192 0S16 78.8 16 176c0 89.04 66.18 162.4 152 174.2V392h-48c-13.2 0-24 10.8-24 24s10.75 24 24 24h48v48c0 13.3 10.8 24 24 24s24-10.75 24-24v-48h48c13.25 0 24-10.75 24-24s-10.75-24-24-24h-48v-41.82C301.8 338.4 368 265 368 176zm-304 0c0-70.58 57.42-128 128-128s128 57.42 128 128-57.42 128-128 128c-70.6 0-128-57.4-128-128z" />
  </svg>
);

export default SvgVenus;
