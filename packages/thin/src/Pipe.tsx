import * as React from "react";
import { SVGProps } from "react";

const SvgPipe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 512" {...props}>
    <path d="M40 8v496c0 4.416-3.584 8-8 8s-8-3.584-8-8V8c0-4.418 3.58-8 8-8s8 3.582 8 8z" />
  </svg>
);

export default SvgPipe;
