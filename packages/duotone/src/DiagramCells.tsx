import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramCells = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="diagram-cells_svg__fa-primary"
      d="M64 224c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v64c0 35.3-28.7 64-64 64H64z"
    />
    <path
      d="M64 480c-35.35 0-64-28.7-64-64v-64c0-35.3 28.65-64 64-64h384c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDiagramCells;
