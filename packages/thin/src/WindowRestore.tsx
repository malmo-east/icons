import * as React from "react";
import { SVGProps } from "react";

const SvgWindowRestore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432 16H208c-35.3 0-64 28.65-64 64v16h-16V80c0-44.18 35.8-80 80-80h224c44.2 0 80 35.82 80 80v224c0 44.2-35.8 80-80 80h-16v-16h16c35.3 0 64-28.7 64-64V80c0-35.35-28.7-64-64-64zM320 128c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192c0-35.3 28.65-64 64-64h256zm0 16H64c-26.51 0-48 21.5-48 48v64h352v-64c0-26.5-21.5-48-48-48zM64 496h256c26.5 0 48-21.5 48-48V272H16v176c0 26.5 21.49 48 48 48z" />
  </svg>
);

export default SvgWindowRestore;
