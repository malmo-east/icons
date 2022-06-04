import * as React from "react";
import { SVGProps } from "react";

const SvgClockElevenThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-eleven-thirty_svg__fa-primary"
      d="M256 416c-13.3 0-24-10.7-24-24V263.3l-60-90c-7.3-11-4.3-25.9 6.7-33.3 11-7.3 25.9-4.3 32.4 6.7l64 96c3.5 3.9 4.9 8.6 4.9 13.3v136c0 13.3-10.7 24-24 24z"
    />
    <path
      d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM232 392c0 13.3 10.7 24 24 24s24-10.7 24-24V256c0-4.7-1.4-9.4-4.9-13.3l-64-96c-6.5-11-21.4-14-32.4-6.7-11 7.4-14 22.3-6.7 33.3l60 90V392z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockElevenThirty;
