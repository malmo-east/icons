import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="calendar-arrow-up_svg__fa-primary"
      d="M160 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v80H0v-80c0-26.51 21.49-48 48-48h48V32c0-17.67 14.3-32 32-32s32 14.33 32 32zm88 392c0 13.3-10.7 24-24 24s-24-10.7-24-24V321.9l-39.9 38.2c-8.5 10.2-23.7 10.2-33.1 0-9.3-8.5-9.3-23.7 0-33.1l80-80c9.4-9.3 24.6-9.3 33.1 0l80 80c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-39-38.2V424z"
    />
    <path
      d="M448 464c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V192h448v272zM287 360.1c9.4 10.2 24.6 10.2 33.1 0 10.2-8.5 10.2-23.7 0-33.1l-80-80c-8.5-9.3-23.7-9.3-33.1 0l-80 80c-9.3 9.4-9.3 24.6 0 33.1 9.4 10.2 24.6 10.2 33.1 0l39.9-38.2V424c0 13.3 10.7 24 24 24s24-10.7 24-24V321.9l39 38.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCalendarArrowUp;
