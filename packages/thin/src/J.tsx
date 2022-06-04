import * as React from "react";
import { SVGProps } from "react";

const SvgJ = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M160 480C71.78 480 0 408.21 0 320v-56c0-4.4 3.594-8 8-8s8 3.6 8 8v56c0 79.41 64.59 144 144 144s144-64.59 144-144V40c0-4.41 3.6-8 8-8s8 3.59 8 8v280c0 88.2-71.8 160-160 160z" />
  </svg>
);

export default SvgJ;
