import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M7.999 160a7.997 7.997 0 0 1 7.999 7.999v220.7l290.3-290.3c3.116-3.116 8.187-3.127 11.31 0s3.116 8.198 0 11.31l-290.3 290.3h220.7C252.4 400 256 403.6 256 408s-3.6 8-8 8H7.999C3.58 416 0 412.4 0 408V167.1c0-3.5 3.577-7.1 7.999-7.1z" />
  </svg>
);

export default SvgArrowDownLeft;
