import * as React from "react";
import { SVGProps } from "react";

const SvgBellConcierge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="bell-concierge_svg__fa-primary"
      d="M480 368H32c0-123.7 100.3-224 224-224s224 100.3 224 224z"
    />
    <path
      d="M215.1 112H232v33.32c7.9-.82 15.9-1.32 24-1.32s16.11.484 24 1.324V112h16c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80.9C202.7 64 192 74.75 192 87.1s10.7 24.9 23.1 24.9zM488 400H24c-13.25 0-24 10.7-24 23.1C0 437.3 10.75 448 23.1 448h464c13.25 0 24-10.75 24-23.1.9-14.2-9.8-24.9-23.1-24.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBellConcierge;
