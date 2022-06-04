import * as React from "react";
import { SVGProps } from "react";

const SvgVials = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M488 32H312c-13.2 0-24 10.8-24 24s10.8 24 24 24h8v316.5c0 41.76 30.47 79.12 72.03 83.15C439.7 484.2 480 446.8 480 400V80h8c13.2 0 24-10.8 24-24s-10.8-24-24-24zm-56 224h-64V80h64v176zM200 32H24C10.8 32 0 42.8 0 56s10.8 24 24 24h8v316.5c0 41.76 30.47 79.12 72.03 83.15C151.7 484.2 192 446.8 192 400V80h8c13.2 0 24-10.8 24-24s-10.8-24-24-24zm-56 224H80V80h64v176z" />
  </svg>
);

export default SvgVials;
