import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpFromArc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-up-from-arc_svg__fa-primary"
      d="M121.4 166.6c-12.5-12.5-12.5-32.7 0-45.2l112-112.028c12.5-12.496 32.7-12.496 45.2 0l112 112.028c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L288 109.3V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-57.4 57.3c-12.5 12.5-32.7 12.5-45.2 0z"
    />
    <path
      d="M64 256c0 106 85.1 192 192 192 106 0 192-86 192-192 0-17.7 14.3-32 32-32s32 14.3 32 32c0 141.4-114.6 256-256 256S0 397.4 0 256c0-17.7 14.33-32 32-32s32 14.3 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowUpFromArc;
