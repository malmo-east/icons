import * as React from "react";
import { SVGProps } from "react";

const SvgJar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M48 66.02V32C48 14.33 62.33 0 80 0h160c17.7 0 32 14.33 32 32v34.02c27.6 7.1 48 32.16 48 61.98v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-29.82 20.4-54.88 48-61.98zM64 32v32h192V32c0-8.84-7.2-16-16-16H80c-8.84 0-16 7.16-16 16zm192 48H64c-26.51 0-48 21.5-48 48v64h288v-64c0-26.5-21.5-48-48-48zm48 288V208H16v160h288zM16 384v64c0 26.5 21.49 48 48 48h192c26.5 0 48-21.5 48-48v-64H16z" />
  </svg>
);

export default SvgJar;
