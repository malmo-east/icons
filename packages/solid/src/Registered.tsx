import * as React from "react";
import { SVGProps } from "react";

const SvgRegistered = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm93.8 349.8c5.594 12.03.438 26.31-11.56 31.94a24.121 24.121 0 0 1-10.19 2.25c-9 0-17.66-5.125-21.75-13.81l-38.46-82.19H208v72c0 13.25-10.75 24-24 24s-24-10.75-24-24V152c0-13.25 10.75-24 24-24l88 .004c44.13 0 80 35.88 80 80 0 28.32-14.87 53.09-37.12 67.31L349.8 349.8zM272 176h-64v64h64c17.66 0 32-14.34 32-32s-14.3-32-32-32z" />
  </svg>
);

export default SvgRegistered;
