import * as React from "react";
import { SVGProps } from "react";

const SvgFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m162.3 96.4 58.8-58.74c28.1-28.121 73.7-28.121 101.8 0L474.3 189.1c28.2 28.1 28.2 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.63 363.9c-37.493-37.5-37.493-98.3 0-135.8l97.77-97.8-89.37-89.33c-9.37-9.37-9.37-24.57 0-33.941 9.37-9.372 24.57-9.372 33.94 0L162.3 96.4zM64.57 262.1c-7.33 7.3-11.8 16.4-13.39 25.9H409.4l31-31.9c9.4-8.5 9.4-23.7 0-33.1L288.1 71.6c-8.5-9.37-23.7-9.37-33.1 0l-58.7 58.7 67.8 68.7c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-68.7-67.8-97.73 97.8z" />
  </svg>
);

export default SvgFill;