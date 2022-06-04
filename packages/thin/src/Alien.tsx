import * as React from "react";
import { SVGProps } from "react";

const SvgAlien = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M117.1 211.1h-36c-9.08 0-17.1 8.9-17.1 18 0 49.64 40.36 89.99 89.1 89.99h36c10 .01 18.9-7.99 18.9-17.99 0-48.8-40.4-90-90.9-90zm72 92h-36c-39.9 0-73.1-32.3-73.1-74 0-1.141.86-2 1.999-2h36c40.801 0 74.001 34.1 74.001 74 0 2-.9 2-2.9 2zm176-92h-36c-48.7 0-89.1 41.2-89.1 90 0 9.984 7.891 17.1 17.87 17.1h36.12c49.61.9 90.01-38.6 90.01-89.1 0-9.1-8.9-18-18.9-18zm-72 92h-36c-.2 0-1.1 0-1.1-2 0-40.8 33.2-73.99 73.1-73.99h36c1.141 0 2.001.86 2.001 2C368 270.8 334.8 303.1 293.1 303.1zM224 0C100.2 0 0 87.1 0 232.5 0 344.2 134.3 457 194.9 502.4c8.6 6.4 18.9 9.6 29.1 9.6s20.5-3.219 29.12-9.656C313.8 456.1 448 344.2 448 232.5 448 87.1 347.8 0 224 0zm19.6 489.5c-5.7 4.3-12.5 6.5-19.6 6.5s-13.88-2.24-19.54-6.465C147.8 447.1 16 337.2 16 232.5 16 105 101.53 16 224 16s208 89.02 208 216.5c0 104.7-131.8 214.6-188.4 257z" />
  </svg>
);

export default SvgAlien;