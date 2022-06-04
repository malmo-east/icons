import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="arrow-up-left_svg__fa-primary"
      d="M32 384c-17.67 0-32-14.31-32-32V128c0-17.69 14.33-32 32-32h224c17.67 0 32 14.31 32 32s-14.33 32-32 32H64v192c0 17.7-14.33 32-32 32z"
    />
    <path
      d="M310.6 406.6c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375L64 205.3V160h45.25l201.4 201.4c12.45 12.5 12.45 32.7-.05 45.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowUpLeft;
