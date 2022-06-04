import * as React from "react";
import { SVGProps } from "react";

const SvgCameraWeb = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M160 232c4.406 0 8-3.594 8-8 0-30.88 25.12-56 56-56 4.406 0 8-3.594 8-8s-3.6-8-8-8c-39.7 0-72 32.3-72 72 0 4.4 3.6 8 8 8zm206.1 210.8c-2.812-3.312-7.875-3.75-11.28-.844-3.344 2.875-3.719 7.906-.844 11.28L390.6 496H57.41l36.66-42.78c2.875-3.375 2.5-8.406-.844-11.28-3.375-2.906-8.406-2.469-11.28.844l-48 56a8.08 8.08 0 0 0-1.219 8.562A7.98 7.98 0 0 0 40 512h368a8.014 8.014 0 0 0 7.281-4.656 8.08 8.08 0 0 0-1.219-8.562L366.1 442.8zM224 368c79.4 0 144-64.6 144-144S303.4 80 224 80 80 144.6 80 224s64.6 144 144 144zm0-272c70.69 0 127.9 57.31 127.9 128s-57.31 128-128 128-128-57.31-128-128S153.3 96 224 96zm0 352c123.5 0 224-100.5 224-223.1S347.5.9 224 .9 0 101.4 0 224.9 100.5 448 224 448zm0-432c114.7 0 208 93.31 208 208s-93.31 208-208 208S16 338.7 16 224 109.3 16 224 16z" />
  </svg>
);

export default SvgCameraWeb;