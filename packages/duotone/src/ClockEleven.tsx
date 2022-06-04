import * as React from "react";
import { SVGProps } from "react";

const SvgClockEleven = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-eleven_svg__fa-primary"
      d="M280 120v136c0 10.6-6.9 19.9-17.9 22.1-9.3 3.9-20.2 0-26.1-8.8l-64-96c-7.3-11-4.3-25.9 6.7-33.3 11-7.3 25.9-4.3 32.4 6.7l20 30V120c0-13.3 11.6-24 24-24 14.2 0 24.9 10.7 24.9 24z"
    />
    <path
      d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm-24-335.3-20.9-30c-6.5-11-21.4-14-32.4-6.7-11 7.4-14 22.3-6.7 33.3l64 96c5.9 8.8 16.8 12.7 26.1 8.8 11-2.2 17.9-11.5 17.9-22.1V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v56.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockEleven;
