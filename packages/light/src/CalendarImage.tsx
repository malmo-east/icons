import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M230 265.4c12.6-18.1 39.2-19.3 52.2-.6l96.3 132.4c15.3 21.1.2 50.8-25.9 50.8H95.09c-26.03 0-41.17-29.4-26.04-50.6L120 326.1c11.5-17 34.7-18 48.7-4.1l13.1 13.1 48.2-69.7zM352.6 416l-96.3-132.4-59.1 85.5c-2.7 3.9-7 6.4-11.8 6.8-4.7.5-9.4-1.2-12.7-4.6L146 344.7 95.09 416H352.6zM72 256c0-13.3 10.75-24 24-24 13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.25 0-24-10.7-24-24zM112 0c8.8 0 16 7.164 16 16v48h192V16c0-8.836 7.2-16 16-16s16 7.164 16 16v48h32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h32V16c0-8.836 7.2-16 16-16zm304 192H32v256c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V192zm-32-96H64c-17.67 0-32 14.3-32 32v32h384v-32c0-17.7-14.3-32-32-32z" />
  </svg>
);

export default SvgCalendarImage;