import * as React from "react";
import { SVGProps } from "react";

const SvgRulerHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M64 384c-35.35 0-64-28.7-64-64V192c0-35.3 28.65-64 64-64h512c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H64zm0-48h512c8.8 0 16-7.2 16-16V192c0-8.8-7.2-16-16-16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H64c-8.84 0-16 7.2-16 16v128c0 8.8 7.16 16 16 16z" />
  </svg>
);

export default SvgRulerHorizontal;