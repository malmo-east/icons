import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarDays = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 64h192V8c0-4.418 3.6-8 8-8s8 3.582 8 8v56h48c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h48V8c0-4.418 3.6-8 8-8s8 3.582 8 8v56zm304 224v-96H304v96h128zm-144-96H160v96h128v-96zm-144 0H16v96h128v-96zM16 304v96h128v-96H16zm0 112v32c0 26.5 21.49 48 48 48h80v-80H16zm144 80h128v-80H160v80zm144 0h80c26.5 0 48-21.5 48-48v-32H304v80zm128-96v-96H304v96h128zM64 80c-26.51 0-48 21.5-48 48v48h416v-48c0-26.5-21.5-48-48-48h-48v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H128v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H64zm224 224H160v96h128v-96z" />
  </svg>
);

export default SvgCalendarDays;
