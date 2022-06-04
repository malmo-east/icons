import * as React from "react";
import { SVGProps } from "react";

const SvgSquareUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m255.6 242.3 41.37-41.38c6.859-6.875 8.922-17.19 5.203-26.16S289.7 160 280 160H152c-13.2 0-24 10.8-24 24v128c0 9.719 5.844 18.47 14.81 22.19 2.99 1.21 6.09 1.81 9.19 1.81 6.234 0 12.38-2.438 16.97-7.031l41.37-41.38 64.57 64.57c9.369 9.371 24.57 9.37 33.94-.001l11.31-11.31c9.369-9.367 9.369-24.57 0-33.94L255.6 242.3zM384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm16 384c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16v320z" />
  </svg>
);

export default SvgSquareUpLeft;