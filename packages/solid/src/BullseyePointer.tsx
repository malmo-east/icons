import * as React from "react";
import { SVGProps } from "react";

const SvgBullseyePointer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 448c106 0 192-86 192-192 0-106.9-86-192-192-192-106.9 0-192 85.1-192 192 0 3.9.12 7.8.35 11.7L1.754 286.1C.596 276.2 0 266.2 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256c-10.2 0-20.2-.6-30.1-1.8l18.4-62.6c3.9.3 7.8.4 11.7.4zm22-115.1c33.5-9.5 58-40.4 58-76.9 0-44.2-35.8-80-80-80-36.5 0-67.4 24.5-76.9 57.1L112 253.7c1.2-78.5 65.2-142.6 144-142.6 79.5 0 144 65.4 144 144 0 79.7-63.2 143.7-141.7 144l19.7-66.2zM39.01 308.5l204.89-60.2c12.1-3.6 23.4 6.8 19.8 19.8l-60.2 204c-4.1 14.8-23.2 16.5-29.7 3.5l-28.6-57.3c-.7-2.2-1.6-2.6-2.6-3.7l-87.97 88c-12.5 12.5-32.76 12.5-45.257 0s-12.497-32.7 0-45.2l87.987-88c-1.1-1-2.34-1.9-3.68-2.6l-57.31-28.6c-12.99-6.5-11.3-25.6 2.64-29.7z" />
  </svg>
);

export default SvgBullseyePointer;
