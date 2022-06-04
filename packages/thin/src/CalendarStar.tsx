import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m262.2 299.4 53.4 7.7c13.2 1.9 17.5 18.1 8.9 27.3l-38.6 37.7 8.2 53.2c3.1 13.1-10.6 23-22.3 16.8L224 417l-47.8 25.1c-11.7 6.2-25.4-3.7-23.2-16.8l9.1-53.2-38.6-37.7c-9.5-9.2-4.3-25.4 8.9-27.3l53.4-7.7 23.9-49.3c5.8-11 22.8-11 28.6 0l23.9 49.3zM196.4 314l-61.7 8.1 44.6 44.4-10.5 60.6 55.2-29 55.2 29-10.5-60.6 44.6-44.4-61.7-8.1-28.5-55.9-26.7 55.9zM128 64h192V8c0-4.418 3.6-8 8-8s8 3.582 8 8v56h48c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h48V8c0-4.418 3.6-8 8-8s8 3.582 8 8v56zM16 448c0 26.5 21.49 48 48 48h320c26.5 0 48-21.5 48-48V192H16v256zM64 80c-26.51 0-48 21.5-48 48v48h416v-48c0-26.5-21.5-48-48-48h-48v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H128v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H64z" />
  </svg>
);

export default SvgCalendarStar;