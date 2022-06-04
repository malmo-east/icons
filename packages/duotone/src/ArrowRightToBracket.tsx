import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRightToBracket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-right-to-bracket_svg__fa-primary"
      d="m342.6 278.6-128 128c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L242.8 288H32c-17.69 0-32-14.3-32-32s14.31-32 32-32h210.8l-73.4-73.4c-12.5-12.5-12.5-32.75 0-45.25 12.49-12.49 32.74-12.51 45.25 0l128 128c12.45 12.55 12.45 32.75-.05 45.25z"
    />
    <path
      d="M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128c0-53.02-43-96-96-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowRightToBracket;
