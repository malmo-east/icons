import * as React from "react";
import { SVGProps } from "react";

const SvgClockEight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-eight_svg__fa-primary"
      d="M255.1 96c14.2 0 24.9 10.7 24.9 24v136c0 8-4.9 15.5-10.7 19.1l-96 64c-11 8.2-25.9 5.2-33.3-5.8-7.3-11-4.3-25.9 6.7-33.3l85.3-56.8V120c0-13.3 10.7-24 24-24h-.9z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm280-136c0-13.3-10.7-24-24-24s-24 10.7-24 24v123.2L146.7 300c-11 7.4-14 22.3-6.7 33.3 7.4 11 22.3 14 33.3 5.8l96-64c5.8-3.6 10.7-11.1 10.7-20V120z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockEight;
