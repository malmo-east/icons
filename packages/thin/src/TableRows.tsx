import * as React from "react";
import { SVGProps } from "react";

const SvgTableRows = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm16 0v320c0 26.5 21.49 48 48 48h64V48H64c-26.51 0-48 21.49-48 48zm480 320V264H144v200h304c26.5 0 48-21.5 48-48zm0-168V96c0-26.51-21.5-48-48-48H144v200h352z" />
  </svg>
);

export default SvgTableRows;
