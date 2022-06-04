import * as React from "react";
import { SVGProps } from "react";

const SvgBorderAll = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="border-all_svg__fa-primary"
      d="M384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm0 64H64v320h320V96z"
    />
    <path
      d="M48 288v-64h144V80h64v144h144v64H256v144h-64V288H48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBorderAll;
