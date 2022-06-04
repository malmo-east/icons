import * as React from "react";
import { SVGProps } from "react";

const SvgFireHydrant = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M56 176h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-12.53C303.9 83.17 268.8 48.13 224 36.53V32c0-17.67-14.33-32-32-32s-32 14.33-32 32v4.525C115.2 48.13 80.13 83.17 68.53 128H56c-13.25 0-24 10.7-24 24s10.75 24 24 24zm264 64v-32h-48v64h32v96h-32v96H112v-96H80v-96h32v-64H64v32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32v64h-8c-13.25 0-24 10.7-24 24s10.75 24 24 24h272c13.25 0 24-10.75 24-24 0-13.26-10.75-24-24-24h-8v-64c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm-192 80c0 35.35 28.65 64 64 64s64-28.65 64-64-28.65-64-64-64-64 28.7-64 64z" />
  </svg>
);

export default SvgFireHydrant;
