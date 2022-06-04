import * as React from "react";
import { SVGProps } from "react";

const SvgLockOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M336 192h48c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256c0-35.3 28.65-64 64-64h256v-64C320 57.31 377.3 0 448 0s128 57.31 128 128v88c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88c0-61.86-50.1-112-112-112S336 66.14 336 128v64zM64 208c-26.51 0-48 21.5-48 48v192c0 26.5 21.49 48 48 48h320c26.5 0 48-21.5 48-48V256c0-26.5-21.5-48-48-48H64z" />
  </svg>
);

export default SvgLockOpen;
