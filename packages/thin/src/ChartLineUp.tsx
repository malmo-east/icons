import * as React from "react";
import { SVGProps } from "react";

const SvgChartLineUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M16 408c0 30.9 25.07 56 56 56h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-39.76 0-72-32.2-72-72V40a8 8 0 0 1 8-8c4.42 0 8 3.58 8 8v368zm456-280c4.4 0 8 3.6 8 8v120c0 4.4-3.6 8-8 8s-8-3.6-8-8V155.3L293.7 325.7a8.15 8.15 0 0 1-11.4 0L192 235.3l-90.3 90.4c-3.17 3.1-8.23 3.1-11.36 0a8.112 8.112 0 0 1 0-11.4l95.96-96c3.2-3.1 8.2-3.1 11.4 0l90.3 90.4 164.7-165.6H352c-4.4 0-8-2.7-8-8 0-3.5 3.6-8 8-8l120 .9z" />
  </svg>
);

export default SvgChartLineUp;
