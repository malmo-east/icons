import * as React from "react";
import { SVGProps } from "react";

const SvgSquareEllipsis = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 416c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320zM192 256c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32zm160 0c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm-256 0c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32z" />
  </svg>
);

export default SvgSquareEllipsis;
