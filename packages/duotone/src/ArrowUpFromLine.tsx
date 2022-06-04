import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpFromLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="arrow-up-from-line_svg__fa-primary"
      d="M41.38 214.6c-12.5-12.5-12.5-32.75 0-45.25l128-128c12.5-12.5 32.75-12.5 45.25 0l128 128c12.5 12.5 12.5 32.75 0 45.25-6.23 6.3-14.43 9.4-22.63 9.4s-16.38-3.125-22.62-9.375L224 141.3V320c0 17.69-14.31 32-32 32s-32-14.31-32-32V141.3l-73.37 73.3c-12.5 12.5-32.75 12.5-45.25 0z"
    />
    <path
      d="M352 416H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h320c17.69 0 32-14.31 32-32s-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowUpFromLine;
