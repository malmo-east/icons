import * as React from "react";
import { SVGProps } from "react";

const SvgRhombus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M9.55 230.1 193.6 14.06C201.2 5.14 212.3 0 224 0s22.9 5.14 30.4 14.06l184 216.04c12.8 14.9 12.8 36 0 51.8l-184 216c-7.6 9-18.7 14.1-30.4 14.1s-22.8-5.1-30.4-14.1L9.55 281.9c-12.733-15.8-12.733-36.9 0-51.8zM224 52.34 50.51 256 224 459.7 397.5 256 224 52.34z" />
  </svg>
);

export default SvgRhombus;
