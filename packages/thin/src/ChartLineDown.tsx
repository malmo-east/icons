import * as React from "react";
import { SVGProps } from "react";

const SvgChartLineDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M16 408c0 30.9 25.07 56 56 56h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-39.76 0-72-32.2-72-72V40a8 8 0 0 1 8-8c4.42 0 8 3.58 8 8v368zm336-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h100.7L288 171.3l-90.3 90.4a8.15 8.15 0 0 1-11.4 0l-95.96-96a8.112 8.112 0 0 1 0-11.4c3.13-3.1 8.19-3.1 11.36 0l90.3 90.4 90.3-90.4c3.2-3.1 8.2-3.1 11.4 0L464 324.7V223.1c0-3.5 3.6-8 8-8s8 4.5 8 8V344c0 4.4-3.6 8-8 8H352z" />
  </svg>
);

export default SvgChartLineDown;
