import * as React from "react";
import { SVGProps } from "react";

const SvgClockSixThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-six-thirty_svg__fa-primary"
      d="M232 392V256c0-13.3 10.7-24 24-24s24 10.7 24 24v136c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
    />
    <path
      d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm24 256c0-13.3-10.7-24-24-24s-24 10.7-24 24v136c0 13.3 10.7 24 24 24s24-10.7 24-24V256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockSixThirty;
