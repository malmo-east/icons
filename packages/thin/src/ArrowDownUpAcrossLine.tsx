import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownUpAcrossLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M58.34 413.7a8.112 8.112 0 0 1 0-11.4c3.13-3.1 8.19-3.1 11.32 0L152 484.7V263.1H8c-4.418 0-8-2.7-8-8 0-3.5 3.582-8 8-8h400V27.31l-82.3 82.39a8.15 8.15 0 0 1-11.4 0c-3.1-3.2-3.1-8.2 0-11.36l96-95.997a8.105 8.105 0 0 1 11.4 0l96 95.997c3.1 3.16 3.1 8.16 0 11.36a8.15 8.15 0 0 1-11.4 0L424 27.31V247.1h144c4.4 0 8 4.5 8 8 0 5.3-3.6 8-8 8H168v221.6l82.3-82.4c3.2-3.1 8.2-3.1 11.4 0 3.1 3.2 3.1 8.2 0 11.4l-96 96a8.15 8.15 0 0 1-11.4 0l-95.96-96zM152 39.1c0-3.52 3.6-8 8-8s8 4.48 8 8v152h-16v-152zm272 280V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V319.1h16z" />
  </svg>
);

export default SvgArrowDownUpAcrossLine;
