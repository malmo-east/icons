import * as React from "react";
import { SVGProps } from "react";

const SvgUserShield = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="user-shield_svg__fa-primary"
      d="m622.3 271.1-115.1-45.01c-4.125-1.629-12.62-3.754-22.25 0L369.8 271.1c-10.8 4.1-17.8 14-17.8 24 0 111.6 68.75 188.8 132.9 213.9 9.625 3.75 18 1.625 22.25 0C558.4 489.9 640 420.5 640 295.1c0-10-7-19.9-17.7-24zM496 462.4V273.2l95.5 37.38C585.9 397.8 530.6 446 496 462.4z"
    />
    <path
      d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm96.6 54.3c-14.7-4-30-6.3-45.9-6.3H173.3C77.61 304 0 381.7 0 477.4 0 496.5 15.52 512 34.66 512H413.3c3.143 0 5.967-1.004 8.861-1.789C369.7 469.8 324.1 400.3 320.6 310.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUserShield;
