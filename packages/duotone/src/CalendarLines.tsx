import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarLines = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="calendar-lines_svg__fa-primary"
      d="M96 32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v80H0v-80c0-26.51 21.49-48 48-48h48V32zm0 264c0-13.3 10.7-24 24-24h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24zm136 72c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h112z"
    />
    <path
      d="M0 192h448v272c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V192zm120 128h208c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.3 0-24 10.7-24 24s10.7 24 24 24zm0 48c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCalendarLines;
