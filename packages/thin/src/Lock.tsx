import * as React from "react";
import { SVGProps } from "react";

const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M96 192v-64C96 57.31 153.3 0 224 0s128 57.31 128 128v64h32c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256c0-35.3 28.65-64 64-64h32zm16 0h224v-64c0-61.86-50.1-112-112-112S112 66.14 112 128v64zm-48 16c-26.51 0-48 21.5-48 48v192c0 26.5 21.49 48 48 48h320c26.5 0 48-21.5 48-48V256c0-26.5-21.5-48-48-48H64z" />
  </svg>
);

export default SvgLock;
