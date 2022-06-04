import * as React from "react";
import { SVGProps } from "react";

const SvgRulerHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 128c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192c0-35.3 28.65-64 64-64h512zM64 368h512c26.5 0 48-21.5 48-48V192c0-26.5-21.5-48-48-48h-56v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80h-80v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80h-80v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80h-80v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80h-80v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80H64c-26.51 0-48 21.5-48 48v128c0 26.5 21.49 48 48 48z" />
  </svg>
);

export default SvgRulerHorizontal;
