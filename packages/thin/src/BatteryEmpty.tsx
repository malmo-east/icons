import * as React from "react";
import { SVGProps } from "react";

const SvgBatteryEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M528 320v16c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V176c0-44.2 35.82-80 80-80h368c44.2 0 80 35.8 80 80v16h16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-16zM16 336c0 35.3 28.65 64 64 64h368c35.3 0 64-28.7 64-64V176c0-35.3-28.7-64-64-64H80c-35.35 0-64 28.7-64 64v160zm512-128v96h16c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-16z" />
  </svg>
);

export default SvgBatteryEmpty;
