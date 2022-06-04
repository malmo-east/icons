import * as React from "react";
import { SVGProps } from "react";

const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M416 256c0 70.7-57.3 128-128 128s-128-57.3-128-128 57.3-128 128-128 128 57.3 128 128zm-128-96c-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96 53 0 96-43 96-96 0-53.9-43-96-96-96zm192.6-47.4c46.8 43.4 78.1 94.5 92.9 131.1 3.3 7.9 3.3 16.7 0 24.6-14.8 35.7-46.1 86.8-92.9 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.58-80.6C48.62 355.1 17.34 304 2.461 268.3a31.967 31.967 0 0 1 0-24.6C17.34 207.1 48.62 156 95.42 112.6 142.5 68.84 207.2 32 288 32c80.8 0 145.5 36.84 192.6 80.6zM32 256c13.33 32 42.13 80 85.2 120 43.1 40 100.4 72 170.8 72s127.7-32 170.8-72c43.1-40 71.9-88 85.2-120-13.3-32.9-42.1-80.9-85.2-120C415.7 95.99 358.4 64 288 64s-127.7 31.99-170.8 72C74.13 175.1 45.33 223.1 32 256z" />
  </svg>
);

export default SvgEye;
