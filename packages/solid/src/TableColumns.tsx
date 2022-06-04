import * as React from "react";
import { SVGProps } from "react";

const SvgTableColumns = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm64 320h160V160H64v256zm384-256H288v256h160V160z" />
  </svg>
);

export default SvgTableColumns;
