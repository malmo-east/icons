import * as React from "react";
import { SVGProps } from "react";

const SvgUserVisor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M105 174.6c18.8 47.6 64.8 81.4 119 81.4s100.2-33.77 118.1-81.39c15-3.21 25.9-15.31 25.9-30.61V80c0-17.62-14.38-32-32-32h-12.85C299.8 19 264.3 0 224 0s-75.8 19-99.2 48H112c-17.62 0-32 14.38-32 32v64c0 15.3 10.91 27.4 25 30.6zM128 96h192v32H128V96zm146.7 208H173.3C77.61 304 0 381.6 0 477.3 0 496.5 15.52 512 34.66 512H413.3c19.2 0 34.7-15.5 34.7-34.7 0-95.7-77.6-173.3-173.3-173.3zm78.6 159.9c-.4.1-.9.1-1.3.1-1.25 0-2.5-.625-3.25-1.625-12.25-17.25-17.62-23-19.88-25-.5 0-.875.125-1.375.375-3.25 1-12.25 5.5-37 24.75-1.375 1-3 1.125-4.5.375C284.6 462.1 283.9 460.5 284 459c3.875-36.5 15.88-66.5 35.75-89.5.75-.9 1.85-1.5 3.15-1.5 1.25.125 2.375.625 3 1.625 18.88 24.62 29 55 30.12 90.25-.02 1.925-1.02 3.425-2.72 4.025z" />
  </svg>
);

export default SvgUserVisor;
