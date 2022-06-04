import * as React from "react";
import { SVGProps } from "react";

const SvgDistributeSpacingHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="distribute-spacing-horizontal_svg__fa-primary"
      d="M48 24v464c0 13.3-10.75 24-24 24S0 501.3 0 488V24C0 10.75 10.75 0 24 0s24 10.75 24 24zm400 0v464c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.25 10.7-24 24-24s24 10.75 24 24z"
    />
    <path
      d="M128 144c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V144z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDistributeSpacingHorizontal;
