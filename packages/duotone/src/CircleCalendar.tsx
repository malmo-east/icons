import * as React from "react";
import { SVGProps } from "react";

const SvgCircleCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-calendar_svg__fa-primary"
      d="M192 112c0-8.8 7.2-16 16-16s16 7.2 16 16v16h64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h32c17.7 0 32 14.3 32 32v64H128v-64c0-17.7 14.3-32 32-32h32v-16z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zM208 96c-8.8 0-16 7.2-16 16v16h-32c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-32v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-64v-16c0-8.8-7.2-16-16-16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleCalendar;
