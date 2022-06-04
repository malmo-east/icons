import * as React from "react";
import { SVGProps } from "react";

const SvgTableCellsLarge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm280 136h184V96c0-8.84-7.2-16-16-16H280v152zM232 80H64c-8.84 0-16 7.16-16 16v136h184V80zM48 280v136c0 8.8 7.16 16 16 16h168V280H48zm232 152h168c8.8 0 16-7.2 16-16V280H280v152z" />
  </svg>
);

export default SvgTableCellsLarge;
