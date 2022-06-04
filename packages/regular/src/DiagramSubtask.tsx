import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramSubtask = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v64c0 35.3-28.7 64-64 64H152v96c0 22.1 17.9 40 40 40h32v-8c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H288c-35.3 0-64-28.7-64-64v-8h-32c-48.6 0-88-39.4-88-88v-96H64c-35.35 0-64-28.7-64-64V96zm448 240H288c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16z" />
  </svg>
);

export default SvgDiagramSubtask;