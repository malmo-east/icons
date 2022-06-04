import * as React from "react";
import { SVGProps } from "react";

const SvgWindowRestore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432 64H208c-8.8 0-16 7.16-16 16v16h-64V80c0-44.18 35.8-80 80-80h224c44.2 0 80 35.82 80 80v224c0 44.2-35.8 80-80 80h-16v-64h16c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16zM0 192c0-35.3 28.65-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192zm96 64h192c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.67 0-32 14.3-32 32s14.33 32 32 32z" />
  </svg>
);

export default SvgWindowRestore;
