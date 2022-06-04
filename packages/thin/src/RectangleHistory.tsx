import * as React from "react";
import { SVGProps } from "react";

const SvgRectangleHistory = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 128c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192c0-35.3 28.65-64 64-64h384zm0 16H64c-26.51 0-48 21.5-48 48v256c0 26.5 21.49 48 48 48h384c26.5 0 48-21.5 48-48V192c0-26.5-21.5-48-48-48zm8-80c4.4 0 8 3.58 8 8s-3.6 8-8 8H56c-4.42 0-8-3.58-8-8s3.58-8 8-8h400zM408 0c4.4 0 8 3.582 8 8 0 4.42-3.6 8-8 8H104c-4.42 0-8-3.58-8-8a8 8 0 0 1 8-8h304z" />
  </svg>
);

export default SvgRectangleHistory;
