import * as React from "react";
import { SVGProps } from "react";

const SvgDitto = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M63.99 32c-18.46 0-36.93 7.64-49.1 22.93C2.692 70.21-2.372 90.22 1.044 109.9l25.21 145.2C29.55 274.1 45.44 288 63.99 288s34.44-13.9 37.71-33l25.24-145.2c3.389-19.6-1.678-39.61-13.88-54.9C100.9 39.64 82.46 32 63.99 32zm6.21 217.6c-.63 3.6-3.3 6.4-6.21 6.4s-5.57-2.8-6.21-6.5L32.57 104.3c-1.844-10.59.83-21.33 7.357-29.51C45.42 67.96 54.19 64 63.99 64s18.57 3.957 24.09 10.89c6.51 8.15 9.19 18.9 7.36 29.41L70.2 249.6zM305.1 54.93C292.9 39.64 274.5 32 255.1 32s-36.93 7.643-49.1 22.93c-12.2 15.29-17.27 35.3-13.85 54.93l25.21 145.2C221.6 274.1 237.4 288 255.1 288s34.44-13.89 37.74-32.99l25.24-145.2c4.32-19.59-.78-39.6-12.98-54.88zM262.2 249.6c-.6 3.6-3.3 6.4-7.1 6.4s-5.572-2.766-6.211-6.465l-25.21-145.2c-1.844-10.59.83-21.33 7.357-29.51C237.4 67.96 246.2 64 255.1 64s18.57 3.957 24.09 10.89c6.506 8.152 9.188 18.9 7.361 29.46L262.2 249.6z" />
  </svg>
);

export default SvgDitto;