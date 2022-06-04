import * as React from "react";
import { SVGProps } from "react";

const SvgGenderless = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 80C94.8 80 16 158.8 16 256s78.8 176 176 176 176-78.8 176-176S289.2 80 192 80zm0 304c-70.58 0-128-57.42-128-128s57.42-128 128-128 128 57.42 128 128-57.4 128-128 128z" />
  </svg>
);

export default SvgGenderless;
