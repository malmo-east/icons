import * as React from "react";
import { SVGProps } from "react";

const SvgSquareE = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm48 384c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320zM312 144c4.4 0 8-3.6 8-8s-3.6-8-8-8H136c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h176c4.422 0 8-3.578 8-8s-3.578-8-8-8H144V264h120c4.422 0 8-3.578 8-8s-3.578-8-8-8H144V144h168z" />
  </svg>
);

export default SvgSquareE;