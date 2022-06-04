import * as React from "react";
import { SVGProps } from "react";

const SvgTableCells = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm360 72h104V96c0-8.84-7.2-16-16-16h-88v88zm-48-88H200v88h112V80zm-160 0H64c-8.84 0-16 7.16-16 16v72h104V80zM48 216v80h104v-80H48zm0 128v72c0 8.8 7.16 16 16 16h88v-88H48zm152 88h112v-88H200v88zm160 0h88c8.8 0 16-7.2 16-16v-72H360v88zm104-136v-80H360v80h104zm-152 0v-80H200v80h112z" />
  </svg>
);

export default SvgTableCells;
