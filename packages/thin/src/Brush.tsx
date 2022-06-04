import * as React from "react";
import { SVGProps } from "react";

const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M208 448c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zM0 288V64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v224c0 44.2-35.8 80-80 80h-48v80c0 35.3-28.7 64-64 64s-64-28.7-64-64v-80H80c-44.18 0-80-35.8-80-80zm304 64c35.3 0 64-28.7 64-64v-16H16v16c0 35.3 28.65 64 64 64h64v96c0 26.5 21.5 48 48 48s48-21.5 48-48v-96h64zm64-288c0-26.51-21.5-48-48-48h-48v88c0 4.4-3.6 8-8 8s-8-3.6-8-8V16h-64v72c0 4.42-3.6 8-8 8s-8-3.58-8-8V16H96v104c0 4.4-3.58 8-8 8s-8-3.6-8-8V16H64c-26.51 0-48 21.49-48 48v192h352V64z" />
  </svg>
);

export default SvgBrush;
