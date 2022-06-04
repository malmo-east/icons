import * as React from "react";
import { SVGProps } from "react";

const SvgWindowRestore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432 48H208c-17.7 0-32 14.33-32 32v16h-48V80c0-44.18 35.8-80 80-80h224c44.2 0 80 35.82 80 80v224c0 44.2-35.8 80-80 80h-16v-48h16c17.7 0 32-14.3 32-32V80c0-17.67-14.3-32-32-32zm-112 80c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192c0-35.3 28.65-64 64-64h256zM64 464h256c8.8 0 16-7.2 16-16V256H48v192c0 8.8 7.16 16 16 16z" />
  </svg>
);

export default SvgWindowRestore;
