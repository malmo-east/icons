import * as React from "react";
import { SVGProps } from "react";

const SvgLassoSparkles = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M336 0c8.8 0 16 7.164 16 16v48h48c8.8 0 16 7.16 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V96h-48c-8.8 0-16-7.16-16-16s7.2-16 16-16h48V16c0-8.836 7.2-16 16-16zm-80.5 1.11c9-.62 16.5 6.66 16.5 15.71 0 8.62-6.8 15.66-15.4 16.26C130 41.79 32 102.5 32 175.1c0 48 40.22 89.8 102.4 116.1 5.5 2.3 11.2 4.5 17 6.6 39.5 14.1 86.4 21.3 136.6 21.3 141.4 0 256-63.6 256-144 0-53.4-53.4-100.68-132.3-125.22-6.9-2.12-11.7-8.37-11.7-15.54 0-10.4 9.8-18.01 19.7-14.89C512.5 48.68 576 107.8 576 175.1 576 273.2 447.1 352 288 352c-22.9 0-45.3-1.6-66.7-4.7 12 17.2 18.7 37.9 18.7 59.7 0 57.1-47.9 104.1-105 104.1H48c-8.84 0-16-6.3-16-16 0-7.9 7.16-16 16-16h87c40.3 0 73-31.8 73-72.1 0-27.6-15.6-52.9-40.4-65.3l-34.8-17.4C52.92 292.1 0 238.3 0 175.1 0 85.52 111.7 10.99 255.5 1.11zM512 416h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48z" />
  </svg>
);

export default SvgLassoSparkles;