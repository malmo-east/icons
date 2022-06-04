import * as React from "react";
import { SVGProps } from "react";

const SvgBarsFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="bars-filter_svg__fa-primary"
      d="M416 128H32c-17.67 0-32-14.3-32-32 0-17.67 14.33-32 32-32h384c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32zM256 448h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
    />
    <path
      d="M64 256c0-17.7 14.33-32 32-32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.67 0-32-14.3-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBarsFilter;
