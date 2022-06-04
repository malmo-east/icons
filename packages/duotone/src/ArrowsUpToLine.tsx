import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsUpToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="arrows-up-to-line_svg__fa-primary"
      d="M54.63 278.6c-12.5 12.5-32.76 12.5-45.258 0-12.496-12.5-12.496-32.7 0-45.2l96.028-96c12.5-12.5 32.7-12.5 45.2 0l96 96c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L160 237.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V237.3l-41.37 41.3zm319.97 0c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l96-96c12.5-12.5 32.7-12.5 45.2 0l96 96c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L480 237.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V237.3l-41.4 41.3z"
    />
    <path
      d="M32 32h512c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64s14.33-32 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowsUpToLine;
