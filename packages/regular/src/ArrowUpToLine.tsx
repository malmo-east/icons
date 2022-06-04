import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M24 80.03h336c13.25 0 24-10.76 24-24.02S373.3 32 360 32H24C10.75 32 0 42.76 0 56.02s10.75 24.01 24 24.01zM81.47 304.2 168 212.1v243.8c0 13.3 10.8 24.1 24 24.1s24-10.77 24-24.04V212.1l86.53 92.05c4.77 5.05 11.07 7.55 17.47 7.55 5.906 0 11.81-2.16 16.44-6.541 9.656-9.076 10.12-24.29 1.031-33.96l-128-136.2c-9.062-9.702-25.88-9.702-34.94 0L46.53 271.2c-9.09 9.7-8.62 24.9 1.03 34 9.63 9.1 24.82 8.7 33.91-1z" />
  </svg>
);

export default SvgArrowUpToLine;
