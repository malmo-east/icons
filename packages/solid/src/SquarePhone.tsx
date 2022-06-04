import * as React from "react";
import { SVGProps } from "react";

const SvgSquarePhone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-32.4 289.5-11.62 50.39c-1.633 7.125-7.9 12.11-15.24 12.11-126.1 0-228.7-102.6-228.7-228.8 0-7.328 4.984-13.59 12.11-15.22l50.38-11.63c7.344-1.703 14.88 2.109 17.93 9.062l23.27 54.28a15.642 15.642 0 0 1-4.492 18.22L168.3 232c16.99 34.61 45.14 62.75 79.77 79.75l22.02-26.91c4.344-5.391 11.85-7.25 18.24-4.484l54.24 23.25c6.93 2.994 10.73 10.594 9.03 17.894z" />
  </svg>
);

export default SvgSquarePhone;
