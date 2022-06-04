import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarPen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M250.4 235.3c18.7-18.7 49.1-18.7 67.8 0l6.5 6.5c18.7 18.7 18.7 49.1 0 67.8L201.6 432.7c-4.2 4.2-9.6 7.2-15.4 8.5L136 452.7c-17.2 4-32.7-11.5-28.7-29.6l11.5-49.3c1.3-6.7 4.3-11.2 8.5-15.4l123.1-123.1zm45.2 22.6c-6.2-6.2-16.4-6.2-23.5 0l-11.3 12.3 29 29 12.3-12.2c6.2-6.2 6.2-16.4 0-22.6l-6.5-6.5zm-28.4 63.9-29-29-89.1 87.3-7.8 38.6L179 410l88.2-88.2zM112 0c8.8 0 16 7.164 16 16v48h192V16c0-8.836 7.2-16 16-16s16 7.164 16 16v48h32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h32V16c0-8.836 7.2-16 16-16zm304 192H32v256c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V192zm-32-96H64c-17.67 0-32 14.3-32 32v32h384v-32c0-17.7-14.3-32-32-32z" />
  </svg>
);

export default SvgCalendarPen;
