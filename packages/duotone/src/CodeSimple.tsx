import * as React from "react";
import { SVGProps } from "react";

const SvgCodeSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="code-simple_svg__fa-primary"
      d="M214.6 73.37c12.5 12.5 12.5 32.73 0 45.23L77.25 256 214.6 393.4c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L9.372 278.6c-12.496-12.5-12.496-32.7 0-45.2L169.4 73.37c12.5-12.49 32.7-12.49 45.2 0z"
    />
    <path
      d="m406.6 73.37 160 160.03c12.5 12.5 12.5 32.7 0 45.2l-160 160c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l137.3-138.3-137.3-136.5c-12.5-12.5-12.5-32.73 0-45.23 12.5-12.49 32.7-12.49 45.2 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCodeSimple;
