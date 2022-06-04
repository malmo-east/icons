import * as React from "react";
import { SVGProps } from "react";

const SvgDash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 8.832-7.166 16-16 16H16c-8.834 0-16-7.2-16-16 0-8.834 7.166-16 16-16h480c8.8 0 16 7.2 16 16z" />
  </svg>
);

export default SvgDash;
