import * as React from "react";
import { SVGProps } from "react";

const SvgGenderless = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 96c88.22 0 160 71.78 160 160s-71.78 160-160 160S32 344.22 32 256 103.8 96 192 96zm0-16C94.8 80 16 158.8 16 256s78.8 176 176 176 176-78.8 176-176S289.2 80 192 80z" />
  </svg>
);

export default SvgGenderless;
