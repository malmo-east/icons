import * as React from "react";
import { SVGProps } from "react";

const SvgSquarePen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm-58.2 107.7c-15.7-15.6-41-15.6-56.6 0l-21.4 21.4 70.9 71 21.4-21.4c15.7-15.7 15.7-41 0-56.6l-14.3-14.4zM111.5 303.8l-15.02 59.3c-1.37 6.3.23 12.1 4.22 16.1 4 3.9 9.7 5.5 15.2 4.2l60.1-15.1c5.6-1.4 10.8-4.3 14.9-8.4l105.2-105.2-71-70.9-105.2 104.3c-4.1 5-7 10.1-8.4 15.7z" />
  </svg>
);

export default SvgSquarePen;
