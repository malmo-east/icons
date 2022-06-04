import * as React from "react";
import { SVGProps } from "react";

const SvgHeadSide = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M508.5 271.1c-7.641-17.12-16.17-41-25.22-66.25-16.02-44.72-32.56-90.97-48.77-114C394.1 34.28 328 0 257.9 0h-57.8C89.67 0 0 89.81 0 200.2c0 55.44 23.28 108.6 64 146.6V504c0 4.406 3.578 8 8 8s8-3.594 8-8V339.7l-2.65-2.4C38.36 302.24 16 252.3 16 200.2 16 98.63 98.64 16 200.2 16h57.64c64.95 0 126.1 31.75 163.6 84.94 14.94 21.25 31.86 68.5 46.78 110.2 9.141 25.53 17.78 49.69 25.66 67.34 3.359 7.562 2.688 15.91-1.844 22.88-4.516 6.938-11.86 10.94-20.13 10.94h-39.88v64c0 30.91-25.16 56.06-56.06 56.06h-72V504c0 4.406 3.578 8 8 8s8-3.594 8-8v-55.66h56c39.74 0 72.06-32.31 72.06-72.06v-48h23.88c13.58 0 26.13-6.812 33.55-18.22 7.444-11.46 8.644-25.66 3.044-38.96zM400 192c0-22.06-17.94-40-40-40s-39.1 17.94-39.1 40 17.94 40 39.1 40c22.1 0 40-17.9 40-40zm-64.9 0c0-13.22 10.77-24 24-24s23.1 10.78 23.1 24-10.76 24-23.1 24c-12.3 0-24-10.8-24-24z" />
  </svg>
);

export default SvgHeadSide;
