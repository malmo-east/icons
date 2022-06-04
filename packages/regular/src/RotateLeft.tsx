import * as React from "react";
import { SVGProps } from "react";

const SvgRotateLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M30.81 49.81c8.969-3.656 19.28-1.656 26.16 5.219l41.1 41.1c41.07-40.38 97.11-64.92 157.1-64.92C379.6 32.11 480 132.5 480 256S379.6 479.9 256.1 479.9c-52.31 0-103.3-18.33-143.5-51.77-10.19-8.5-11.56-23.62-3.062-33.81 8.531-10.22 23.62-11.56 33.81-3.062C174.9 417.5 214.9 432 256 432c97.03 0 176-78.97 176-176S353 80 256 80c-47.08 0-90.93 19.29-123.2 50.89l52.14 52.14c6.875 6.875 8.906 17.19 5.219 26.16C186.5 218.2 177.7 224 168 224H40c-13.25 0-24-10.7-24-24V72c0-9.72 5.84-18.47 14.81-22.19z" />
  </svg>
);

export default SvgRotateLeft;
