import * as React from "react";
import { SVGProps } from "react";

const SvgUnlock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 192h240c44.2 0 80 35.8 80 80v160c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V272c0-44.2 35.82-80 80-80h16v-64C96 57.31 153.3 0 224 0c58 0 106.1 38.57 122.7 91.44 2.5 8.47-2.3 17.36-10.8 19.86-8.4 2.6-17.4-2.3-19.9-10.7C304.2 60.9 267.5 32 224 32c-53.9 0-96 42.98-96 96v64zM32 432c0 26.5 21.49 48 48 48h288c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48H80c-26.51 0-48 21.5-48 48v160z" />
  </svg>
);

export default SvgUnlock;
