import * as React from "react";
import { SVGProps } from "react";

const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="table_svg__fa-primary"
      d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm64 64v256h384V160H64z"
    />
    <path
      d="M64 320v-64h160v-96h64v96h160v64H288v96h-64v-96H64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTable;
