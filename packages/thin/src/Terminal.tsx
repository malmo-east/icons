import * as React from "react";
import { SVGProps } from "react";

const SvgTerminal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M34.24 45.55c-3.07-3.18-2.97-8.25.21-11.31 3.18-3.07 8.25-2.97 11.31.21L253.8 250.5c2.9 3 2.9 8 0 11l-208.04 216c-3.06 3.2-8.13 3.3-11.31.3-3.18-3.1-3.28-8.2-.21-11.3L236.9 256 34.24 45.55zM568 464c4.4 0 8 3.6 8 8s-3.6 8-8 8H232c-4.4 0-8-3.6-8-8s3.6-8 8-8h336z" />
  </svg>
);

export default SvgTerminal;
