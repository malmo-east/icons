import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsSpin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M257.1 95.53c-11.3 0-22.4 1.19-34 3.44v-65c11.7-1.61 22.8-2.44 34-2.44 58.2 0 111.2 22.19 151.1 58.58l29.4-29.42c10.1-10.08 27.3-2.94 27.3 11.31v105.4c0 8.8-7.2 16-16 16H343.5c-14.2 0-21.4-17.3-11.3-27.3l30.7-30.7c-28.2-24.8-65.2-39.87-105.8-39.87zM97.14 255.5c0 11.2 1.13 22 3.26 32.5H35.47c-1.54-10.6-2.33-21.4-2.33-32.5 0-57.3 21.57-109.7 57.04-149.3L60.69 76.69C50.61 66.61 57.74 49.38 71.1 49.38h106.3c8.8 0 16 7.16 16 16V170.7c0 14.3-17.3 21.4-27.3 11.4l-30.6-30.6c-23.9 28-38.36 64.3-38.36 104zm84.96 92.7-29 28.9c28 24 64.3 38.4 104 38.4 10.6 0 20.9-1 30.9-2.9v64.8c-10.1 1.4-20.4 2.1-30.9 2.1-57.3 0-109.7-22.4-149.3-57l-31.11 31.1c-10.08 10.1-27.32 2.9-27.32-11.3V336.9c0-8.8 7.17-16 16-16H170.7c13.4 0 21.4 17.2 11.4 27.3zm166.1-16 29 29c24.9-28.1 39.9-65.1 39.9-105.7 0-10.8-1-21.3-3.1-31.5h64.9c1.5 10.3 2.2 20.8 2.2 31.5 0 58.2-22.2 111.2-58.5 151.1l31 31c10.1 10.1 2.9 27.3-11.3 27.3H336.9c-8.8 0-16-7.2-16-16V343.5c0-14.2 17.2-21.4 27.3-11.3z" />
  </svg>
);

export default SvgArrowsSpin;
