import * as React from "react";
import { SVGProps } from "react";

const SvgRectangleCode = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m320.1 175 64 64c10.2 9.4 10.2 24.6 0 33.1l-64 64c-8.5 10.2-23.7 10.2-33.1 0-9.3-8.5-9.3-23.7 0-33.1l47.1-47-47.1-47.9c-9.3-8.5-9.3-23.7 0-33.1 9.4-9.3 24.6-9.3 33.1 0zm-142.2 81 46.2 47c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-64-64c-9.3-8.5-9.3-23.7 0-33.1l64-64c9.4-9.3 24.6-9.3 33.1 0 10.2 9.4 10.2 24.6 0 33.1L177.9 256zM448 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zm0 48H64c-8.84 0-16 7.16-16 16v320c0 8.8 7.16 16 16 16h384c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16z" />
  </svg>
);

export default SvgRectangleCode;