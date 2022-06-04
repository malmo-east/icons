import * as React from "react";
import { SVGProps } from "react";

const SvgWhistle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m627.7 326.8-136.2-106L448 248l-32-24 22.27-44.55-98.62-76.7C307.5 78.43 267.4 64 224 64c-38.9 0-74.9 11.63-105.2 31.46C107.7 76.7 87.41 64 63.1 64 28.65 64 0 92.65 0 128c0 28.46 18.7 52.31 44.4 60.62C36.51 209.6 31.1 232.3 31.1 256c0 106 85.96 192 192 192 63.65 0 119.9-31.1 154.8-78.8l150.9 75.43c5.5 2.27 10.3 3.37 15.2 3.37 8.281 0 16.47-3.219 22.63-9.375l64-64c6.5-6.5 9.875-15.44 9.312-24.62C639.4 340.8 634.9 332.4 627.7 326.8zM79.66 129.7c-3.74 4.2-7.27 8.7-10.63 12.4-1.61 1.4-3.25 1.9-5.93 1.9-7.92 0-16-7.2-16-16s7.178-16 16-16 16 7.2 16 16c0 .6.62 1.1.56 1.7zM224 320c-35.35 0-64-28.66-64-64 0-35.35 28.65-64 64-64s64 28.65 64 64c0 35.3-28.7 64-64 64z" />
  </svg>
);

export default SvgWhistle;
