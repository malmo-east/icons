import * as React from "react";
import { SVGProps } from "react";

const SvgColumns3 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h512c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm448 336h128c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16H448v352zM400 80H240v352h160V80zM192 432V80H64c-8.84 0-16 7.16-16 16v320c0 8.8 7.16 16 16 16h128z" />
  </svg>
);

export default SvgColumns3;
