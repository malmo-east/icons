import * as React from "react";
import { SVGProps } from "react";

const SvgSquareUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.35-28.7-64-64-64zm-53.5 291.9c0 6.473-3.889 12.3-9.877 14.78a15.997 15.997 0 0 1-17.44-3.469l-45.25-45.25-67.92 67.92c-12.5 12.5-32.72 12.46-45.21-.041l-22.63-22.63C109.7 322.7 109.6 302.5 122.1 289.1l67.92-67.92-45.22-44.38c-4.6-4.6-6-11.5-3.5-17.4a15.988 15.988 0 0 1 14.78-9.875h158.4c8.835 0 15.1 7.163 15.1 15.1V323.9z" />
  </svg>
);

export default SvgSquareUpRight;
