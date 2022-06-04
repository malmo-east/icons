import * as React from "react";
import { SVGProps } from "react";

const SvgFolderHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H275.9l-49.2-45.25C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160c0-35.3-28.7-64-64-64zm16 320c0 8.824-7.178 16-16 16H64c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h117.5c4.273 0 8.293 1.664 11.31 4.688L256 144h192c8.822 0 16 7.176 16 16v256zM264.3 210.9l-8.4 8.8-8.5-8.8c-21.4-22.2-56.3-25.8-79.8-5.8-26.9 23-28.4 64.2-4.3 89.2l82.93 85.56c5.385 5.504 14.04 5.504 19.42 0l82.97-85.56c24.11-25.02 22.64-66.17-4.41-89.19-23.31-20.01-58.31-16.41-79.91 5.79z" />
  </svg>
);

export default SvgFolderHeart;