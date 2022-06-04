import * as React from "react";
import { SVGProps } from "react";

const SvgTableRows = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="table-rows_svg__fa-primary"
      d="M64 480c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64zm64-64h320V96H128v320z"
    />
    <path
      d="M128 224h320v64H128v-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTableRows;
