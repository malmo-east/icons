import * as React from "react";
import { SVGProps } from "react";

const SvgTable = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm16 0v64h480V96c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48zm232 80H16v128h232V176zm16 0v128h232V176H264zm-16 144H16v96c0 26.5 21.49 48 48 48h184V320zm200 144c26.5 0 48-21.5 48-48v-96H264v144h184z" />
  </svg>
);

export default SvgTable;
