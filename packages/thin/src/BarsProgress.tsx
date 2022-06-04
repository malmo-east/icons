import * as React from "react";
import { SVGProps } from "react";

const SvgBarsProgress = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 64c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-64c0-26.51 21.49-48 48-48h416zm0 16H320v128h144c17.7 0 32-14.3 32-32v-64c0-17.67-14.3-32-32-32zM16 112v64c0 17.7 14.33 32 32 32h256V80H48c-17.67 0-32 14.33-32 32zm448 176c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-64c0-26.5 21.49-48 48-48h416zm0 16H192v128h272c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zM16 336v64c0 17.7 14.33 32 32 32h128V304H48c-17.67 0-32 14.3-32 32z" />
  </svg>
);

export default SvgBarsProgress;
