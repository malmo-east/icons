import * as React from "react";
import { SVGProps } from "react";

const SvgTableCellsLarge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm264 152h232V96c0-26.51-21.5-48-48-48H264v200zM248 48H64c-26.51 0-48 21.49-48 48v152h232V48zM16 264v152c0 26.5 21.49 48 48 48h184V264H16zm248 200h184c26.5 0 48-21.5 48-48V264H264v200z" />
  </svg>
);

export default SvgTableCellsLarge;
