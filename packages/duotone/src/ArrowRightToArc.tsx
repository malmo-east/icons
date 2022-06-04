import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRightToArc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-right-to-arc_svg__fa-primary"
      d="M185.4 121.4c12.5-12.5 32.7-12.5 45.2 0l112 112c12.5 12.5 12.5 32.7 0 45.2l-112 112c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l57.3-57.4H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h210.7l-57.3-57.4c-12.5-12.5-12.5-32.7 0-45.2z"
    />
    <path
      d="M224 32c0-17.67 14.3-32 32-32 141.4 0 256 114.6 256 256S397.4 512 256 512c-17.7 0-32-14.3-32-32s14.3-32 32-32c106 0 192-86 192-192 0-106.9-86-192-192-192-17.7 0-32-14.33-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowRightToArc;
