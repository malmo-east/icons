import * as React from "react";
import { SVGProps } from "react";

const SvgCartArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M78.53 32H288v16H82.7l58.4 224h346.7c7.1 0 13.4-4.8 15.4-11.7l54-191.97C560 58.13 552.4 48 541.8 48H384V32h157.8c20.3 0 36.5 20.25 30.8 40.66l-54 192.04c-3.9 13.8-16.5 23.3-30.8 23.3H145.3l20.9 80H496c4.4 0 8 3.6 8 8s-3.6 8-8 8H159.1c-2.7 0-5.9-2.5-6.8-6L57.82 16H8A8 8 0 0 1 8 0h56a8 8 0 0 1 7.74 5.98L78.53 32zM128 464c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm48 32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm336-32c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-48-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM344 180.7l66.3-66.4c3.2-3.1 8.2-3.1 11.4 0 3.1 3.2 3.1 8.2 0 11.4l-80 80a8.15 8.15 0 0 1-11.4 0l-80-80a8.15 8.15 0 0 1 0-11.4c3.2-3.1 8.2-3.1 11.4 0l66.3 66.4V8c0-4.418 3.6-8 8-8s8 3.582 8 8v172.7z" />
  </svg>
);

export default SvgCartArrowDown;