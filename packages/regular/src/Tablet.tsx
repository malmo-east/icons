import * as React from "react";
import { SVGProps } from "react";

const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm16 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V64c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v384zm-144-48h-64c-8.836 0-16 7.164-16 16s7.164 16 16 16h64c8.838 0 16-7.164 16-16s-7.2-16-16-16z" />
  </svg>
);

export default SvgTablet;