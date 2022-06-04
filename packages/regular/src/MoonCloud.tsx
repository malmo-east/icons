import * as React from "react";
import { SVGProps } from "react";

const SvgMoonCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M629.6 379.9c-.664 0-1.357.063-2.057.195a177.696 177.696 0 0 1-33.32 3.17c-94.81 0-175.1-77.14-175.1-175.5 0-63.19 33.85-121.3 88.79-152.6 8.467-4.812 6.337-17.66-3.281-19.44-11.2-2.078-29.56-3.746-40.92-3.746-111.5 0-203.7 81.74-220.6 188.7.678 1.33 1.527 2.557 2.152 3.921 3.536-.4 7.136-.6 10.736-.6 12.02 0 23.41 2.475 34.03 6.525 9.482-65.06 54.47-118.7 114.7-140.3-21.52 34.79-33.51 75.4-33.51 117.6 0 99.44 65.13 183.9 154.9 212.8C506.5 428.1 485.4 432 463.8 432c-51.13 0-97.09-22.1-129.2-57.11-9.314 13.29-22.12 23.96-36.8 31.15C338.7 451.4 397.8 480 463.7 480c69.04 0 132.2-31.45 173.9-82.93 5.7-7.97-.5-17.17-8-17.17zM320 320c0-35.25-28.75-64-64-64-12 0-23.1 3.5-32.7 9.3-3.5-41-37.4-73.3-79.3-73.3-38.7 0-71.12 27.6-78.37 64.3-.5 0-1-.3-1.63-.3-35.25 0-64 28.75-64 64s28.75 64 64 64h192c35.3 0 64-28.7 64-64z" />
  </svg>
);

export default SvgMoonCloud;
