import * as React from "react";
import { SVGProps } from "react";

const SvgRightFromBracket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M40 480h80c4.4 0 8-3.6 8-8s-3.6-8-8-8H40c-13.23 0-24-10.77-24-24V72c0-13.23 10.77-24 24-24h80c4.4 0 8-3.58 8-8s-3.6-8-8-8H40C17.94 32 0 49.94 0 72v368c0 22.1 17.94 40 40 40zm462.6-246.6-128-128c-9.156-9.156-22.91-11.91-34.88-6.938C327.8 103.4 320 115.1 320 128l.092 63.1L160 192c-17.7 0-32 14.3-32 32v64c0 17.67 14.33 32 32 32l160.1-.001L320 384c0 12.94 7.797 24.62 19.75 29.56 11.97 4.969 25.72 2.219 34.88-6.938l128-128C508.9 272.4 512 264.2 512 256s-3.1-16.4-9.4-22.6zm-11.3 33.9-128 128a15.937 15.937 0 0 1-17.45 3.463A15.95 15.95 0 0 1 336 384v-80H160c-8.8 0-16-7.2-16-16v-64c0-8.822 7.178-16 16-16h176v-80c0-6.502 3.869-12.3 9.885-14.79 5.988-2.486 12.83-1.123 17.43 3.475l128 128C494.3 247.7 496 251.7 496 256s-1.7 8.3-4.7 11.3z" />
  </svg>
);

export default SvgRightFromBracket;