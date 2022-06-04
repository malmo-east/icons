import * as React from "react";
import { SVGProps } from "react";

const SvgBarsProgress = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 64c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-64c0-26.51 21.49-48 48-48h416zm0 48H320v64h144v-64zm0 176c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-64c0-26.5 21.49-48 48-48h416zm0 48H192v64h272v-64z" />
  </svg>
);

export default SvgBarsProgress;
