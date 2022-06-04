import * as React from "react";
import { SVGProps } from "react";

const SvgSquareRoot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 40c0 4.406-3.594 8-8 8H398.1c-24.13 0-45.5 15.38-53.13 38.28L215.6 474.5c-1 3.1-3.9 5.3-7.1 5.5h-.5a7.974 7.974 0 0 1-7.25-4.625L105.1 272.3C96.81 252.7 76.91 240 55.25 240H8c-4.406 0-8-3.6-8-8s3.594-8 8-8h47.25c27.84 0 53.45 16.3 65.25 41.6l86.25 184.9 123.1-369.2C339.7 51.78 367.1 32 398.1 32H568c4.4 0 8 3.59 8 8z" />
  </svg>
);

export default SvgSquareRoot;
