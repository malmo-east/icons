import * as React from "react";
import { SVGProps } from "react";

const SvgSquareUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-16 432H80v-16c0-61.76 50.24-112 112-112h64c61.76 0 112 50.24 112 112v16zm64-48c0 26.47-21.53 48-48 48v-16c0-70.69-57.31-128-128-128h-64c-70.69 0-128 57.31-128 128v16c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320zM224 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c44.18 0 80-35.82 80-80 0-44.2-35.8-80-80-80zm0 144c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64c0 35.3-28.7 64-64 64z" />
  </svg>
);

export default SvgSquareUser;
