import * as React from "react";
import { SVGProps } from "react";

const SvgEllipsis = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="ellipsis_svg__fa-primary"
      d="M8 256c0-30.9 25.07-56 56-56s56 25.1 56 56-25.07 56-56 56-56-25.1-56-56zm320 0c0-30.9 25.1-56 56-56s56 25.1 56 56-25.1 56-56 56-56-25.1-56-56z"
    />
    <path
      d="M280 256c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgEllipsis;
