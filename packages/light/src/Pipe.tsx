import * as React from "react";
import { SVGProps } from "react";

const SvgPipe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 512" {...props}>
    <path d="M48 16v480c0 8.832-7.166 16-16 16s-16-7.168-16-16V16c0-8.834 7.17-16 16-16s16 7.166 16 16z" />
  </svg>
);

export default SvgPipe;
