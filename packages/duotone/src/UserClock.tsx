import * as React from "react";
import { SVGProps } from "react";

const SvgUserClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="user-clock_svg__fa-primary"
      d="M496 224c-79.63 0-144 64.38-144 144s64.38 144 144 144 144-64.38 144-144-64.4-144-144-144zm48 160h-54.25c-5.35 0-9.75-4.4-9.75-9.7V304c0-8.836 7.164-16 16-16 8.838 0 16 7.164 16 16v48h32c8.838 0 16 7.164 16 15.1s-7.2 16.9-16 16.9z"
    />
    <path
      d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm96 112c0-19.3 3.221-37.82 8.961-55.2C311.9 307.2 293.6 304 274.7 304H173.3C77.61 304 0 381.7 0 477.4 0 496.5 15.52 512 34.66 512H395c-45.3-31.8-75-84.4-75-144z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUserClock;
