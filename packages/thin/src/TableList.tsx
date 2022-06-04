import * as React from "react";
import { SVGProps } from "react";

const SvgTableList = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm160 80h336V96c0-26.51-21.5-48-48-48H160v128zM144 48H64c-26.51 0-48 21.49-48 48v80h128V48zM16 192v128h128V192H16zm0 144v80c0 26.5 21.49 48 48 48h80V336H16zm144 128h288c26.5 0 48-21.5 48-48v-80H160v128zm336-144V192H160v128h336z" />
  </svg>
);

export default SvgTableList;
