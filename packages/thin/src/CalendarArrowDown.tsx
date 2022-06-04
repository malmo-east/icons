import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m232 404.7 74.3-74.4c3.2-3.1 8.2-3.1 11.4 0 3.1 3.2 3.1 8.2 0 11.4l-88 88a8.15 8.15 0 0 1-11.4 0l-88-88a8.15 8.15 0 0 1 0-11.4c3.2-3.1 8.2-3.1 11.4 0l73.4 74.4V248c0-4.4 4.5-8 8-8 5.3 0 8.9 3.6 8.9 8v156.7zM128 64h192V8c0-4.418 3.6-8 8-8s8 3.582 8 8v56h48c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h48V8c0-4.418 3.6-8 8-8s8 3.582 8 8v56zM16 448c0 26.5 21.49 48 48 48h320c26.5 0 48-21.5 48-48V192H16v256zM64 80c-26.51 0-48 21.5-48 48v48h416v-48c0-26.5-21.5-48-48-48h-48v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H128v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H64z" />
  </svg>
);

export default SvgCalendarArrowDown;
