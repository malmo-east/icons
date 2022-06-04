import * as React from "react";
import { SVGProps } from "react";

const SvgE = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 472c0 4.406-3.578 8-8 8H8c-4.422 0-8-3.6-8-8V40c0-4.41 3.578-8 8-8h304c4.4 0 8 3.59 8 8s-3.6 8-8 8H16v200h232c4.422 0 8 3.6 8 8.006 0 4.394-3.6 7.994-8 7.994H16v200h296c4.4 0 8 3.6 8 8z" />
  </svg>
);

export default SvgE;
