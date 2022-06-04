import * as React from "react";
import { SVGProps } from "react";

const SvgDitto = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M63.99 32c-18.46 0-36.93 7.64-49.1 22.93C2.692 70.21-2.372 90.22 1.044 109.9l25.21 145.2C29.55 274.1 45.44 288 63.99 288s34.44-13.9 37.71-33l25.24-145.2c3.389-19.6-1.678-39.61-13.88-54.9C100.9 39.64 82.46 32 63.99 32zm-.89 159.8-14.77-90.2c-1.057-6.08.428-12.19 4.113-16.8C56.01 80.35 62.18 80 63.99 80s7.982.348 11.58 4.871c3.66 4.579 5.15 10.689 4.11 16.729L63.1 191.8zm242-136.87C292.9 39.64 274.5 32 255.1 32s-36.93 7.643-49.1 22.93c-12.2 15.29-17.27 35.3-13.85 54.93l25.21 145.2C221.6 274.1 237.4 288 255.1 288s34.44-13.89 37.74-32.99l25.24-145.2c4.32-19.59-.78-39.6-12.98-54.88zm-50 136.87-15.67-90.19c-1.057-6.08.428-12.19 4.113-16.8C248 80.35 254.2 80 255.1 80s7.982.348 11.58 4.871c3.654 4.578 5.148 10.69 4.104 16.73L255.1 191.8z" />
  </svg>
);

export default SvgDitto;