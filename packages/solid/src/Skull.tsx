import * as React from "react";
import { SVGProps } from "react";

const SvgSkull = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 400v64c0 26.5-21.5 48-48 48h-48v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-64v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-26.5 0-48-21.5-48-48v-64c0-.4 0-.7.01-1.1C37.48 357.8 0 294.7 0 224 0 100.3 114.6 0 256 0s256 100.3 256 224c0 70.7-37.5 133.8-96.9 174.9 0 .4.9.7.9 1.1zM160 192c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm192 128c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z" />
  </svg>
);

export default SvgSkull;
