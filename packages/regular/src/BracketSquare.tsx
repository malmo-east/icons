import * as React from "react";
import { SVGProps } from "react";

const SvgBracketSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M120 32H32C14.4 32 0 46.4 0 64v384c0 17.6 14.4 32 32 32h88c13.25 0 24-10.75 24-23.1S133.3 432 120 432H48V80h72c13.3 0 24-10.75 24-24s-10.7-24-24-24z" />
  </svg>
);

export default SvgBracketSquare;
