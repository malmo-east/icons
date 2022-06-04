import * as React from "react";
import { SVGProps } from "react";

const SvgUnlock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M112 192h272c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256c0-35.3 28.65-64 64-64h32v-64C96 57.31 153.3 0 224 0c58.9 0 108.5 39.75 123.4 93.87 1.2 4.26-1.3 8.63-5.6 9.83-4.2 1.2-8.7-1.3-10.7-5.57C318.9 50.77 275.5 16 224 16c-61.9 0-112 50.14-112 112v64zm-48 16c-26.51 0-48 21.5-48 48v192c0 26.5 21.49 48 48 48h320c26.5 0 48-21.5 48-48V256c0-26.5-21.5-48-48-48H64z" />
  </svg>
);

export default SvgUnlock;
