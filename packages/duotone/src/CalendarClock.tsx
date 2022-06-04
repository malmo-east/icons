import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="calendar-clock_svg__fa-primary"
      d="M160 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v80H0v-80c0-26.51 21.49-48 48-48h48V32c0-17.67 14.3-32 32-32s32 14.33 32 32zm416 336c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-160.9-64v64c0 8.8 8.1 16 16 16H480c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32.9v-48c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16z"
    />
    <path
      d="M256 368c0 59.5 29.6 112.1 74.8 144H48c-26.51 0-48-21.5-48-48V192h432c-97.2 0-176 78.8-176 176zm192-176v.7c-5.3-.5-10.6-.7-16-.7h16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCalendarClock;