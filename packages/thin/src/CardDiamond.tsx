import * as React from "react";
import { SVGProps } from "react";

const SvgCardDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M299.3 244.7c6.3 6.2 6.3 16.4 0 22.6l-96 96c-6.2 6.3-16.4 6.3-22.6 0l-96.01-96c-6.25-6.2-6.25-16.4 0-22.6l96.01-96c6.2-6.3 16.4-6.3 22.6 0l96 96zM96 256l96 96 96-96-96-96-96 96zM0 64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64zm16 0v384c0 26.5 21.49 48 48 48h256c26.5 0 48-21.5 48-48V64c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48z" />
  </svg>
);

export default SvgCardDiamond;
