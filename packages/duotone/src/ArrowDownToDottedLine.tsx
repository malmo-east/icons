import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownToDottedLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="arrow-down-to-dotted-line_svg__fa-primary"
      d="M73.38 185.4c6.25-6.3 14.43-10.3 22.62-10.3s16.38 3.125 22.62 9.375L192 258.7V79.1c0-17.69 14.31-32 32-32s32 14.31 32 32v179.6l73.38-73.38c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-128 128c-12.5 12.5-32.75 12.5-45.25 0l-128-128c-12.5-12.47-12.5-32.67 0-45.17z"
    />
    <path
      d="M32 416c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm96 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm96 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm96 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm96 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowDownToDottedLine;
