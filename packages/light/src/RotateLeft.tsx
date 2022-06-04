import * as React from "react";
import { SVGProps } from "react";

const SvgRotateLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256.1 32.11c-52.22 0-103.2 18.27-143.2 51.58-1.3 1.04-2.1 2.34-3 3.63L59.31 36.69c-4.562-4.562-11.5-5.875-17.44-3.469A16.012 16.012 0 0 0 32 48v128c0 8.8 7.16 16 16 16h128c6.469 0 12.31-3.906 14.78-9.875s1.094-12.88-3.469-17.44L131.8 109.1c.496-.328 1.076-.445 1.541-.836C167.7 79.72 211.3 64 256 64c105.9 0 192 86.13 192 192s-86.13 192-192 192c-59.47 0-114.7-26.91-151.4-73.88-5.469-6.969-15.5-8.219-22.47-2.719-6.938 5.438-8.157 15.5-2.719 22.47 42.81 54.72 107.3 86.02 176.7 86.02C379.6 479.9 480 379.5 480 256S379.6 32.11 256.1 32.11zM64 160V86.63L137.4 160H64z" />
  </svg>
);

export default SvgRotateLeft;