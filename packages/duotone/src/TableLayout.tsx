import * as React from "react";
import { SVGProps } from "react";

const SvgTableLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="table-layout_svg__fa-primary"
      d="M448 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zm0 64H64v320h384V96z"
    />
    <path
      d="M448 160v64H192v192h-64V224H64v-64h384z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTableLayout;
