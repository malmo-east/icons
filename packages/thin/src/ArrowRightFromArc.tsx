import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRightFromArc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 496c4.4 0 8 3.6 8 8s-3.6 8-8 8C114.6 512 0 397.4 0 256S114.6 0 256 0c4.4 0 8 3.582 8 8 0 4.42-3.6 8-8 8C123.5 16 16 123.5 16 256s107.5 240 240 240zm253.2-246.1c.9 1.5 2.8 3.7 2.8 6.1 0 2.4-1.9 4.6-2.8 6.1l-152 128c-3.4 2-8.5 2.4-11.3-.9-2.9-3.4-2.4-8.5.9-11.3L482.1 264h-315c-3.5 0-8-3.6-8-8s4.5-8 8-8h315L346.8 134.1c-3.3-2.8-3.8-7.9-.9-11.3 2.8-3.3 7.9-3.8 11.3-.9l152 128z" />
  </svg>
);

export default SvgArrowRightFromArc;
