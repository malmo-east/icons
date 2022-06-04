import * as React from "react";
import { SVGProps } from "react";

const SvgClockSevenThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-seven-thirty_svg__fa-primary"
      d="M256 416c-13.3 0-24-10.7-24-24v-56.7l-20.9 30c-6.5 11-21.4 14-32.4 5.8-11-6.5-14-21.4-6.7-32.4l64-96c5.9-8.8 16.8-13.6 26.1-9.7 11 3.1 17.9 12.4 17.9 23v136c0 13.3-10.7 24-24 24z"
    />
    <path
      d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM232 392c0 13.3 10.7 24 24 24s24-10.7 24-24V256c0-10.6-6.9-19.9-17.9-23-9.3-3.9-20.2.9-26.1 9.7l-64 96c-7.3 11-4.3 25.9 6.7 32.4 11 8.2 25.9 5.2 32.4-5.8l20-30 .9 56.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockSevenThirty;
