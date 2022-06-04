import * as React from "react";
import { SVGProps } from "react";

const SvgDash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 4.416-3.584 8-8 8H8c-4.416 0-8-3.6-8-8 0-4.418 3.584-8 8-8h496c4.4 0 8 3.6 8 8z" />
  </svg>
);

export default SvgDash;
