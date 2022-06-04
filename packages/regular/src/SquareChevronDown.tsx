import * as React from "react";
import { SVGProps } from "react";

const SvgSquareChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m319 207-95 95.1-95.9-95.1c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l112 112C211.7 357.7 217.8 360 224 360s12.28-2.344 16.97-7.031l112-112c9.375-9.375 9.375-24.56 0-33.94S328.4 197.7 319 207zm65-175H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm16 384c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16v320z" />
  </svg>
);

export default SvgSquareChevronDown;