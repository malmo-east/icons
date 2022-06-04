import * as React from "react";
import { SVGProps } from "react";

const SvgSortDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.4 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.09-2.702 19.5-8.109l132.4-136.8C329.2 317.8 316.9 288 292.3 288zm8.1 35.1L168.3 459.7c-2.3 3.1-5.2 4.3-8.3 4.3-3.059 0-5.926-1.195-7.951-3.24l-132.6-136.1C14.5 318.9 16.05 313.3 16.94 311.2c.9-2.2 3.73-7.2 10.72-7.2h264.7c6.99 0 9.822 5.014 10.71 7.17.03 2.13 2.43 7.73-2.67 11.93z" />
  </svg>
);

export default SvgSortDown;
