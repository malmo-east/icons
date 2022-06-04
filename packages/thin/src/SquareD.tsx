import * as React from "react";
import { SVGProps } from "react";

const SvgSquareD = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm48 384c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320zM224 128h-88c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h88c70.58 0 128-57.42 128-128s-57.4-128-128-128zm0 240h-80V144h80c61.75 0 112 50.25 112 112s-50.2 112-112 112z" />
  </svg>
);

export default SvgSquareD;
