import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsDownToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="arrows-down-to-line_svg__fa-primary"
      d="M521.4 233.4c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2l-96 96c-12.5 12.5-32.7 12.5-45.2 0l-96-96c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l41.4 41.3V64c0-17.67 14.3-32 32-32s32 14.33 32 32v210.7l41.4-41.3zm-320 0c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2l-96 96c-12.5 12.5-32.7 12.5-45.2 0l-96.028-96c-12.496-12.5-12.496-32.7 0-45.2 12.498-12.5 32.758-12.5 45.258 0L96 274.7V64c0-17.67 14.3-32 32-32s32 14.33 32 32v210.7l41.4-41.3z"
    />
    <path
      d="M544 480H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h512c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowsDownToLine;
