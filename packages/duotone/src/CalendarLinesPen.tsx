import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarLinesPen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="calendar-lines-pen_svg__fa-primary"
      d="M493.2 235.7c15.6-15.6 40.9-15.6 56.6 0l14.3 14.4c15.7 15.6 15.7 40.9 0 56.6l-29.4 29.4-70.9-71 29.4-29.4zm18.9 123L382.9 487.9c-4.1 4.1-9.3 7-14.9 8.4l-60.1 15.1c-5.5 1.3-11.2-.3-15.2-4.2-4-4-5.6-9.8-4.2-16.1l15-59.3c1.4-5.6 4.3-10.7 8.4-15.7l129.2-128.3 71 70.9z"
    />
    <path
      d="M96 32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v48H0v-48c0-26.51 21.49-48 48-48h48V32zm352 203.6L289.3 394.3c-8.2 8.2-14 18.5-16.8 29.8l-15.1 60.1c-2.3 9.4-1.7 19 1.4 27.8H48c-26.51 0-48-21.5-48-48V192h448v43.6zM120 320h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-13.3 0-24 10.7-24 24s10.7 24 24 24zm0 48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCalendarLinesPen;