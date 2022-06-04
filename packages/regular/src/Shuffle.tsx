import * as React from "react";
import { SVGProps } from "react";

const SvgShuffle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M424.1 287c-9.375-9.375-24.56-9.344-33.94.031s-9.375 24.56 0 33.94L430.1 360H332l-58.01-77.34-29.1 39.99 56.82 75.75c3.59 6 10.69 9.6 18.29 9.6h110.1l-39.03 39.03c-9.375 9.375-9.375 24.56 0 33.94C395.7 485.7 401.8 488 408 488s12.27-2.375 16.96-7.062l79.1-79.98c9.375-9.375 9.375-24.6 0-33.97L424.1 287zM24 152h92l58.01 77.34 29.1-39.99-55.91-75.75c-4.5-6-11.6-9.6-19.2-9.6H24c-13.25 0-24 10.8-24 24s10.75 24 24 24zm406.1 0-39.03 39.03c-9.375 9.375-9.375 24.56 0 33.94C395.7 229.7 401.8 232 408 232s12.28-2.312 16.97-7l79.1-79.98c9.375-9.375 9.374-24.6-.001-33.97l-79.1-79.98c-9.375-9.375-24.56-9.406-33.93-.031s-9.375 24.56 0 33.94L430.1 104H320a23.993 23.993 0 0 0-19.19 9.594L116 360H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h104c7.562 0 14.66-3.562 19.19-9.594L332 152h98.1z" />
  </svg>
);

export default SvgShuffle;
