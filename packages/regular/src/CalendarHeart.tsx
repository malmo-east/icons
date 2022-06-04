import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M212.7 420.7 120 328c-22.09-22.1-22.09-57.9 0-80 22.1-22.1 57.9-22.1 80 0l24 24 24-24c22.1-22.1 57.9-22.1 80 0s22.1 57.9 0 80l-92.7 92.7c-6.2 6.2-16.4 6.2-22.6 0zM128 0c13.3 0 24 10.75 24 24v40h144V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24zm272 192H48v256c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V192z" />
  </svg>
);

export default SvgCalendarHeart;
