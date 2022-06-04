import * as React from "react";
import { SVGProps } from "react";

const SvgBookUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 368V48c0-26.51-21.5-48-48-48H80C35.82 0 0 35.82 0 80v368c0 35.35 28.65 64 64 64h368c8.844 0 16-7.156 16-16s-7.2-16-16-16h-16v-66.95c18.6-6.65 32-24.25 32-45.05zm-64 112H64c-17.64 0-32-14.36-32-32s14.36-32 32-32h320v64zm16-96H64c-11.71 0-22.55 3.389-32 8.9V80c0-26.51 21.49-48 48-48h320c8.8 0 16 7.16 16 16v320c0 8.8-7.2 16-16 16zM256 240h-64c-44.18 0-80 35.82-80 80 0 8.836 7.164 16 16 16s16-7.164 16-16c0-26.51 21.49-48 48-48h64c26.51 0 48 21.49 48 48 0 8.836 7.164 16 16 16s16-7.164 16-16c0-44.2-35.8-80-80-80zm-32-32c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.65-64 64 28.7 64 64 64zm0-96c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.36-32-32 14.4-32 32-32z" />
  </svg>
);

export default SvgBookUser;
