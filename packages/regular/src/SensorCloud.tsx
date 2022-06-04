import * as React from "react";
import { SVGProps } from "react";

const SvgSensorCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M572.6 321.2c8.75-22.12-.125-47.37-20.87-59.12-20.75-11.62-46.1-6.375-61.5 12.5-15.25-38.5-57.36-58.1-97.11-47.12s-63.88 52.12-55.51 92.62c-.5 0-1.125-.125-1.625-.125-44.12 0-79.1 35.88-79.1 80s35.87 80 79.1 80h223.1c41.75.125 76.5-31.88 79.75-73.5C643.1 364.9 613.9 327.7 572.6 321.2zM175.1 151.1v112c0 13.25 10.75 24 23.1 24s23.1-10.75 23.1-24v-112c0-13.25-10.75-24-23.1-24s-23.1 11.6-23.1 24zm-112 280c-8.875 0-15.1-7.125-15.1-16v-320c0-8.875 7.125-16 15.1-16h319.1c8.875 0 15.1 7.125 15.1 16v97.5c5.25-.875 10.62-1.375 15.1-1.5 11.12 0 21.75 2.125 31.1 5.25l.006-101.2c0-35.38-28.63-64-63.1-64h-319.1c-35.37 0-63.1 28.62-63.1 64v320c0 35.38 28.63 64 63.1 64h193.9c-13.5-13.38-23.37-29.88-28.62-48H63.1zm32-280v112c0 13.25 10.75 24 23.1 24s23.1-10.75 23.1-24v-112c0-13.25-10.75-24-23.1-24s-23.1 11.6-23.1 24z" />
  </svg>
);

export default SvgSensorCloud;