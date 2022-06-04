import * as React from "react";
import { SVGProps } from "react";

const SvgSquareBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M281.6 131.2c5.9 4.4 8 12.3 5.1 19.1L248.3 240H312c6.8 0 12.8 4.2 15.1 10.6 2.2 5.5.3 13.5-4.9 17.8l-136 112c-5.7 4.6-13.9 4.8-19.8.4-5.9-4.4-8-12.3-5.1-19.1l38.4-90.6H136c-6.8 0-12.8-3.3-15.1-9.7-2.2-6.4-.3-13.5 4.9-17.8l136-112c5.7-5.5 13.9-4.8 19.8-.4zM0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm48 0v320c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16z" />
  </svg>
);

export default SvgSquareBolt;