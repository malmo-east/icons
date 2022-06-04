import * as React from "react";
import { SVGProps } from "react";

const SvgRectangleXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M178.3 178.3c3.2-3.1 8.2-3.1 11.4 0l66.3 66.4 66.3-66.4c3.2-3.1 8.2-3.1 11.4 0 3.1 3.2 3.1 8.2 0 11.4L267.3 256l66.4 66.3c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0L256 267.3l-66.3 66.4a8.15 8.15 0 0 1-11.4 0 8.15 8.15 0 0 1 0-11.4l66.4-66.3-66.4-66.3a8.15 8.15 0 0 1 0-11.4zM0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm16 0v320c0 26.5 21.49 48 48 48h384c26.5 0 48-21.5 48-48V96c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48z" />
  </svg>
);

export default SvgRectangleXmark;
