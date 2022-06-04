import * as React from "react";
import { SVGProps } from "react";

const SvgTabletScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 63.1 64 63.1h320c35.35 0 64-28.65 64-63.1V64c0-35.35-28.7-64-64-64zm16 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16v-80h352v80zm0-128H48V64c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v256zM192 432h64c8.836 0 16-7.164 16-16s-7.164-16-16-16h-64c-8.836 0-16 7.164-16 16s7.2 16 16 16z" />
  </svg>
);

export default SvgTabletScreen;