import * as React from "react";
import { SVGProps } from "react";

const SvgPersonSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M128 128c35.38 0 64-28.62 64-64S163.38 0 128 0 64 28.62 64 64s28.63 64 64 64zm32 32H96c-44.18 0-80 35.8-80 80v80c0 17.67 14.33 32 32 32h16v136c0 13.3 10.75 24 24 24s24-10.75 24-24V352h32v136c0 13.25 10.75 24 24 24s24-10.7 24-24V352h16c17.67 0 32-14.33 32-32v-80c0-44.2-35.8-80-80-80zm32 144H64v-64c0-17.67 14.33-32 32-32h64c17.67 0 32 14.33 32 32v64z" />
  </svg>
);

export default SvgPersonSimple;