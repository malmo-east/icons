import * as React from "react";
import { SVGProps } from "react";

const SvgPaperPlane = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M501.6 4.186a24.105 24.105 0 0 0-25.44-1.063L12.12 267.1C4.184 271.7-.504 280.3.043 289.4c.547 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46 98.56 41.4a24.044 24.044 0 0 0 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094a23.936 23.936 0 0 0 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2 182.2 328.1 78.23 284.7 369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zm189.7-22.1-176.6-74.19 224.6-249.5-48 323.69z" />
  </svg>
);

export default SvgPaperPlane;
