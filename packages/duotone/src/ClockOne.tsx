import * as React from "react";
import { SVGProps } from "react";

const SvgClockOne = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-one_svg__fa-primary"
      d="M256 96c13.3 0 24 10.7 24 24v56.7l20-30c7.4-11 22.3-14 33.3-6.7 11 7.4 14 22.3 5.8 33.3l-64 96c-5 8.8-15.9 12.7-26.1 8.8-10.1-2.2-17-11.5-17-22.1V120c0-13.3 10.7-24 24-24z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm280-136c0-13.3-10.7-24-24-24s-24 10.7-24 24v136c0 10.6 6.9 19.9 17 22.1 10.2 3.9 21.1 0 26.1-8.8l64-96c8.2-11 5.2-25.9-5.8-33.3-11-7.3-25.9-4.3-33.3 6.7l-20 30V120z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockOne;
