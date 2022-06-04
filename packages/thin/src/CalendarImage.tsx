import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M236.6 277.1c8.5-12.7 29.4-12.9 39.1.4l95.4 132.4c12.4 15.8 1.1 38.1-18.5 38.1H95.09c-19.52 0-30.87-22.1-19.53-37.9l50.94-71.4c8.6-12 26-13.5 36.5-3l19.9 19.9 53.7-78.5zm26.2 9.8c-3.3-4.4-9.9-4.3-13.1.2l-59.1 85.5c-1.4 1.9-3.5 3.2-5.9 2.5-2.3 1.1-4.7.2-6.4-1.4L151.7 347c-3.5-3.5-9.3-3.9-12.2 1l-50.92 71.4c-3.78 5.2 0 12.6 6.51 12.6H352.6c6.5 0 10.3-7.4 6.4-12.7l-96.2-132.4zM144 272c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32s14.33-32 32-32c17.7 0 32 14.3 32 32zm-32 16c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm8-288c4.4 0 8 3.582 8 8v56h192V8c0-4.418 3.6-8 8-8s8 3.582 8 8v56h48c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h48V8c0-4.418 3.6-8 8-8zm312 192H16v256c0 26.5 21.49 48 48 48h320c26.5 0 48-21.5 48-48V192zm-320-72V80H64c-26.51 0-48 21.5-48 48v48h416v-48c0-26.5-21.5-48-48-48h-48v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H128v40c0 4.4-3.6 8-8 8s-8-3.6-8-8z" />
  </svg>
);

export default SvgCalendarImage;
