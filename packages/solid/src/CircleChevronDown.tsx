import * as React from "react";
import { SVGProps } from "react";

const SvgCircleChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm134.6 246.6-112 112c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L256 290.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0s12.47 32.68-.03 45.18z" />
  </svg>
);

export default SvgCircleChevronDown;
