import * as React from "react";
import { SVGProps } from "react";

const SvgIdBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm32 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h256c17.64 0 32 14.36 32 32v384zM192 288c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-96c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.4-32-32 14.4-32 32-32zm32 128h-64c-44.18 0-80 35.82-80 80 0 8.8 7.16 16 16 16 8.838 0 16-7.164 16-16 0-26.5 21.5-48 48-48h64c26.51 0 48 21.49 48 48 0 8.836 7.164 16 16 16 8.838 0 16-7.164 16-16 0-44.2-35.8-80-80-80zM144 96h96c8.8 0 16-7.16 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.16-16 16s7.2 16 16 16z" />
  </svg>
);

export default SvgIdBadge;
