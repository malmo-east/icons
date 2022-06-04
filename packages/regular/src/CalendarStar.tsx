import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m256.9 290.7 52.8 7.7c8.5 1.2 11.9 11.7 5.7 17.7l-38.1 37.2 9 52.5c1.4 8.5-7.5 15-15.1 11L224 392l-47.2 24.8c-7.6 4-16.5-2.5-15.1-11l9-52.5-38.1-37.2c-6.2-6-2.8-16.5 5.7-17.7l52.8-7.7 23.6-47.8c3.8-7.7 14.8-7.7 18.6 0l23.6 47.8zM128 0c13.3 0 24 10.75 24 24v40h144V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24zm272 192H48v256c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V192z" />
  </svg>
);

export default SvgCalendarStar;
