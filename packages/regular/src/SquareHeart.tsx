import * as React from "react";
import { SVGProps } from "react";

const SvgSquareHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M112.9 272.9c-26.26-26.7-26.26-70 0-96.6 26.3-26.7 68.9-26.7 95.2 0l15.9 16.1 15.9-16.1c26.3-26.7 68.9-26.7 95.2 0 26.3 26.6 26.3 69.9 0 96.6l-88.6 89.9c-6.3 6.4-14.4 9.5-22.6 9.5-8.1 0-16.2-3.2-22.4-9.5l-88.6-89.9zM0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm48 0v320c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16z" />
  </svg>
);

export default SvgSquareHeart;
