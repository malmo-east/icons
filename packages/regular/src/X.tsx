import * as React from "react";
import { SVGProps } from "react";

const SvgX = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M378.4 440.6c8.531 10.16 7.203 25.28-2.938 33.81C370.9 478.2 365.5 480 360 480c-6.844 0-13.64-2.906-18.39-8.562L192 293.3 42.4 471.4c-4.77 5.7-11.57 8.6-18.42 8.6a23.874 23.874 0 0 1-15.42-5.625c-10.14-8.531-11.47-23.66-2.938-33.81L160.7 256 5.625 71.44c-8.531-10.16-7.203-25.28 2.938-33.81 10.127-8.55 25.277-7.24 33.817 2.93L192 218.7 341.6 40.6c8.547-10.17 23.67-11.47 33.81-2.938s11.47 23.66 2.938 33.81L223.3 256l155.1 184.6z" />
  </svg>
);

export default SvgX;