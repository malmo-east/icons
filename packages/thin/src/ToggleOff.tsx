import * as React from "react";
import { SVGProps } from "react";

const SvgToggleOff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M160 160c53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96 0-53.9 42.1-96 96-96zm-80 96c0 44.2 35.8 80 80 80s80-35.8 80-80-35.8-80-80-80-80 35.8-80 80zm336 160H160C71.63 416 0 344.4 0 256S71.63 96 160 96h256c88.4 0 160 71.6 160 160s-71.6 160-160 160zm0-304H160c-79.53 0-144 64.5-144 144s64.47 144 144 144h256c79.5 0 144-64.5 144-144s-64.5-144-144-144z" />
  </svg>
);

export default SvgToggleOff;
