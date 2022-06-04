import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M172.6 328.9 184 344l58.3-84.2c6.5-9.4 20.5-9.1 26.6.5l83.5 131.1c6.7 10.7-.9 24.6-13.5 24.6H112.5c-13.28 0-20.78-15.2-12.69-25.8l47.39-61.5c6.4-8.4 19.1-8.3 25.4.2zM96 256c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm56-192h144V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40zM48 448c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V192H48v256z" />
  </svg>
);

export default SvgCalendarImage;