import * as React from "react";
import { SVGProps } from "react";

const SvgFolderBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H275.9l-49.2-45.25C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160c0-35.3-28.7-64-64-64zm16 320c0 8.824-7.178 16-16 16H64c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h117.5c4.273 0 8.293 1.664 11.31 4.688L256 144v159.1c0 13.41 15.52 20.86 25.1 12.48L336 273.3l54 43.2c10.5 8.3 26 .9 26-13.4V144h32c8.822 0 16 7.176 16 16v256z" />
  </svg>
);

export default SvgFolderBookmark;
