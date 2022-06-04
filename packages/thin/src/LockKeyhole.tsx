import * as React from "react";
import { SVGProps } from "react";

const SvgLockKeyhole = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M192 320c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64zm32-16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm0-304c70.7 0 128 57.31 128 128v64h32c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256c0-35.3 28.65-64 64-64h32v-64C96 57.31 153.3 0 224 0zm0 16c-61.9 0-112 50.14-112 112v64h224v-64c0-61.86-50.1-112-112-112zM16 256v192c0 26.5 21.49 48 48 48h320c26.5 0 48-21.5 48-48V256c0-26.5-21.5-48-48-48H64c-26.51 0-48 21.5-48 48z" />
  </svg>
);

export default SvgLockKeyhole;
