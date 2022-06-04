import * as React from "react";
import { SVGProps } from "react";

const SvgVials = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M200 32H24C10.75 32 0 42.74 0 56c0 13.25 10.75 24 24 24h8v320c0 44.1 35.88 80 80 80s80-35.9 80-80V80h8c13.3 0 24-10.75 24-24 0-13.26-10.7-24-24-24zm-56 224H80V80h64v176zM488 32H312c-13.3 0-24 10.74-24 24 0 13.25 10.75 24 24 24h8v320c0 44.13 35.88 80 80 80s80-35.88 80-80V80h8c13.3 0 24-10.75 24-24 0-13.26-10.7-24-24-24zm-56 224h-64V80h64v176z" />
  </svg>
);

export default SvgVials;
