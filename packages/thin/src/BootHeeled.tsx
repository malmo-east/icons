import * as React from "react";
import { SVGProps } from "react";

const SvgBootHeeled = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M488 496h-7.996v-48.45a64 64 0 0 0-35.38-57.24l-121.2-60.62a64 64 0 0 1-35.38-57.24V32c0-17.67-14.33-32-32-32h-192C44.76 0 29.87 16.87 32.25 35.97l24.44 161.5c4.816 38.53.943 77.66-11.34 114.5A260.128 260.128 0 0 0 32 394.21L31.998 432c0 .004 0-.004 0 0L32 488c0 13.2 10.78 24 24 24h80c13.2 0 24-10.8 24-24v-39.5l110.8 55.78c10 5.02 21.2 7.72 32.4 7.72H488c4.406 0 8-3.594 8-8s-3.6-8-8-8zm-344-8c0 4.406-3.594 8-8 8H56c-4.406 0-8-3.594-8-8l.004-48h89.53c2.28 0 4.5.313 6.469.844V488zm159.2 8c-8.688 0-17.41-2.062-25.16-6l-124.1-62.88C148.1 425.1 142.9 424 137.5 424H48v-29.8c0-26.28 4.215-52.24 12.53-77.18 12.95-38.86 17.12-80.89 11.98-121.1L48.13 33.98c-.58-4.61.8-9.08 3.88-12.57S59.35 16 64 16h64v232c0 4.4 3.6 8 8 8s8-3.6 8-8V16h112c8.822 0 16 7.178 16 16v240.4c0 30.5 16.95 57.92 44.22 71.55l121.2 60.62c16.37 8.184 26.53 24.63 26.53 42.93V496H303.2z" />
  </svg>
);

export default SvgBootHeeled;
