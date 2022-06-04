import * as React from "react";
import { SVGProps } from "react";

const SvgClockFive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-five_svg__fa-primary"
      d="M255.1 96c14.2 0 24.9 10.7 24.9 24v128.7l59.1 90c8.2 11 5.2 25.9-5.8 32.4-11 8.2-25.9 5.2-33.3-5.8l-64-96c-2.6-3.9-4-8.6-4-13.3V120c0-13.3 10.7-24 24-24h-.9z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm280-136c0-13.3-10.7-24-24-24s-24 10.7-24 24v136c0 4.7 1.4 9.4 4 13.3l64 96c7.4 11 22.3 14 33.3 5.8 11-6.5 14-21.4 5.8-32.4l-59.1-90V120z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockFive;
