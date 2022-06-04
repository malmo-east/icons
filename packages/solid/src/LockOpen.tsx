import * as React from "react";
import { SVGProps } from "react";

const SvgLockOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M352 192h32c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256c0-35.3 28.65-64 64-64h224v-48C288 64.47 352.5 0 432 0s144 64.47 144 144v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48c0-44.18-35.8-80-80-80s-80 35.82-80 80v48z" />
  </svg>
);

export default SvgLockOpen;
