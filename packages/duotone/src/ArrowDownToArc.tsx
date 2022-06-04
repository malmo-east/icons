import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownToArc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-down-to-arc_svg__fa-primary"
      d="M390.6 185.4c12.5 12.5 12.5 32.7 0 45.2l-112 112c-12.5 12.5-32.7 12.5-45.2 0l-112-112c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l56.5 57.3V32c0-17.67 15.2-32 32-32C273.7 0 288 14.33 288 32v210.7l57.4-57.3c12.5-12.5 32.7-12.5 45.2 0z"
    />
    <path
      d="M480 224c17.7 0 32 14.3 32 32 0 141.4-114.6 256-256 256S0 397.4 0 256c0-17.7 14.33-32 32-32s32 14.3 32 32c0 106 85.1 192 192 192 106 0 192-86 192-192 0-17.7 14.3-32 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowDownToArc;
