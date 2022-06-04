import * as React from "react";
import { SVGProps } from "react";

const SvgBoreHole = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M264 272.5c31.6 3.9 56 30.9 56 63.5 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-32.6 24.4-59.6 56-63.5V8c0-4.418 3.6-8 8-8s8 3.582 8 8v264.5zM256 384c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-96-256v208c0 53 42.1 96 96 96 53 0 96-43 96-96V128h96c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192c0-35.3 28.65-64 64-64h96zm288 16h-80v192c0 61.9-50.1 112-112 112s-112-50.1-112-112V144H64c-26.51 0-48 21.5-48 48v256c0 26.5 21.49 48 48 48h384c26.5 0 48-21.5 48-48V192c0-26.5-21.5-48-48-48z" />
  </svg>
);

export default SvgBoreHole;
