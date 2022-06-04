import * as React from "react";
import { SVGProps } from "react";

const SvgBedEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M528 192H16V40c0-4.41-3.58-8-8-8s-8 3.59-8 8v432c0 4.4 3.578 8 8 8s8-3.594 8-8v-56h608v56c0 4.406 3.578 8 8 8s8-3.6 8-8V304c0-61.9-50.1-112-112-112zm96 208H16v-64h608v64zm0-80H16V208h512c52.93 0 96 43.06 96 96v16z" />
  </svg>
);

export default SvgBedEmpty;
