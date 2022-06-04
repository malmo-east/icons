import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownFromLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="arrow-down-from-line_svg__fa-primary"
      d="M342.6 297.4c12.5 12.5 12.5 32.75 0 45.25l-128 128c-12.5 12.5-32.75 12.5-45.25 0l-128-128c-12.5-12.5-12.5-32.75 0-45.25 6.28-6.3 14.46-9.4 22.65-9.4s16.38 3.125 22.62 9.375L160 370.8V192c0-17.69 14.31-32 32-32s32 14.31 32 32v178.8l73.38-73.38c12.52-12.52 32.72-12.52 45.22-.02z"
    />
    <path
      d="M32 96h320c17.69 0 32-14.31 32-32s-14.31-32-32-32H32C14.31 32 0 46.31 0 64s14.31 32 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowDownFromLine;
