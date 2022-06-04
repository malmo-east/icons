import * as React from "react";
import { SVGProps } from "react";

const SvgClockSeven = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-seven_svg__fa-primary"
      d="M280 120v136c0 4.7-1.4 9.4-4.9 13.3l-64 96c-6.5 11-21.4 14-32.4 5.8-11-6.5-14-21.4-6.7-32.4l60-90V120c0-13.3 10.7-24 24-24s24 10.7 24 24z"
    />
    <path
      d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm-24-263.3-60 90c-7.3 11-4.3 25.9 6.7 32.4 11 8.2 25.9 5.2 32.4-5.8l64-96c3.5-3.9 4.9-8.6 4.9-13.3V120c0-13.3-10.7-24-24.9-24-12.4 0-24 10.7-24 24l.9 128.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockSeven;
