import * as React from "react";
import { SVGProps } from "react";

const SvgBitcoinSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M80 8a8 8 0 0 1 8-8 8 8 0 0 1 8 8v56h64V8c0-4.418 3.6-8 8-8s8 3.582 8 8v56.08c53.4 2.1 96 46.02 96 99.92 0 36.5-19.5 68.4-48.7 85.9 46 9 80.7 49.5 80.7 98.1 0 55.2-44.8 100-100 100h-28v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56H96v56c0 4.4-3.58 8-8 8s-8-3.6-8-8v-56H53.57C32.82 448 16 431.2 16 410.4V97.39C16 78.95 30.95 64 49.39 64H80V8zM32 97.39V248h140c46.4 0 84-37.6 84-84s-37.6-84-84-84H49.39C39.79 80 32 87.79 32 97.39zM32 264v146.4c0 11.9 9.66 21.6 21.57 21.6H204c46.4 0 84-37.6 84-84s-37.6-84-84-84H32z" />
  </svg>
);

export default SvgBitcoinSign;
