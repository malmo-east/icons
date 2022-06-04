import * as React from "react";
import { SVGProps } from "react";

const SvgClone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 496h224c26.5 0 48-21.5 48-48v-56c0-4.4 3.6-8 8-8s8 3.6 8 8v56c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V224c0-35.3 28.65-64 64-64h56c4.4 0 8 3.6 8 8s-3.6 8-8 8H64c-26.51 0-48 21.5-48 48v224c0 26.5 21.49 48 48 48zm96-432c0-35.35 28.7-64 64-64h224c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V64zm16 224c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V64c0-26.51-21.5-48-48-48H224c-26.5 0-48 21.49-48 48v224z" />
  </svg>
);

export default SvgClone;
