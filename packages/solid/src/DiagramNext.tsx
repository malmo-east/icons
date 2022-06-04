import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramNext = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 160c0 35.3-28.7 64-64 64H280v64h46.1c21.3 0 32 25.9 16.9 40.1L272.1 399c-8.5 9.4-23.7 9.4-33.1 0l-70.9-70.9c-14.2-14.2-3.5-40.1 17.8-40.1H232v-64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v64zM312.6 416H448v-64h-71.4l7.5-8.4c16.9-16 20.5-37.2 14.9-55.6h49c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-64c0-35.3 28.65-64 64-64h48.1c-4.7 18.4-2 39.6 14.9 55.6l8.4 8.4H64v64h135.4l17 16.1c21.9 22.7 57.3 22.7 79.2 0l17-16.1z" />
  </svg>
);

export default SvgDiagramNext;
