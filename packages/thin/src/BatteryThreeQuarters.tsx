import * as React from "react";
import { SVGProps } from "react";

const SvgBatteryThreeQuarters = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M64 208c0-26.5 21.49-48 48-48h224c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H112c-26.51 0-48-21.5-48-48v-96zm16 0v96c0 17.7 14.33 32 32 32h224c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32H112c-17.67 0-32 14.3-32 32zm368 208H80c-44.18 0-80-35.8-80-80V176c0-44.2 35.82-80 80-80h368c44.2 0 80 35.8 80 80v16h16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-16v16c0 44.2-35.8 80-80 80zM80 112c-35.35 0-64 28.7-64 64v160c0 35.3 28.65 64 64 64h368c35.3 0 64-28.7 64-64V176c0-35.3-28.7-64-64-64H80zm464 192c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-16v96h16z" />
  </svg>
);

export default SvgBatteryThreeQuarters;
