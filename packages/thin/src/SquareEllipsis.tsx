import * as React from "react";
import { SVGProps } from "react";

const SvgSquareEllipsis = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 272c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm-96-32c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm192 32c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM64 480c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64zm0-16h320c26.5 0 48-21.5 48-48V96c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48v320c0 26.5 21.49 48 48 48z" />
  </svg>
);

export default SvgSquareEllipsis;
