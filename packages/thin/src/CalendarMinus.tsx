import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M136 352c-4.4 0-8-3.6-8-8s3.6-8 8-8h176c4.4 0 8 3.6 8 8s-3.6 8-8 8H136zm-8-288h192V8c0-4.418 3.6-8 8-8s8 3.582 8 8v56h48c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h48V8c0-4.418 3.6-8 8-8s8 3.582 8 8v56zM16 448c0 26.5 21.49 48 48 48h320c26.5 0 48-21.5 48-48V192H16v256zM64 80c-26.51 0-48 21.5-48 48v48h416v-48c0-26.5-21.5-48-48-48h-48v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H128v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H64z" />
  </svg>
);

export default SvgCalendarMinus;