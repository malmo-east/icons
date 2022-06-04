import * as React from "react";
import { SVGProps } from "react";

const SvgBringForward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224 464h224c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16h-64v-48h64c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-64h48v64c0 8.8 7.2 16 16 16zM64 352c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H64z" />
  </svg>
);

export default SvgBringForward;