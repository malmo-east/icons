import * as React from "react";
import { SVGProps } from "react";

const SvgDiagramSubtask = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32c35.3 0 64 28.65 64 64v64c0 35.3-28.7 64-64 64H136v96c0 30.9 25.1 56 56 56h32v-24c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H288c-35.3 0-64-28.7-64-64v-24h-32c-39.8 0-72-32.2-72-72v-96H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zm0 16H64c-26.51 0-48 21.49-48 48v64c0 26.5 21.49 48 48 48h384c26.5 0 48-21.5 48-48V96c0-26.51-21.5-48-48-48zm0 256H288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48z" />
  </svg>
);

export default SvgDiagramSubtask;
