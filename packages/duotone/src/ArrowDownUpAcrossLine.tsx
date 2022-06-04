import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownUpAcrossLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="arrow-down-up-across-line_svg__fa-primary"
      d="M41.37 406.6c-12.49-12.5-12.49-32.7 0-45.2 12.5-12.5 32.76-12.5 45.26 0l40.47 41.3V288h64v114.7l42.3-41.3c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2l-96 96c-12.5 12.5-32.7 12.5-45.2 0l-96.03-96zM128 64c0-17.67 14.3-32 32-32s32 14.33 32 32v128h-64V64zM438.6 9.372l96 96.028c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L448 109.3v113.8h-64V109.3l-41.4 41.3c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l96-96.028c12.5-12.496 32.7-12.496 45.2 0zM416 480c-17.7 0-32-14.3-32-32V320h64v128c0 17.7-14.3 32-32 32z"
    />
    <path
      d="M0 256c0-17.7 14.33-32 32-32h512c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowDownUpAcrossLine;
