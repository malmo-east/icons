import * as React from "react";
import { SVGProps } from "react";

const SvgFlower = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 170.3C480 94.03 417.1 32 341.7 32c-31.2 0-61.4 10.84-85.7 30.31C231.7 42.84 201.5 32 170.3 32 94.03 32 32 94.03 32 170.3c0 31.2 10.83 61.4 30.3 85.7C42.83 280.3 32 310.5 32 341.7 32 417.1 94.03 480 170.3 480c31.2 0 61.4-10.8 85.7-30.3 24.3 19.5 54.5 30.3 85.7 30.3 75.4 0 138.3-62.9 138.3-138.3 0-31.2-10.8-61.4-30.3-85.7 19.5-24.3 30.3-54.5 30.3-85.7zm-79.2 103.8c20.1 17.6 31.2 41.6 31.2 67.6 0 49.8-40.5 90.3-90.3 90.3-26.03 0-50.06-11.09-67.66-31.22L256 380.1l-18.06 20.66C220.3 420.9 196.3 432 170.3 432c-49.8 0-90.3-40.5-90.3-90.3 0-26.03 11.08-50.06 31.19-67.66L131.9 256l-20.7-18.1C91.08 220.3 80 196.3 80 170.3c0-49.8 40.5-90.3 90.3-90.3 26.03 0 50.06 11.09 67.66 31.22L256 131.9l18.06-20.66C291.7 91.09 315.7 80 341.7 80c49.8 0 90.3 40.5 90.3 90.3 0 26.03-11.08 50.06-31.19 67.66L380.1 256l20.7 18.1zM256 176c-44.1 0-80 35.9-80 80s35.88 80 80 80 80-35.88 80-80-35.9-80-80-80zm0 112c-17.6 0-32-14.4-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32z" />
  </svg>
);

export default SvgFlower;
