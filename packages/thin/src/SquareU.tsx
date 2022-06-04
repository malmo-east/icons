import * as React from "react";
import { SVGProps } from "react";

const SvgSquareU = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm48 384c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320zM328 128c-4.4 0-8 3.6-8 8v141.8c0 49.7-43.1 90.2-96 90.2s-96-40.45-96-90.19V136c0-4.4-3.6-8-8-8s-8 3.6-8 8v141.8c0 58.6 50.3 106.2 112 106.2s112-47.64 112-106.2V136c0-4.4-3.6-8-8-8z" />
  </svg>
);

export default SvgSquareU;
