import * as React from "react";
import { SVGProps } from "react";

const SvgChair = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m445.1 338.6-14.77-32C425.1 295.3 413.7 288 401.2 288h-17.23l-.003-152c0-74.98-61-136-136-136h-48c-75 0-136 61.02-136 136L63.1 288H46.76c-12.48 0-23.82 7.3-29.06 18.6l-14.77 32c-4.562 9.906-3.766 21.47 2.109 30.66S21.09 384 31.1 384h15.1v120c0 4.422 3.57 8 7.977 8s8.023-3.578 8.023-8l.9-120h320l-.001 120c0 4.422 3.575 8 7.98 8s8.02-3.578 8.02-8V384h16c10.91 0 21.08-5.562 26.95-14.75s7.551-20.75 3.051-30.65zm-78-202.6v152H296l-.003-261.8C338.3 44.74 367.1 86.91 367.1 136zm-120-120c11.15 0 21.75 2.023 32 4.885V288h-48V16h16zm-32 0v272h-48V20.88c11.2-2.86 21.7-4.88 32-4.88h16zm-136 120c0-49.09 29.7-91.26 72-109.8V288h-72V136zm350.4 224.6c-3 4.6-8 7.4-14.4 7.4h-384a15.915 15.915 0 0 1-13.47-7.369 15.955 15.955 0 0 1-1.062-15.33l14.77-32C34.84 307.6 40.54 304 46.76 304h354.5c6.223 0 11.93 3.648 14.54 9.297l14.76 31.99C432.8 350.3 432.4 356 429.5 360.6z" />
  </svg>
);

export default SvgChair;