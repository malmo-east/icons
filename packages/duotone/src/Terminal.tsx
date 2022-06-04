import * as React from "react";
import { SVGProps } from "react";

const SvgTerminal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="terminal_svg__fa-primary"
      d="M54.63 41.37 246.6 233.4c12.5 12.5 12.5 32.7 0 45.2l-191.97 192c-12.5 12.5-32.76 12.5-45.258 0-12.496-12.5-12.496-32.7 0-45.2L178.7 255.1 9.372 86.63c-12.496-12.5-12.496-32.76 0-45.26 12.498-12.49 32.758-12.49 45.258 0z"
    />
    <path
      d="M224 448c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTerminal;
