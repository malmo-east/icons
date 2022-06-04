import * as React from "react";
import { SVGProps } from "react";

const SvgTengeSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 40a8 8 0 0 1 8-8h368c4.4 0 8 3.58 8 8s-3.6 8-8 8H8a8 8 0 0 1-8-8zm0 128c0-4.4 3.582-8 8-8h368c4.4 0 8 3.6 8 8s-3.6 8-8 8H200v296c0 4.4-3.6 8-8 8s-8-3.6-8-8V176H8c-4.418 0-8-3.6-8-8z" />
  </svg>
);

export default SvgTengeSign;
