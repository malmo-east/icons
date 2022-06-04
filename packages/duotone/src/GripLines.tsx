import * as React from "react";
import { SVGProps } from "react";

const SvgGripLines = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="grip-lines_svg__fa-primary"
      d="M416 160c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h384z"
    />
    <path
      d="M416 288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h384z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGripLines;
