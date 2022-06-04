import * as React from "react";
import { SVGProps } from "react";

const SvgHeartHalfStroke = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M241.8 94.2 256 112l14.2-17.8c29.9-38.4 79.9-57.19 128.4-49.1C464 56.01 512 112.6 512 179v11.9c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.59 300.4C17.23 272.1 0 232.4 0 190.9V179C0 112.6 47.98 56.01 113.4 45.1c48.5-8.09 97.6 10.69 128.4 49.1zm22.2 33.4v335.1c3.2-1.1 6.2-2.9 8.8-5.3l180.7-168.7c27.1-25.3 42.5-61.6 42.5-97.8V179c0-58.5-42.3-108.5-100.1-118.12-42.8-7.13-86.1 9.44-113.2 43.32L264 127.6zm-16 0-18.7-23.4c-27.1-33.88-70.4-50.45-113.2-43.32C58.32 70.5 16 120.5 16 179v11.9c0 36.2 15.39 72.5 42.51 97.8L239.2 457.4c2.6 2.4 5.6 4.2 8.8 5.3V127.6z" />
  </svg>
);

export default SvgHeartHalfStroke;
