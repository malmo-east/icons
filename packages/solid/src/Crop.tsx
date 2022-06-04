import * as React from "react";
import { SVGProps } from "react";

const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V173.3L173.3 384H352v64H128c-35.35 0-64-28.7-64-64V128H32c-17.67 0-32-14.3-32-32 0-17.67 14.33-32 32-32h32V32C64 14.33 78.33 0 96 0c17.7 0 32 14.33 32 32v306.7L338.7 128H160V64h242.7l54.7-54.628c12.5-12.496 32.7-12.496 45.2 0 12.5 12.498 12.5 32.758 0 45.258L448 109.3V384z" />
  </svg>
);

export default SvgCrop;
