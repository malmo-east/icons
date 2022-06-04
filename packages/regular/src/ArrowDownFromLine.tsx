import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownFromLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M24 80.03h336c13.25 0 24-10.76 24-24.02S373.3 32 360 32H24C10.75 32 0 42.76 0 56.02s10.75 24.01 24 24.01zM302.5 303.7l-86.5 92V152.1c0-13.26-10.75-24.05-24-24.05s-24 10.75-24 24.05v243.6l-86.53-91.97c-4.72-5.03-11.09-7.53-17.47-7.53-5.906 0-11.81 2.158-16.44 6.536-9.656 9.069-10.12 24.27-1.031 33.93l127.1 136.1c9.062 9.694 25.88 9.694 34.94 0l128-136.1c9.094-9.663 8.625-24.86-1.031-33.93C326.8 293.6 311.6 294 302.5 303.7z" />
  </svg>
);

export default SvgArrowDownFromLine;