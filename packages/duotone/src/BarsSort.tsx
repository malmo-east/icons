import * as React from "react";
import { SVGProps } from "react";

const SvgBarsSort = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="bars-sort_svg__fa-primary"
      d="M416 128H32c-17.67 0-32-14.3-32-32 0-17.67 14.33-32 32-32h384c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32zM160 448H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
    />
    <path
      d="M0 256c0-17.7 14.33-32 32-32h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBarsSort;
