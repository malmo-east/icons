import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m248 350.1 39-39.1c9.4-9.3 24.6-9.3 33.1 0 10.2 9.4 10.2 24.6 0 33.1l-80 80c-8.5 10.2-23.7 10.2-33.1 0l-80-80c-9.3-8.5-9.3-23.7 0-33.1 9.4-9.3 24.6-9.3 33.1 0l39.9 39.1V248c0-13.3 10.7-24 24-24s24 10.7 24 24v102.1zM128 0c13.3 0 24 10.75 24 24v40h144V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24zm272 192H48v256c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V192z" />
  </svg>
);

export default SvgCalendarArrowDown;