import * as React from "react";
import { SVGProps } from "react";

const SvgBahtSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M144 8v56h28c55.2 0 100 44.8 100 100 0 36.5-19.5 68.4-48.7 85.9 46 9 80.7 49.5 80.7 98.1 0 55.2-44.8 100-100 100h-60v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56H53.57C32.82 448 16 431.2 16 410.4V97.39C16 78.95 30.95 64 49.39 64H128V8c0-4.418 3.6-8 8-8s8 3.582 8 8zm-16 72H49.39C39.79 80 32 87.79 32 97.39V248h96V80zm44 168c46.4 0 84-37.6 84-84s-37.6-84-84-84h-28v168h28zm-44 16H32v146.4c0 11.9 9.66 21.6 21.57 21.6H128V264zm76 168c46.4 0 84-37.6 84-84s-37.6-84-84-84h-60v168h60z" />
  </svg>
);

export default SvgBahtSign;
