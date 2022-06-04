import * as React from "react";
import { SVGProps } from "react";

const SvgTally2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="tally-2_svg__fa-primary"
      d="M160 32c17.7 0 32 14.33 32 32v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.67 14.3-32 32-32z"
    />
    <path
      d="M32 32c17.67 0 32 14.33 32 32v384c0 17.7-14.33 32-32 32S0 465.7 0 448V64c0-17.67 14.33-32 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTally2;
