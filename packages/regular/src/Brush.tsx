import * as React from "react";
import { SVGProps } from "react";

const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64h-64v64c0 35.3-28.7 64-64 64s-64-28.7-64-64v-64H64c-35.35 0-64-28.7-64-64V64zm336 224V64c0-8.84-7.2-16-16-16h-96v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V48h-64v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V48H64c-8.84 0-16 7.16-16 16v224h288zM192 464c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z" />
  </svg>
);

export default SvgBrush;