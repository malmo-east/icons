import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="calendar-minus_svg__fa-primary"
      d="M160 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v80H0v-80c0-26.51 21.49-48 48-48h48V32c0-17.67 14.3-32 32-32s32 14.33 32 32zm-24 344c-13.3 0-24-10.7-24-24s10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H136z"
    />
    <path
      d="M448 464c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V192h448v272zm-136-88c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-13.3 0-24 10.7-24 24s10.7 24 24 24h176z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCalendarMinus;
