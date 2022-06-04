import * as React from "react";
import { SVGProps } from "react";

const SvgTableCellsLarge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="table-cells-large_svg__fa-primary"
      d="M448 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zm0 64H64v320h384V96z"
    />
    <path
      d="M64 288v-64h160V96h64v128h160v64H288v128h-64V288H64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTableCellsLarge;
