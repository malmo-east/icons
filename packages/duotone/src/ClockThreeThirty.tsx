import * as React from "react";
import { SVGProps } from "react";

const SvgClockThreeThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-three-thirty_svg__fa-primary"
      d="M256 416c-13.3 0-24-10.7-24-24V256c0-13.3 10.7-24 24-24h104c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80v112c0 13.3-10.7 24-24 24z"
    />
    <path
      d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM232 392c0 13.3 10.7 24 24 24s24-10.7 24-24V280h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H256c-13.3 0-24 10.7-24 24v136z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockThreeThirty;
