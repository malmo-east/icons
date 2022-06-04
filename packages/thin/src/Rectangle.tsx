import * as React from "react";
import { SVGProps } from "react";

const SvgRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 64c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h384zm0 16H64c-26.51 0-48 21.5-48 48v256c0 26.5 21.49 48 48 48h384c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48z" />
  </svg>
);

export default SvgRectangle;
