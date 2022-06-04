import * as React from "react";
import { SVGProps } from "react";

const SvgChartGantt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M16 408c0 30.9 25.07 56 56 56h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-39.76 0-72-32.2-72-72V40a8 8 0 0 1 8-8c4.42 0 8 3.58 8 8v368zm240-296c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96zm-96 48h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16zm192 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32h128zm-128 48h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H224c-8.8 0-16 7.2-16 16s7.2 16 16 16zm224 48c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96zm-96 48h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
  </svg>
);

export default SvgChartGantt;
