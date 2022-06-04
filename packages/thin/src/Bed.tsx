import * as React from "react";
import { SVGProps } from "react";

const SvgBed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M528 128H288c-8.8 0-16 7.2-16 16v176H16V40c0-4.41-3.58-8-8-8s-8 3.59-8 8v432c0 4.4 3.578 8 8 8s8-3.594 8-8v-56h608v56c0 4.406 3.578 8 8 8s8-3.6 8-8V240c0-61.9-50.1-112-112-112zm96 272H16v-64h608v64zm0-80H288V144h240c52.93 0 96 43.06 96 96v80zm-480-32c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.88 80 80 80zm0-144c35.29 0 64 28.71 64 64s-28.71 64-64 64-64-28.71-64-64 28.7-64 64-64z" />
  </svg>
);

export default SvgBed;
