import * as React from "react";
import { SVGProps } from "react";

const SvgSquareParking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M256 128c48.6 0 88 39.4 88 88s-39.4 88-88 88h-96v72c0 4.4-3.6 8-8 8s-8-3.6-8-8V144c0-8.8 7.2-16 16-16h96zm72 88c0-39.8-32.2-72-72-72h-96v144h96c39.8 0 72-32.2 72-72zM0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm16 0v320c0 26.5 21.49 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48z" />
  </svg>
);

export default SvgSquareParking;
