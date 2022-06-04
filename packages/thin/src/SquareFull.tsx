import * as React from "react";
import { SVGProps } from "react";

const SvgSquareFull = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 0v512H0V0h512zm-16 16H16v480h480V16z" />
  </svg>
);

export default SvgSquareFull;