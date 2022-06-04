import * as React from "react";
import { SVGProps } from "react";

const SvgBullseyeArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M300.9 32.58c-1.1 1.06-2.3 2.15-3.4 3.26C284.1 33.32 270.2 32 256 32 132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224c0-14.2-1.3-28.1-3.8-41.5 1.1-1.1 2.2-2.3 3.2-3.4l22.8-25.4c6.4 22.3 9.8 45.9 9.8 70.3 0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0c24.4 0 47.1 3.406 70.3 9.768L300.9 32.58zm-25.4 72.62 4.2 25c-7.7-1.4-15.6-3.1-24.6-3.1-69.8 0-128 58.2-128 128 0 71.6 58.2 128.9 128 128.9 71.6 0 128.9-57.3 128.9-128.9 0-7.2-.8-16-2.2-22.8l25 4.2c2.7.4 5.4.7 8.1.9.7 6.1 1.1 12.3 1.1 17.7 0 89.3-71.6 160.9-160 160.9S96 344.4 96 255.1c0-87.5 71.6-160 160-160 6.3 0 12.5 1.26 18.6 1.97.2 2.71.5 5.43.9 8.13zm66 87.9-74.2 74.2c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l74.2-74.2-11.8-70.4c-2.7-16.31 3.1-32.84 15.5-43.8l48.5-43.93c14-11.652 34.8-5.759 39.8 11.05l17.9 59.73 59.8 17.95c16.8 5 22.7 25.8 11 38.9l-43.9 49.4c-11 12.4-27.5 18.2-43.8 15.5l-70.4-11.8zm27.8-27.8 47.9 8c5.4.9 10.9-1 14.6-5.1l35.6-40.1-46.8-14-51.3 51.2zm28.6-73.86-14-46.82-40.1 35.6c-4.1 3.65-6 9.16-5.1 14.58l8 47.9 51.2-51.26z" />
  </svg>
);

export default SvgBullseyeArrow;
