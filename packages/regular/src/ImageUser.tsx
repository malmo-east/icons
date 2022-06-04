import * as React from "react";
import { SVGProps } from "react";

const SvgImageUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16v320zM256 256c35.35 0 64-28.66 64-64s-28.65-64-64-64-64 28.66-64 64 28.7 64 64 64zm32 32h-64c-44.18 0-80 35.82-80 80 0 8.836 7.164 16 16 16h192c8.836 0 16-7.164 16-16 0-44.2-35.8-80-80-80z" />
  </svg>
);

export default SvgImageUser;