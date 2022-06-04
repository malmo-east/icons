import * as React from "react";
import { SVGProps } from "react";

const SvgDoNotEnter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M80 240c0-17.7 14.33-32 32-32h288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H112c-17.67 0-32-14.3-32-32v-32zm16 32c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v32zm416-16c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16z" />
  </svg>
);

export default SvgDoNotEnter;
