import * as React from "react";
import { SVGProps } from "react";

const SvgAlarmSnooze = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m160 25.4-145.14 121C5.452 131.6 0 114.1 0 95.24 0 42.64 42.64 0 95.24 0 120.2 0 143 9.638 160 25.4zM312 192c9.2 0 17.5 5.2 21.6 13.5 4 8.2 3 18-2.7 25.2L249.1 336H312c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-9.2 0-17.5-5.2-21.6-13.5-4-8.2-3-18 2.7-25.2l81.8-106.2H200c-13.3 0-24-9.8-24-24 0-12.4 10.7-24 24-24l112 .9zM115.5 462.5l-42.53 41.6c-9.37 10.2-24.57 10.2-33.94 0-9.37-8.5-9.37-23.7 0-33.1l42.51-42.5C50.55 390.1 32 341.2 32 288 32 164.3 132.3 64 256 64s224 100.3 224 224c0 53.2-18.6 102.1-49.5 140.5l41.6 42.5c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-42.5-41.6C358.1 493.4 309.2 512 256 512s-102.1-18.6-140.5-49.5zM256 464c97.2 0 176-78.8 176-176s-78.8-176-176-176S80 190.8 80 288s78.8 176 176 176zm241.1-317.6L352 25.4C368.1 9.638 391.8 0 416.8 0 469.4 0 512 42.64 512 95.24c0 18.76-5.5 36.36-14.9 51.16z" />
  </svg>
);

export default SvgAlarmSnooze;