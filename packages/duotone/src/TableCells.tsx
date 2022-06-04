import * as React from "react";
import { SVGProps } from "react";

const SvgTableCells = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="table-cells_svg__fa-primary"
      d="M448 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zm0 64H64v320h384V96z"
    />
    <path
      d="M144 160V96h64v64h96V96h64v64h80v64h-80v64h80v64h-80v64h-64v-64h-96v64h-64v-64H64v-64h80v-64H64v-64h80zm64 64v64h96v-64h-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTableCells;
