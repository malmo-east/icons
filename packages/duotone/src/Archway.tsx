import * as React from "react";
import { SVGProps } from "react";

const SvgArchway = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="archway_svg__fa-primary"
      d="M480 32c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64s14.33-32 32-32h448zm0 160H32v-32h448v32z"
    />
    <path
      d="M480 160H32V96h448v64zm0 256c17.7 0 32 14.3 32 32s-14.3 32-32 32H352V352c0-53.9-43-96-96-96-53.9 0-96 42.1-96 96v128H32c-17.67 0-32-14.3-32-32s14.33-32 32-32V192h448v224z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArchway;
