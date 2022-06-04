import * as React from "react";
import { SVGProps } from "react";

const SvgMelonSlice = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M425.1 4.688c-3-3-7.1-4.688-11.3-4.688-4.25 0-8.314 1.688-11.31 4.688l-86.13 86.13C318.7 102.9 320 115.3 320 128c0 106-85.96 192-192 192-12.73 0-25.16-1.307-37.2-3.672l-86.11 86.11C1.688 405.4 0 409.5 0 413.8s1.688 8.314 4.689 11.32C62.64 483 138.8 512 214.9 512c76.15 0 152.3-28.98 210.2-86.93 115-115.87 115-304.47 0-420.382zM102 350.4c8.6 1 17.2 1.6 26 1.6 123.5 0 224-100.5 224-224 0-8.793-.64-17.43-1.631-25.96l17.57-17.57c67.35 78.99 63.87 198.1-10.74 272.7-38.01 38.01-88.56 58.94-142.3 58.94-48.38 0-94.07-17.08-130.5-48.17L102 350.4zm300.5 52C302.94 502.02 143.1 505.7 39 413.37l22.84-22.84c42.48 37.1 96.16 57.55 153.1 57.55 62.27 0 120.8-24.26 164.9-68.32 87.11-87.11 90.54-226.4 10.74-317.1l22.86-22.86c92.26 103.2 88.66 263-10.94 362.6z" />
  </svg>
);

export default SvgMelonSlice;
