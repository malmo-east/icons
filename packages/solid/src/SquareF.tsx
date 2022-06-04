import * as React from "react";
import { SVGProps } from "react";

const SvgSquareF = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-88 144H176v64h88c13.3 0 24 10.8 24 24s-10.7 24-24 24h-88v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.2 10.8-24 24-24h144c13.3 0 24 10.8 24 24s-10.7 24-24 24z" />
  </svg>
);

export default SvgSquareF;