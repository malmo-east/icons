import * as React from "react";
import { SVGProps } from "react";

const SvgFolderXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H275.9l-49.2-45.25C214.7 38.74 198.5 32 181.5 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h384c35.34 0 64-28.66 64-64V160c0-35.3-28.7-64-64-64zm16 320c0 8.824-7.18 16-16 16H64c-8.82 0-16-7.176-16-16V96c0-8.824 7.18-16 16-16h117.5a15.88 15.88 0 0 1 11.31 4.688L256 144h192c8.82 0 16 7.176 16 16v256zM336.1 207c-9.375-9.375-24.56-9.375-33.94 0L256 254.1 208.1 207c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L222.1 288l-47.03 47.03c-9.375 9.375-9.375 24.56 0 33.94 9.375 9.371 24.55 9.379 33.94 0L256 321.9l47.03 47.03c9.375 9.371 24.55 9.379 33.94 0 9.375-9.375 9.375-24.56 0-33.94L289.9 288l47.03-47.03c9.37-9.37 9.37-24.57-.83-33.97z" />
  </svg>
);

export default SvgFolderXmark;
