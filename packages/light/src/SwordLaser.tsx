import * as React from "react";
import { SVGProps } from "react";

const SvgSwordLaser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m268.7 315.5-86.4-86.4c-3.125-3.125-8.249-3.125-11.37 0l-11.33 11.4a7.922 7.922 0 0 0 0 11.25l5.625 5.75-56.625 55.6-1.1-.2c-3.125-3.125-8.249-3.125-11.37 0l-80.12 80.12c-21.37 21.37-21.37 55.87 0 77.24l25.75 25.75c21.37 21.37 55.87 21.37 77.24 0l80.12-80.12c3.125-3.125 3.125-8.249 0-11.37l56.62-56.5 5.615 5.631c3.125 3.125 8.259 3.119 11.38-.006l11.25-11.37a7.922 7.922 0 0 0 0-11.25L268.7 315.5zM96.4 473.3c-8.874 8.874-23.12 8.874-31.1 0l-25.75-25.75c-8.874-8.874-8.874-23.12 0-31.1l63.25-63.25 57.62 57.75L96.4 473.3zm80.1-91.4-45.25-45.25 11.37-11.25 45.25 45.25-11.37 11.25zm22.6-22.7-45.2-46.1 11.37-11.25 45.25 45.25-11.42 12.1zm22.7-22.6-45.3-45.2 11.37-11.25 45.25 45.25-11.32 11.2zM502.4 11.1C495.9 4.75 486.8.5 477 0h-.75c-9.374 0-18.5 3.375-25.62 9.624L232.3 210.3c-6.7 6.1-7 16.6-.5 23.1 6.058 6.057 15.87 6.32 22.18.523l218.2-200.5C473.3 32.5 474.6 31.1 476 31.1c1 .125 2.125.625 2.75 1.5 1.625 1.625 1.75 4.375.125 6.125l-200.8 218.4c-5.798 6.307-5.592 16.06.466 22.12 6.43 6.429 16.92 6.21 23.07-.484l200.8-218.4C515.2 47.25 515.1 25.87 502.4 11.1z" />
  </svg>
);

export default SvgSwordLaser;