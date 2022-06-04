import * as React from "react";
import { SVGProps } from "react";

const SvgRotate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M481.2 33.81c-8.938-3.656-19.31-1.656-26.16 5.219l-50.51 50.51C364.3 53.81 312.1 32 256 32 157 32 68.53 98.31 40.91 193.3c-3.72 12.7 3.59 26 16.31 29.7 12.81 3.781 26.06-3.625 29.75-16.31C108.7 132.1 178.2 80 256 80c43.12 0 83.35 16.42 114.7 43.4l-59.63 59.63c-6.875 6.875-8.906 17.19-5.219 26.16a24.008 24.008 0 0 0 22.19 14.81h143.9C485.2 223.1 496 213.3 496 200V56c0-9.72-5.8-18.47-14.8-22.19zM454.7 288.1c-12.78-3.75-26.06 3.594-29.75 16.31C403.3 379.9 333.8 432 255.1 432c-43.12 0-83.38-16.42-114.7-43.41l59.62-59.62c6.875-6.875 8.891-17.03 5.203-26C202.4 294 193.7 288 183.1 288H40.05c-13.25 0-24.11 10.74-24.11 23.99v144c0 9.719 5.844 18.47 14.81 22.19 2.97 1.22 6.09 1.82 9.19 1.82 6.25 0 12.38-2.438 16.97-7.031l50.51-50.52C147.6 458.2 199.9 480 255.1 480c99 0 187.4-66.31 215.1-161.3 4.6-13.6-2.8-26-15.5-30.6z" />
  </svg>
);

export default SvgRotate;
