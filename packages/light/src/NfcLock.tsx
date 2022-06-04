import * as React from "react";
import { SVGProps } from "react";

const SvgNfcLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M272 448H64c-17.67 0-32-14.33-32-32V96c0-17.67 14.33-32 32-32h320c17.67 0 32 14.33 32 32v48c0 8.8 7.2 16 16 16s16-7.2 16-16V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h208c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16zm240-128v-64c0-35.3-28.7-64-64-64s-64 28.7-64 64v64c-35.35 0-64 28.65-64 64v64c0 35.35 28.65 64 64 64h128c35.35 0 64-28.65 64-64v-64c0-35.3-28.7-64-64-64zm-96-64c0-17.64 14.36-32 32-32s32 14.36 32 32v64h-64v-64zm128 192c0 17.64-14.36 32-32 32H384c-17.64 0-32-14.36-32-32v-64c0-17.64 14.36-32 32-32h128c17.64 0 32 14.36 32 32v64zM368 192c8.8 0 16-7.2 16-16v-48c0-17.67-14.33-32-32-32H224c-8.8 0-16 7.2-16 16v98.94c-21.4 7.66-36 29.86-31.9 54.86 4.5 18.3 19.2 33.2 37.4 37.1 31 6.6 58.5-17 58.5-46.9 0-20.83-13.42-38.43-32-45.06V128h112v48c0 8.8 7.2 16 16 16zm-144 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm48 112H96V128h47.17c7.969 0 15.35-5.455 16.62-13.32C161.4 104.6 153.7 96 144 96H96c-17.67 0-32 14.3-32 32v256c0 17.67 14.33 32 32 32h176c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16z" />
  </svg>
);

export default SvgNfcLock;
