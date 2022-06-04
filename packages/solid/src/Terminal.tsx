import * as React from "react";
import { SVGProps } from "react";

const SvgTerminal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M9.372 86.63c-12.496-12.5-12.496-32.76 0-45.26 12.498-12.49 32.758-12.49 45.258 0L246.6 233.4c12.5 12.5 12.5 32.7 0 45.2l-191.97 192c-12.5 12.5-32.76 12.5-45.258 0-12.496-12.5-12.496-32.7 0-45.2L178.7 256 9.372 86.63zM544 416c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32h288z" />
  </svg>
);

export default SvgTerminal;
