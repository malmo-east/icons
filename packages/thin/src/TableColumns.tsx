import * as React from "react";
import { SVGProps } from "react";

const SvgTableColumns = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm16 0v64h480V96c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48zm48 368h184V176H16v240c0 26.5 21.49 48 48 48zm200 0h184c26.5 0 48-21.5 48-48V176H264v288z" />
  </svg>
);

export default SvgTableColumns;
