import * as React from "react";
import { SVGProps } from "react";

const SvgSquareP = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v320zM248 128h-96c-13.2 0-24 10.8-24 24v208c0 13.3 10.8 24 24 24s24-10.75 24-24v-56h72c48.53 0 88-39.47 88-88s-39.5-88-88-88zm0 128h-72v-80h72c22.1 0 40 17.9 40 40s-17.9 40-40 40z" />
  </svg>
);

export default SvgSquareP;
