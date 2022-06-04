import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="arrow-up-to-line_svg__fa-primary"
      d="M41.38 342.6c-12.5-12.5-12.5-32.75 0-45.25l128-128c12.5-12.5 32.75-12.5 45.25 0l128 128c12.5 12.5 12.5 32.75 0 45.25-6.23 6.3-14.43 9.4-22.63 9.4s-16.38-3.125-22.62-9.375L224 269.3V448c0 17.69-14.31 32-32 32s-32-14.31-32-32V269.3l-73.38 73.38c-12.49 12.42-32.74 12.42-45.24-.08z"
    />
    <path
      d="M32 96h320c17.69 0 32-14.31 32-32s-14.31-32-32-32H32C14.31 32 0 46.31 0 64s14.31 32 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowUpToLine;
