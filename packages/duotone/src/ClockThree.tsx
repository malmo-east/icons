import * as React from "react";
import { SVGProps } from "react";

const SvgClockThree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-three_svg__fa-primary"
      d="M280 120v112h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H256c-13.3 0-24-10.7-24-24V120c0-13.3 10.7-24 24-24s24 10.7 24 24z"
    />
    <path
      d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm-24-256c0 13.3 10.7 24 24 24h104c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v136z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockThree;
