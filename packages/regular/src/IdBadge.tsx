import * as React from "react";
import { SVGProps } from "react";

const SvgIdBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm16 448c0 8.836-7.164 16-16 16H64c-8.836 0-16-7.164-16-16V64c0-8.838 7.164-16 16-16h64v16c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V48h64c8.836 0 16 7.162 16 16v384zM192 288c35.35 0 64-28.65 64-64s-28.65-64-64-64c-35.3 0-64 28.7-64 64s28.7 64 64 64zm32 32h-64c-44.18 0-80 35.82-80 80 0 8.8 7.16 16 16 16h192c8.836 0 16-7.164 16-16 0-44.2-35.8-80-80-80z" />
  </svg>
);

export default SvgIdBadge;