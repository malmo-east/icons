import * as React from "react";
import { SVGProps } from "react";

const SvgInputPipe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M128 344c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8s8 3.6 8 8v176zM0 128c0-35.35 28.65-64 64-64h512c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm16 0v256c0 26.5 21.49 48 48 48h512c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48H64c-26.51 0-48 21.5-48 48z" />
  </svg>
);

export default SvgInputPipe;
