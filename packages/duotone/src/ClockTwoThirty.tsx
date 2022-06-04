import * as React from "react";
import { SVGProps } from "react";

const SvgClockTwoThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-two-thirty_svg__fa-primary"
      d="M256 416c-13.3 0-24-10.7-24-24V256c0-8.9 4-15.5 10.7-20l96-64c11-7.3 25.9-4.3 32.4 6.7 8.2 11 5.2 25.9-5.8 32.4L280 268.8V392c0 13.3-10.7 24-24.9 24h.9z"
    />
    <path
      d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM232 392c0 13.3 10.7 24 24 24s24-10.7 24-24V268.8l85.3-57.7c11-6.5 14-21.4 5.8-32.4-6.5-11-21.4-14-32.4-6.7l-96 64c-6.7 4.5-10.7 11.1-10.7 20v136z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockTwoThirty;
