import * as React from "react";
import { SVGProps } from "react";

const SvgFolderArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M272.1 191c-9.375-9.375-24.56-9.375-33.94 0l-80 80c-9.375 9.375-9.375 24.56 0 33.94s24.56 9.375 33.94 0L232 265.9V368c0 13.25 10.75 24 24 24s24-10.75 24-24V265.9l39.03 39.03C323.7 309.7 329.8 312 336 312s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L272.1 191zM448 96H275.9l-49.2-45.25C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160c0-35.3-28.7-64-64-64zm16 320c0 8.824-7.178 16-16 16H64c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h117.5c4.273 0 8.293 1.664 11.31 4.688L256 144h192c8.822 0 16 7.176 16 16v256z" />
  </svg>
);

export default SvgFolderArrowUp;