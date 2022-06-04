import * as React from "react";
import { SVGProps } from "react";

const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M80 128c0-8.8 7.16-16 16-16 8.8 0 16 7.2 16 16s-7.2 16-16 16c-8.84 0-16-7.2-16-16zm128 0c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zm64 0c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zM0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm16 0v320c0 26.5 21.49 48 48 48h384c26.5 0 48-21.5 48-48V96c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48z" />
  </svg>
);

export default SvgWindow;
