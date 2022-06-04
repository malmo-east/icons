import * as React from "react";
import { SVGProps } from "react";

const SvgFolderGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H275.9l-49.2-45.25C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160c0-35.3-28.7-64-64-64zm16 320c0 8.824-7.178 16-16 16H64c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h117.5c4.273 0 8.293 1.664 11.31 4.688L256 144h192c8.822 0 16 7.176 16 16v256zM160 240H96c-8.84 0-16 7.2-16 16v64c0 8.844 7.156 16 16 16h64c8.844 0 16-7.156 16-16v-64c0-8.8-7.2-16-16-16zm128 0h-64c-8.8 0-16 7.2-16 16v64c0 8.844 7.156 16 16 16h64c8.844 0 16-7.156 16-16v-64c0-8.8-7.2-16-16-16zm128 0h-64c-8.844 0-16 7.156-16 16v64c0 8.844 7.156 16 16 16h64c8.844 0 16-7.156 16-16v-64c0-8.8-7.2-16-16-16z" />
  </svg>
);

export default SvgFolderGrid;