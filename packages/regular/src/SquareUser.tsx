import * as React from "react";
import { SVGProps } from "react";

const SvgSquareUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM113.6 432c7.4-36.5 39.8-64 78.4-64h64c38.63 0 70.96 27.53 78.39 64H113.6zM400 416c0 8.822-7.178 16-16 16h-1.613C374.4 368.9 321.2 320 256 320h-64c-65.21 0-118.4 48.95-126.4 112H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v320zM224 112c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 128c-22.05 0-40-17.95-40-40 0-22.1 17.9-40 40-40 22.06 0 40 17.94 40 40 0 22.1-17.9 40-40 40z" />
  </svg>
);

export default SvgSquareUser;
