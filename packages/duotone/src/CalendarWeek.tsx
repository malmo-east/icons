import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="calendar-week_svg__fa-primary"
      d="M96 32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v80H0v-80c0-26.51 21.49-48 48-48h48V32z"
    />
    <path
      d="M448 464c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V192h448v272zM80 256c-8.84 0-16 7.2-16 16v64c0 8.8 7.16 16 16 16h288c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCalendarWeek;
