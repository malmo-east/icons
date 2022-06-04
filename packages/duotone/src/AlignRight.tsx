import * as React from "react";
import { SVGProps } from "react";

const SvgAlignRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="align-right_svg__fa-primary"
      d="M32 480c-17.67 0-32-14.3-32-32s14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32zm0-256c-17.67 0-32-14.3-32-32s14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32z"
    />
    <path
      d="M192 352c-17.7 0-32-14.3-32-32s14.3-32 32-32h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H192zm0-256c-17.7 0-32-14.33-32-32s14.3-32 32-32h224c17.7 0 32 14.33 32 32s-14.3 32-32 32H192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAlignRight;
