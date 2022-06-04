import * as React from "react";
import { SVGProps } from "react";

const SvgTableCells = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm352 80h144V96c0-26.51-21.5-48-48-48h-96v128zM336 48H176v128h160V48zm-176 0H64c-26.51 0-48 21.49-48 48v80h144V48zM16 192v128h144V192H16zm0 144v80c0 26.5 21.49 48 48 48h96V336H16zm160 128h160V336H176v128zm176 0h96c26.5 0 48-21.5 48-48v-80H352v128zm144-144V192H352v128h144zm-160 0V192H176v128h160z" />
  </svg>
);

export default SvgTableCells;
