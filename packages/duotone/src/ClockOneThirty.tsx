import * as React from "react";
import { SVGProps } from "react";

const SvgClockOneThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-one-thirty_svg__fa-primary"
      d="M232 392V256c0-4.7 1.4-9.4 4-13.3l64-96c7.4-11 22.3-14 33.3-6.7 11 7.4 14 22.3 5.8 33.3l-59.1 90V392c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
    />
    <path
      d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm24 263.3 59.1-90c8.2-11 5.2-25.9-5.8-33.3-11-7.3-25.9-4.3-33.3 6.7l-64 96c-2.6 3.9-4 8.6-4 13.3v136c0 13.3 10.7 24 24 24s24-10.7 24-24V263.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockOneThirty;
