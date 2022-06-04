import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramCells = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 224c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v64c0 35.3-28.7 64-64 64H64zm448 192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-64c0-35.3 28.65-64 64-64h384c35.3 0 64 28.7 64 64v64zm-64-80H64c-8.84 0-16 7.2-16 16v64c0 8.8 7.16 16 16 16h384c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z" />
  </svg>
);

export default SvgDiagramCells;