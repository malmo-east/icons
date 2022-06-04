import * as React from "react";
import { SVGProps } from "react";

const SvgSquareKanban = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 288c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 8.8-7.2 16-16 16zm176-144c0-8.8 7.2-16 16-16s16 7.2 16 16v192c0 8.8-7.2 16-16 16s-16-7.2-16-16V144zm-80 112c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16zM0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm64 352h320c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32v320c0 17.7 14.33 32 32 32z" />
  </svg>
);

export default SvgSquareKanban;
