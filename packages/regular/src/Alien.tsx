import * as React from "react";
import { SVGProps } from "react";

const SvgAlien = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 0C100.2 0 0 87.1 0 232.5 0 344.2 134.3 457 194.9 502.4c17.25 12.88 41 12.88 58.25 0C313.8 456.1 448 344.2 448 232.5 448 87.1 347.8 0 224 0zm-.4 463.8C113.6 381.7 48 295.2 48 232.5 48 122.1 118.75 48 224 48s176 74.12 176 184.5c0 62.7-65.6 149.2-176.4 231.3zm-93.7-240.7H97.75c-8.75 0-16 7.125-16 15.1.125 44.12 35.88 79.1 80 79.1h32c8.875 0 16-7.125 16-16 .15-41.4-36.65-78.2-79.85-78.2zm222.1.9-30.25-.014c-44.13 0-80 35.87-80 79.99.125 8.875 7.375 16 16.12 16h31.88c44.25 0 80-35.87 80.13-79.1C369.9 231.1 360.9 224 352 224z" />
  </svg>
);

export default SvgAlien;
