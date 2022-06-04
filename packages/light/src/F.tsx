import * as React from "react";
import { SVGProps } from "react";

const SvgF = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 48c0 8.84-7.2 16-16 16H32v192h208c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v176c0 8.8-7.16 16-16 16s-16-7.2-16-16V48c0-8.84 7.156-16 16-16h288c8.8 0 16 7.16 16 16z" />
  </svg>
);

export default SvgF;
