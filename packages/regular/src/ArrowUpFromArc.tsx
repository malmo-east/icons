import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpFromArc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 256c0-13.3 10.7-24 24-24s24 10.7 24 24c0 141.4-114.6 256-256 256S0 397.4 0 256c0-13.3 10.75-24 24-24s24 10.7 24 24c0 114.9 93.1 208 208 208s208-93.1 208-208zM238.4 7.669C242.1 2.779 249.3 0 255.1 0c7.6 0 13.9 2.779 18.5 7.669l104 112.031c9 9.7 8.4 24.9-1.3 33.9-9.7 9-24.9 8.4-33.9-1.3L280 85.12V328c0 13.3-10.7 24-24.9 24-12.4 0-24-10.7-24-24V85.12l-61.5 67.18c-9 9.7-24.2 10.3-33.9 1.3-10.6-9-10.3-24.2-1.3-33.9l104-112.031z" />
  </svg>
);

export default SvgArrowUpFromArc;
