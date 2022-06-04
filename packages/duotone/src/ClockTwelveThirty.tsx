import * as React from "react";
import { SVGProps } from "react";

const SvgClockTwelveThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-twelve-thirty_svg__fa-primary"
      d="M256 128c13.3 0 24 10.7 24 24v240c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm280-104c0-13.3-10.7-24-24-24s-24 10.7-24 24v240c0 13.3 10.7 24 24 24s24-10.7 24-24V152z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockTwelveThirty;
