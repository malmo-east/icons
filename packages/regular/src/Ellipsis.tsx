import * as React from "react";
import { SVGProps } from "react";

const SvgEllipsis = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M336 256c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm-160 0c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm-64 0c0 26.5-21.49 48-48 48s-48-21.5-48-48 21.49-48 48-48 48 21.5 48 48z" />
  </svg>
);

export default SvgEllipsis;
