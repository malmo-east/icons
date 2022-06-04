import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLeftToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="arrow-left-to-line_svg__fa-primary"
      d="M310.6 150.6 237.3 224H416c17.69 0 32 14.31 32 32s-14.31 32-32 32H237.2l73.38 73.38C316.9 367.6 320 375.8 320 384s-3.125 16.38-9.375 22.62c-12.5 12.5-32.75 12.5-45.25 0l-128-128c-12.5-12.5-12.5-32.75 0-45.25l128-128c12.5-12.5 32.75-12.5 45.25 0s12.475 32.73-.025 45.23z"
    />
    <path
      d="M32 64C14.31 64 0 78.31 0 96v320c0 17.69 14.31 32 32 32s32-14.31 32-32V96c0-17.69-14.31-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowLeftToLine;
