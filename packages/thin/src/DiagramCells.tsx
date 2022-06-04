import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramCells = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 224c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v64c0 35.3-28.7 64-64 64H64zm432-64V96c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48v64c0 26.5 21.49 48 48 48h384c26.5 0 48-21.5 48-48zm16 256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-64c0-35.3 28.65-64 64-64h384c35.3 0 64 28.7 64 64v64zm-64 48c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H64c-26.51 0-48 21.5-48 48v64c0 26.5 21.49 48 48 48h384z" />
  </svg>
);

export default SvgDiagramCells;
